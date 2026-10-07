'use client';

import '@rainbow-me/rainbowkit/styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { WagmiProvider, http } from 'wagmi';
import {
  arbitrumSepolia,
  baseSepolia,
  bscTestnet,
  lineaSepolia,
  polygonAmoy,
  sepolia,
} from 'viem/chains';
import { defineChain } from 'viem';
import { getDefaultConfig, RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';

const arcNetwork = defineChain({
  id: 1337,
  name: 'Arc Network',
  nativeCurrency: { name: 'Arc', symbol: 'ARC', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://rpc.arc.network'] },
  },
  blockExplorers: {
    default: { name: 'ArcScan', url: 'https://arcscan.io' },
  },
  testnet: true,
});

const chainList = [
  arcNetwork,
  sepolia,
  bscTestnet,
  arbitrumSepolia,
  lineaSepolia,
  baseSepolia,
  polygonAmoy,
] as const;

const config = getDefaultConfig({
  appName: process.env.NEXT_PUBLIC_APP_NAME || 'ArcBridge',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'demo-walletconnect-project',
  chains: chainList,
  ssr: true,
  transports: {
    [arcNetwork.id]: http('https://rpc.arc.network'),
    [sepolia.id]: http('https://ethereum-sepolia-rpc.publicnode.com'),
    [bscTestnet.id]: http('https://bsc-testnet.public.blastapi.io'),
    [arbitrumSepolia.id]: http('https://sepolia-rollup.arbitrum.io/rpc'),
    [lineaSepolia.id]: http('https://rpc.sepolia.linea.build'),
    [baseSepolia.id]: http('https://sepolia.base.org'),
    [polygonAmoy.id]: http('https://rpc-amoy.polygon.technology'),
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={darkTheme({
            accentColor: '#f472b6',
            accentColorForeground: 'white',
            borderRadius: 'medium',
            fontStack: 'system',
          })}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
