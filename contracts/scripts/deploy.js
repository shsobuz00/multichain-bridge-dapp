const hre = require('hardhat');

async function main() {
  const MultiChainBridge = await hre.ethers.getContractFactory('MultiChainBridge');
  const contract = await MultiChainBridge.deploy();

  await contract.waitForDeployment();

  console.log('MultiChainBridge deployed to:', await contract.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
