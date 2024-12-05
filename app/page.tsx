import Link from 'next/link'
import { Nav } from '@/components/nav'

const projects = [
  { name: "Based Agent", twitter: "MurrLincoln", description: "Create AI agents with full onchain functionality" },
  { name: "AI Wallets", twitter: "coinbasedev", description: "Give AI agents crypto wallets so they can transfer value" },
  { name: "Virtuals", twitter: "virtuals_io", description: "Create and co-own onchain AI agents through tokenization" },
  { name: "Luna Virtuals", twitter: "luna_virtuals", description: "An autonomous AI agent that can buy, sell, and reward others" },
  { name: "CreatorBid", twitter: "CreatorBid", description: "A launchpad for creating and tokenizing onchain AI agents" },
  { name: "Autonolas", twitter: "autonolas", description: "A platform that enables collective ownership of onchain AI agents" },
  { name: "Agent WIP", twitter: "agent_wip", description: "An artist AI agent purpose-built to operate, create, and earn" },
  { name: "Tybasegod", twitter: "tybasegod", description: "A disciple AI agent that integrates lore into its conversations and art" },
  { name: "Higher Onchain", twitter: "higheronchain", description: "Aether is a generative AI agent that autonomously creates onchain" },
  { name: "Tee Hee He", twitter: "tee_hee_he", description: "An autonomous AI agent that controls its X account and wallet" },
  { name: "Onchain Gaias", twitter: "onchaingaias", description: "An OGI Network that creates, trains, and deploys AI agents in NFTs" },
  { name: "Henlokart", twitter: "henlokart", description: "A racing minigame on Telegram that AI agents participate in via transactions" },
  { name: "Parallel Colony", twitter: "ParallelColony", description: "A game where players partner with autonomous AI agents with wallets" },
  { name: "AI Wayfinder", twitter: "AIWayfinder", description: "AI tool to navigate blockchain pathways for optimal user experiences" },
  { name: "Gaianet AI", twitter: "Gaianet_AI", description: "AI tool that incentivizes the creation of sovereign AI knowledge systems" },
  { name: "Brian Knows AI", twitter: "BrianknowsAI", description: "Execute transactions and retrieve data using natural language prompts" },
  { name: "Payman AI", twitter: "PaymanAI", description: "APIs that enable AI agents to manage payments with businesses and users" },
  { name: "Skyfire", twitter: "trySkyfire", description: "Payments, monetization, and identity solutions for AI agents" },
  { name: "Questflow", twitter: "questflow", description: "An orchestration layer for AI agents to dispatch real-world incentives onchain" },
  { name: "Nani", twitter: "nani_ooo", description: "An operating system built for onchain AI agent and crypto automation" },
  { name: "Magneta", twitter: "magnetaixyz", description: "Chat-based blockchain interactions and AI intent-based execution" },
  { name: "Auki Network", twitter: "AukiNetwork", description: "A DePIN that gives AI perception and an understanding of physical spaces" },
  { name: "Binary Lounge", twitter: "binary_lounge", description: "An Onchain Engagement Protocol for AI and crypto-powered creator enablement" },
  { name: "Pond GNN", twitter: "PondGNN", description: "A graph-based AI model for crypto that predicts future behavior using onchain data" },
  { name: "Navigate AI", twitter: "navigate_ai", description: "Ethically sourced data sets for AI LLMs, allowing users to earn from their data" },
  { name: "Masafi", twitter: "getmasafi", description: "A decentralized network for Fair AI where data contributors are rewarded" },
  { name: "Flock", twitter: "flock_io", description: "AI training with composable contributions of computation, algorithms, and data" },
  { name: "Atoma Network", twitter: "Atoma_Network", description: "Decentralized, scalable, and permissionless AI computing resources" },
  { name: "Giza", twitter: "gizatechxyz", description: "Reliable, scalable, and actionable AI solutions for decentralized applications" },
  { name: "Rainnmaker", twitter: "rainnmaker", description: "An ecosystem where verified human contributions to AI can earn rewards" },
  { name: "Allora Network", twitter: "AlloraNetwork", description: "Self-improving decentralized intelligence built by the community" },
  { name: "Theoriq AI", twitter: "TheoriqAI", description: "A multi-agent system enabling users to build, deploy, and earn from AI agents" },
  { name: "Covalent", twitter: "Covalent_HQ", description: "Modular data infrastructure solving the verifiability problem in AI" },
  { name: "SubQuery Network", twitter: "SubQueryNetwork", description: "Production infrastructure for next-generation AI applications" },
  { name: "Empyreal SDK", twitter: "EmpyrealSDK", description: "Enhance DeFi protocols with AI agents and real-time data streaming" },
  { name: "Aperture Finance", twitter: "ApertureFinance", description: "Liquidity management solutions with AI intents for improved DeFi UX" },
  { name: "Spectral Labs", twitter: "Spectral_Labs", description: "Platform to create AI agents with wallets and data feeds for trading" },
  { name: "Velvet Capital", twitter: "Velvet_Capital", description: "DeFi social trading and portfolio management powered by AI intents" },
  { name: "Zotto AI", twitter: "zottoAI", description: "Automate positions, trades, voting, and reward claims through AI agents" },
  { name: "Funl AI", twitter: "Funl_ai", description: "A platform to develop onchain trading AI agents using automated strategies" },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="flex min-h-[calc(100vh-3.5rem)] flex-col">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full">
            <div className="relative">
              <div className="flex flex-col items-center justify-center space-y-4 text-center py-12 md:py-16 lg:py-20">
                <div className="space-y-2">
                  <h1 className="text-3xl tracking-tighter sm:text-5xl md:text-6xl">
                    AI on Base
                  </h1>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    Discover the future of AI and crypto on Base.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-8">
              {projects.map((project) => (
                <Link
                  key={project.name}
                  href={`https://x.com/${project.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
                >
                  <div className="flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-bold tracking-tight group-hover:underline">
                        {project.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

