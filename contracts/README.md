# ArcBridge

ArcBridge is a production-style multi-chain bridge dApp designed for moving assets across Arc Network, Ethereum Sepolia, BNB Chain, Arbitrum, Linea, Base, and Polygon.

## Goals

- Provide a polished Web3 bridge experience with a soft baby pink design system.
- Support wallet connectivity and chain switching for multiple EVM networks.
- Model a trade-to-earn points engine and a lifetime referral bonus system.
- Present a dashboard with analytics, referral stats, activity history, and leaderboard views.
- Keep the project cleanly structured for future production deployment.

## Repository Layout

```bash
.
├── contracts/
│   ├── .env.example
│   ├── .gitignore
│   ├── README.md
│   ├── contracts/
│   │   └── MultiChainBridge.sol
│   ├── hardhat.config.js
│   ├── package.json
│   ├── scripts/
│   │   └── deploy.js
│   └── test/
├── frontend/
│   ├── .env.example
│   ├── .gitignore
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── providers.tsx
│   ├── next.config.js
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.ts
│   ├── tsconfig.json
│   └── public/
│       └── logo.svg
├── .gitignore
├── README.md
└── package.json (optional root tooling)
```

## Smart Contract Overview

The Solidity contract in `contracts/contracts/MultiChainBridge.sol` includes:

- owner-controlled pause / unpause
- referral binding logic
- per-user point tracking
- referral count tracking
- bridge deposit event emission
- owner fund withdrawal safety

This baseline is suitable for a production-ready MVP and can be extended to true cross-chain message relaying and lock/mint or burn/unlock flows.

## Frontend Overview

The Next.js app includes:

- baby pink glassmorphism wallet UI
- source/target blockchain selector
- token selection and amount entry
- recipient input and gas estimation visuals
- faucet CTA
- referral hub and leaderboard tabs
- user activity dashboard and analytics summary cards

## Prerequisites

- Node.js 18+
- npm
- Git
- A wallet like MetaMask
- RPC provider URLs for the target testnets
- WalletConnect project ID for RainbowKit

## Smart Contract Setup

```bash
cd contracts
cp .env.example .env
npm install
npx hardhat compile
npx hardhat run scripts/deploy.js --network sepolia
```

### Contract environment variables

```bash
PRIVATE_KEY=your_wallet_private_key
SEPOLIA_RPC_URL=https://ethereum-sepolia-rpc.publicnode.com
BSC_TESTNET_RPC_URL=https://bsc-testnet.public.blastapi.io
ARBITRUM_SEPOLIA_RPC_URL=https://sepolia-rollup.arbitrum.io/rpc
POLYGON_AMOY_RPC_URL=https://rpc-amoy.polygon.technology
BASE_SEPOLIA_RPC_URL=https://sepolia.base.org
LINEA_SEPOLIA_RPC_URL=https://rpc.sepolia.linea.build
```

## Frontend Setup

```bash
cd frontend
cp .env.example .env.local
npm install
npm run dev
```

### Frontend env variables

```bash
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id
NEXT_PUBLIC_APP_NAME=ArcBridge
NEXT_PUBLIC_APP_DESCRIPTION=Universal Multi-Chain Bridge
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_ICON=http://localhost:3000/logo.svg
```

## Production Readiness Notes

This project is a strong MVP foundation and includes the requested design system and user experience flows. For a full production-grade release, the next steps are:

- deploy to live testnets and validate wallet flows
- integrate real bridge relayer logic and settlement contracts
- add fee estimation and cross-chain confirmation tracking
- create persistent analytics and referral backend storage
- add robust monitoring, alerts, and security audits

## License

MIT
