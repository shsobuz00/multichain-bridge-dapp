"use client";

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { motion } from 'framer-motion';
import {
  ArrowDownUp,
  ArrowRightLeft,
  BadgeCheck,
  BellDot,
  Crown,
  Database,
  Flame,
  Gift,
  Globe,
  LoaderCircle,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Wallet,
  Zap,
} from 'lucide-react';
import { useState } from 'react';
import { Providers } from './providers';

const networks = [
  { name: 'Arc Network', icon: 'A', color: 'bg-pink-500/20 text-pink-200' },
  { name: 'Ethereum', icon: 'Ξ', color: 'bg-slate-500/20 text-slate-200' },
  { name: 'BNB', icon: 'B', color: 'bg-yellow-500/20 text-yellow-100' },
  { name: 'Arbitrum', icon: 'AR', color: 'bg-blue-500/20 text-blue-200' },
  { name: 'Linea', icon: 'L', color: 'bg-violet-500/20 text-violet-200' },
  { name: 'Base', icon: 'BS', color: 'bg-cyan-500/20 text-cyan-200' },
  { name: 'Polygon', icon: 'P', color: 'bg-purple-500/20 text-purple-200' },
];

const tokens = ['ETH', 'USDC', 'USDT', 'BNB'];

const analytics = [
  { label: 'Volume Bridged', value: '$18.4M', icon: TrendingUp },
  { label: 'Tx Count', value: '46.2K', icon: Database },
  { label: 'Active Chains', value: '7', icon: Globe },
  { label: 'Active Wallets', value: '12.8K', icon: Wallet },
];

const referrals = [
  { address: '0xA12...9b2C', joined: '2 days ago', trades: 18, points: 1340 },
  { address: '0xD31...D8AE', joined: '5 days ago', trades: 9, points: 870 },
  { address: '0x9E4...b0F3', joined: '1 week ago', trades: 4, points: 340 },
];

const activity = [
  { source: 'Arc Network', target: 'Ethereum', token: 'USDC', amount: '800.00', status: 'Completed', tx: '0x91...d1' },
  { source: 'Base', target: 'Polygon', token: 'ETH', amount: '1.42', status: 'Pending', tx: '0x64...f9' },
  { source: 'BNB', target: 'Arc', token: 'BNB', amount: '5.20', status: 'Completed', tx: '0x26...0a' },
];

const leaderboard = [
  { rank: 1, wallet: '0xF71...B0A1', trades: 88, tradePoints: 1450, referralPoints: 840, total: 2290 },
  { rank: 2, wallet: '0xA22...AAF4', trades: 72, tradePoints: 1380, referralPoints: 450, total: 1830 },
  { rank: 3, wallet: '0x81D...F8C2', trades: 61, tradePoints: 1080, referralPoints: 670, total: 1750 },
];

function StatCard({ label, value, icon: Icon }: { label: string; value: string; icon: any }) {
  return (
    <div className="glass rounded-2xl p-4 pink-glow">
      <div className="flex items-center justify-between text-pink-100">
        <p className="text-xs uppercase tracking-[0.2em] text-pink-200/80">{label}</p>
        <span className="rounded-full bg-pink-500/10 p-2 text-pink-200"><Icon size={16} /></span>
      </div>
      <p className="mt-5 text-3xl font-bold text-white">{value}</p>
    </div>
  );
}

function NetworkBadge({ name, icon, color }: { name: string; icon: string; color: string }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-pink-400/20 bg-white/5 px-2 py-2 text-sm text-pink-50">
      <span className={`flex h-7 w-7 items-center justify-center rounded-lg text-xs font-bold ${color}`}>{icon}</span>
      {name}
    </div>
  );
}

