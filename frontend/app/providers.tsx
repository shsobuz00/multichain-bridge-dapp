'use client';

import '@rainbow-me/rainbowkit/styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { WagmiProvider, http } from 'wagmi';
import {
  mainnet,
  sepolia,
  polygon,
  arbitrum,
  base,
  linea,
} from 'wagmi/chains';
import { getDefaultConfig, RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';

const chainList = [
  mainnet,
  sepolia,
  polygon,
  arbitrum,
  base,
  linea,
] as const;

const config = getDefaultConfig({
  appName: process.env.NEXT_PUBLIC_APP_NAME || 'ArcBridge',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'demo-walletconnect-project',
  chains: chainList,
  ssr: true,
  transports: {
    [mainnet.id]: http('https://ethereum-rpc.publicnode.com'),
    [sepolia.id]: http('https://ethereum-sepolia-rpc.publicnode.com'),
    [polygon.id]: http('https://polygon-rpc.com'),
    [arbitrum.id]: http('https://arb1.arbitrum.io/rpc'),
    [base.id]: http('https://mainnet.base.org'),
    [linea.id]: http('https://linea.drpc.org'),
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme({ accentColor: '#f472b6', accentColorForeground: 'white', borderRadius: 'medium', fontStack: 'system' })}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
