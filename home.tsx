import Link from "next/link"
import Image from "next/image"
import {
  FileTextIcon,
  CodeIcon,
  PlayIcon,
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
  DiscordIcon,
} from "@/components/font-awesome-icons"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-black transition-colors">
      {/* Header */}
      <header className="bg-white dark:bg-zinc-900 border-b border-gray-100 dark:border-zinc-800 py-4 transition-colors">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-6 h-6">
              <Image
                src="/images/trustbridge-logo.png"
                alt="TrustBridge Logo"
                width={24}
                height={24}
                className="w-full h-full"
              />
            </div>
            <span className="font-semibold text-gray-900 dark:text-gray-100">TrustBridge</span>
          </Link>

          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center py-12">
        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-md max-w-md w-full p-8 transition-colors">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 mb-4">
              <Image
                src="/images/trustbridge-logo.png"
                alt="TrustBridge Logo"
                width={64}
                height={64}
                className="w-full h-full"
              />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">TrustBridge</h1>

            <div className="w-full space-y-2">
              <Link
                href="#"
                className="flex items-center gap-3 p-4 border border-gray-200 dark:border-zinc-800 rounded-md hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
              >
                <FileTextIcon className="text-gray-700 dark:text-gray-300 w-5 h-5" />
                <span className="font-medium text-gray-900 dark:text-gray-100">Documentation</span>
              </Link>
              <Link
                href="https://trustbridge.vercel.app/"
                className="flex items-center gap-3 p-4 border border-gray-200 dark:border-zinc-800 rounded-md hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
              >
                <CodeIcon className="text-gray-700 dark:text-gray-300 w-5 h-5" />
                <span className="font-medium text-gray-900 dark:text-gray-100">DAPP</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 p-4 border border-gray-200 dark:border-zinc-800 rounded-md hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
              >
                <PlayIcon className="text-gray-700 dark:text-gray-300 w-5 h-5" />
                <span className="font-medium text-gray-900 dark:text-gray-100">Watch Demo</span>
              </Link>
              <Link
                href="https://github.com/byteworkscr/dApp-TrustBridge"
                className="flex items-center gap-3 p-4 border border-gray-200 dark:border-zinc-800 rounded-md hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
              >
                <GithubIcon className="text-gray-700 dark:text-gray-300 w-5 h-5" />
                <span className="font-medium text-gray-900 dark:text-gray-100">GitHub</span>
              </Link>
              <Link
                href="https://x.com/TrustBridgecr"
                className="flex items-center gap-3 p-4 border border-gray-200 dark:border-zinc-800 rounded-md hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
              >
                <TwitterIcon className="text-gray-700 dark:text-gray-300 w-5 h-5" />
                <span className="font-medium text-gray-900 dark:text-gray-100">Twitter</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/trustbridgecr"
                className="flex items-center gap-3 p-4 border border-gray-200 dark:border-zinc-800 rounded-md hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
              >
                <LinkedinIcon className="text-gray-700 dark:text-gray-300 w-5 h-5" />
                <span className="font-medium text-gray-900 dark:text-gray-100">LinkedIn</span>
              </Link>
              <Link
                href="https://discord.gg/DsUSE3aMDZ"
                className="flex items-center gap-3 p-4 border border-gray-200 dark:border-zinc-800 rounded-md hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
              >
                <DiscordIcon className="text-gray-700 dark:text-gray-300 w-5 h-5" />
                <span className="font-medium text-gray-900 dark:text-gray-100">Discord</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-zinc-900 py-12 border-t border-gray-100 dark:border-zinc-800 transition-colors">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <Link href="https://trustbridge.vercel.app/" className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6">
                  <Image
                    src="/images/trustbridge-logo.png"
                    alt="TrustBridge Logo"
                    width={24}
                    height={24}
                    className="w-full h-full"
                  />
                </div>
                <span className="font-semibold text-gray-900 dark:text-gray-100">TrustBridge</span>
              </Link>
              <p className="text-gray-600 dark:text-gray-400 text-sm">A bridge of trust to finance your dreams</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 text-sm"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 text-sm"
                  >
                    Start Building
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 text-sm"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 text-sm"
                  >
                    Invest
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Connect</h3>
              <div className="flex flex-col gap-2">
                <Link
                  href="https://discord.gg/DsUSE3aMDZ"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 text-sm flex items-center gap-2"
                >
                  <DiscordIcon className="w-4 h-4" />
                  Discord
                </Link>
                <Link
                  href="https://github.com/byteworkscr/dApp-TrustBridge"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 text-sm flex items-center gap-2"
                >
                  <GithubIcon className="w-4 h-4" />
                  GitHub
                </Link>
                <Link
                  href="https://x.com/TrustBridgecr"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 text-sm flex items-center gap-2"
                >
                  <TwitterIcon className="w-4 h-4" />
                  Twitter
                </Link>
                <Link
                  href="https://www.linkedin.com/company/trustbridgecr"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 text-sm flex items-center gap-2"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