export default function Home() {
  const [sourceChain, setSourceChain] = useState('Arc Network');
  const [targetChain, setTargetChain] = useState('Ethereum');
  const [token, setToken] = useState('ETH');
  const [amount, setAmount] = useState('1.25');
  const [activeView, setActiveView] = useState('Bridge');
  const [walletConnected, setWalletConnected] = useState(true);

  const tabs = ['Bridge', 'Referral Hub', 'Leaderboard', 'Activity'];

  const quickSwap = () => {
    setSourceChain(targetChain);
    setTargetChain(sourceChain);
  };

  return (
    <Providers>
      <main className="min-h-screen bg-pink-radial text-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <header className="glass sticky top-4 z-20 flex items-center justify-between rounded-2xl px-4 py-3 shadow-glow">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-pink-300 via-pink-400 to-pink-500 font-black text-slate-950">
                A
              </div>
              <div>
                <div className="text-lg font-bold tracking-wide">ArcBridge</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-pink-200/70">Universal</div>
              </div>
            </div>

            <nav className="hidden items-center gap-2 md:flex">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveView(tab)}
                  className={`rounded-full px-3 py-2 text-sm ${
                    activeView === tab
                      ? 'bg-gradient-to-r from-pink-400 to-pink-500 text-white shadow-glow'
                      : 'bg-white/5 text-pink-50/90 hover:bg-pink-500/10'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <div className="hidden rounded-full border border-pink-400/30 bg-white/5 px-3 py-2 text-xs text-pink-100 lg:flex">
                Arc Network
              </div>

              <button className="rounded-full border border-pink-300/30 bg-pink-500/10 px-3 py-2 text-xs font-medium text-pink-100 hover:bg-pink-500/20">
                Faucet
              </button>

              <div className="hidden items-center gap-2 rounded-full border border-pink-300/30 bg-white/5 px-2 py-1 md:flex">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-pink-500/20 text-xs font-bold text-pink-100">X</span>
                <span className="text-xs text-pink-100">@ArcBridge</span>
              </div>

              <ConnectButton showBalance={false} accountStatus="address" chainStatus="icon" />
            </div>
          </header>

          <section className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {analytics.map((item) => (
              <StatCard key={item.label} label={item.label} value={item.value} icon={item.icon} />
            ))}
          </section>

          <div className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <section className="glass rounded-3xl p-5 pink-glow">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-pink-200/70">Bridge</p>
                  <h1 className="mt-2 text-2xl font-bold text-white">Transfer Across Chains</h1>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-200">
                  <ShieldCheck size={15} />
                  Secured & active
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-pink-400/20 bg-white/5 p-4">
                  <div className="flex items-center justify-between">
                    <label className="text-xs uppercase tracking-[0.2em] text-pink-200/70">From</label>
                    <button className="inline-flex items-center gap-2 rounded-full border border-pink-300/20 bg-pink-500/10 px-2 py-1 text-xs text-pink-50">
                      <Zap size={12} /> Quick swap
                    </button>
                  </div>

                  <div className="mt-3 flex flex-col gap-3 md:flex-row md:items-center">
                    <select
                      value={sourceChain}
                      onChange={(e) => setSourceChain(e.target.value)}
                      className="w-full rounded-2xl border border-pink-400/20 bg-[#170d19] px-3 py-3 text-base text-white outline-none"
                    >
                      {networks.map((network) => (
                        <option key={network.name} value={network.name}>{network.name}</option>
                      ))}
                    </select>

                    <input
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full rounded-2xl border border-pink-400/20 bg-[#170d19] px-3 py-3 text-base text-white outline-none md:max-w-[160px]"
                    />
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    onClick={quickSwap}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-pink-300/30 bg-gradient-to-r from-pink-400 to-pink-500 text-white shadow-glow"
                  >
                    <ArrowDownUp size={20} />
                  </button>
                </div>

                <div className="rounded-2xl border border-pink-400/20 bg-white/5 p-4">
                  <label className="text-xs uppercase tracking-[0.2em] text-pink-200/70">To</label>
                  <div className="mt-3 flex flex-col gap-3 md:flex-row md:items-center">
                    <select
                      value={targetChain}
                      onChange={(e) => setTargetChain(e.target.value)}
                      className="w-full rounded-2xl border border-pink-400/20 bg-[#170d19] px-3 py-3 text-base text-white outline-none"
                    >
                      {networks.map((network) => (
                        <option key={network.name} value={network.name}>{network.name}</option>
                      ))}
                    </select>

                    <select
                      value={token}
                      onChange={(e) => setToken(e.target.value)}
                      className="w-full rounded-2xl border border-pink-400/20 bg-[#170d19] px-3 py-3 text-base text-white outline-none md:max-w-[140px]"
                    >
                      {tokens.map((item) => (
                        <option key={item} value={item}>{item}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="rounded-2xl border border-pink-400/20 bg-[#1a0d17] p-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-pink-100/80">Recipient</span>
                    <button className="text-pink-200">Use my wallet</button>
                  </div>
                  <input
                    placeholder="0x4f...d3e2"
                    className="mt-3 w-full rounded-2xl border border-pink-400/20 bg-[#120d16] px-3 py-3 text-white outline-none"
                  />
                </div>

                <div className="rounded-2xl border border-pink-400/20 bg-gradient-to-r from-pink-500/10 to-white/5 p-4">
                  <div className="flex items-center justify-between text-sm text-pink-100/80">
                    <span>Estimated gas</span>
                    <span>0.005 ETH</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-sm text-pink-100/80">
                    <span>Relayer fee</span>
                    <span>$7.82</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-sm text-pink-100/80">
                    <span>Referral bonus</span>
                    <span className="text-emerald-300">+10%</span>
                  </div>
                </div>

                <button className="w-full rounded-2xl bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500 px-4 py-4 text-lg font-bold text-slate-950 shadow-glow hover:brightness-110">
                  {walletConnected ? 'Review Bridge' : 'Connect Wallet'}
                </button>
              </div>
            </section>

            <aside className="space-y-6">
              <div className="glass rounded-3xl p-5 pink-glow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-pink-200/70">Rewards</p>
                    <h2 className="mt-2 text-xl font-bold">Points Engine</h2>
                  </div>
                  <span className="rounded-full bg-pink-500/10 p-2 text-pink-200"><Flame size={18} /></span>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="rounded-2xl bg-white/5 p-3">
                    <div className="flex items-center justify-between text-sm text-pink-100/80">
                      <span>Trade-to-Earn</span>
                      <span>+1 point</span>
                    </div>
                    <p className="mt-2 text-2xl font-bold text-white">2,430</p>
                  </div>

                  <div className="rounded-2xl bg-white/5 p-3">
                    <div className="flex items-center justify-between text-sm text-pink-100/80">
                      <span>Referral Points</span>
                      <span>+10% lifetime</span>
                    </div>
                    <p className="mt-2 text-2xl font-bold text-white">840</p>
                  </div>
                </div>
              </div>

              <div className="glass rounded-3xl p-5 pink-glow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-pink-200/70">Faucet</p>
                    <h2 className="mt-2 text-xl font-bold">Claim Test Tokens</h2>
                  </div>
                  <span className="rounded-full bg-pink-500/10 p-2 text-pink-200"><Gift size={18} /></span>
                </div>

                <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl border border-pink-300/30 bg-pink-500/10 px-4 py-3 font-semibold text-pink-100 hover:bg-pink-500/20">
                  <LoaderCircle size={16} className="animate-spin" />
                  Request funds
                </button>
              </div>
            </aside>
          </div>

          {activeView === 'Referral Hub' && (
            <section className="mt-6 glass rounded-3xl p-5 pink-glow">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-pink-200/70">Referral hub</p>
                  <h2 className="mt-2 text-2xl font-bold">Grow your network</h2>
                </div>
                <div className="flex items-center gap-3">
                  <button className="rounded-full bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500 px-4 py-2 font-semibold text-slate-950">
                    Copy referral link
                  </button>
                  <button className="rounded-full border border-pink-300/30 bg-white/5 px-4 py-2 text-pink-100">
                    Share on X
                  </button>
                </div>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <StatCard label="Invited friends" value="184" icon={BadgeCheck} />
                <StatCard label="Referral points" value="8.4K" icon={Gift} />
                <StatCard label="Active referrals" value="27" icon={Sparkles} />
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-pink-400/20 bg-[#150d1a]">
                <table className="w-full text-left text-sm text-pink-50">
                  <thead className="bg-white/5 text-pink-200/80">
                    <tr>
                      <th className="p-3">Wallet</th>
                      <th className="p-3">Joined</th>
                      <th className="p-3">Trades</th>
                      <th className="p-3">Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {referrals.map((entry) => (
                      <tr key={entry.address} className="border-t border-pink-400/10">
                        <td className="p-3">{entry.address}</td>
                        <td className="p-3">{entry.joined}</td>
                        <td className="p-3">{entry.trades}</td>
                        <td className="p-3">{entry.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {activeView === 'Leaderboard' && (
            <section className="mt-6 glass rounded-3xl p-5 pink-glow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-pink-200/70">Leaderboard</p>
                  <h2 className="mt-2 text-2xl font-bold">Top contributors</h2>
                </div>
                <div className="flex gap-2 text-xs">
                  <button className="rounded-full bg-pink-500/20 px-3 py-2 text-pink-100">All Time</button>
                  <button className="rounded-full border border-pink-400/20 bg-white/5 px-3 py-2 text-pink-100">Top Traders</button>
                  <button className="rounded-full border border-pink-400/20 bg-white/5 px-3 py-2 text-pink-100">Top Referrers</button>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {leaderboard.map((entry) => (
                  <div key={entry.wallet} className="flex items-center justify-between rounded-2xl border border-pink-400/20 bg-[#1a0d17] p-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-pink-300 to-pink-500 font-bold text-slate-900">
                        {entry.rank === 1 ? <Crown size={16} /> : entry.rank}
                      </div>
                      <div>
                        <p className="font-semibold text-white">{entry.wallet}</p>
                        <p className="text-xs text-pink-200/70">{entry.trades} trades</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-pink-100/80">
                      <span>Trade: {entry.tradePoints}</span>
                      <span>Ref: {entry.referralPoints}</span>
                      <span className="rounded-full bg-pink-500/10 px-2 py-1 font-semibold text-pink-100">{entry.total}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {activeView === 'Activity' && (
            <section className="mt-6 glass rounded-3xl p-5 pink-glow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-pink-200/70">Activity</p>
                  <h2 className="mt-2 text-2xl font-bold">Recent transfers</h2>
                </div>
                <div className="flex gap-2 text-xs">
                  <button className="rounded-full bg-pink-500/20 px-3 py-2 text-pink-100">All</button>
                  <button className="rounded-full border border-pink-400/20 bg-white/5 px-3 py-2 text-pink-100">Completed</button>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {activity.map((entry) => (
                  <div key={entry.tx} className="flex flex-col gap-2 rounded-2xl border border-pink-400/20 bg-[#1b0d1a] p-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-sm text-pink-100/80">
                        <span>{entry.source}</span>
                        <ArrowRightLeft size={14} className="text-pink-300" />
                        <span>{entry.target}</span>
                      </div>
                      <p className="mt-1 text-xs text-pink-200/70">{entry.token} • {entry.amount} • {entry.tx}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`rounded-full px-2 py-1 text-xs ${entry.status === 'Completed' ? 'bg-emerald-500/15 text-emerald-300' : 'bg-yellow-500/15 text-yellow-200'}`}>
                        {entry.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <footer className="mt-8 flex flex-col gap-3 rounded-2xl border border-pink-400/20 bg-white/5 p-4 text-sm text-pink-100/80 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2">
              <BellDot size={16} className="text-pink-300" />
              <span>Global analytics updated every 30s</span>
            </div>
            <div className="flex items-center gap-2 text-pink-200">
              <Database size={15} />
              <span>Live metrics secured by ArcBridge protocol</span>
            </div>
          </footer>
        </div>
      </main>
    </Providers>
  );
}
