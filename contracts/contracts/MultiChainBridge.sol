
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract MultiChainBridge {
    address public owner;
    bool public paused;
    uint256 public constant REFERRAL_BONUS_BPS = 1000; // 10%

    mapping(address => address) public referrerOf;
    mapping(address => uint256) public userPoints;
    mapping(address => uint256) public referralPoints;
    mapping(address => uint256) public referralCount;

    event TokensDeposited(
        address indexed sender,
        address indexed recipient,
        uint256 amount,
        uint32 targetChainId,
        address referrer
    );
    event EmergencyPause(bool status);
    event ReferralBound(address indexed user, address indexed referrer);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    modifier whenNotPaused() {
        require(!paused, "Bridge is paused");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    receive() external payable {}

    function bridgeTokens(
        address recipient,
        uint32 targetChainId,
        address referrer
    ) external payable whenNotPaused {
        require(msg.value > 0, "Amount must be greater than 0");
        require(recipient != address(0), "Recipient cannot be zero");

        if (referrerOf[msg.sender] == address(0) && referrer != address(0) && referrer != msg.sender) {
            referrerOf[msg.sender] = referrer;
            referralCount[referrer]++;
            emit ReferralBound(msg.sender, referrer);
        }

        userPoints[msg.sender] += 1;
        address activeReferrer = referrerOf[msg.sender];
        if (activeReferrer != address(0)) {
            referralPoints[activeReferrer] += 1;
        }

        emit TokensDeposited(msg.sender, recipient, msg.value, targetChainId, activeReferrer);
    }

    function togglePause(bool _status) external onlyOwner {
        paused = _status;
        emit EmergencyPause(_status);
    }

    function withdrawOwnerFunds() external onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "Nothing to withdraw");
        (bool success, ) = payable(owner).call{value: balance}("");
        require(success, "Withdraw failed");
    }
}
