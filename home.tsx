import Link from "next/link";
import Image from "next/image";
import {
  FileTextIcon,
  CodeIcon,
  PlayIcon,
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
  DiscordIcon,
  GlobeIcon,
} from "@/components/font-awesome-icons";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-black transition-colors">
      {/* Header */}
      <header className="bg-white dark:bg-zinc-900 border-b border-gray-100 dark:border-zinc-800 py-3 md:py-4 transition-colors">
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
            <span className="font-semibold text-gray-900 dark:text-gray-100">
              TrustBridge
            </span>
          </Link>

          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="https://github.com/trustbridgecr/dApp-TrustBridge"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
              >
                <GithubIcon className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://x.com/TrustBridgecr"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
              >
                <TwitterIcon className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/trustbridgecr"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
              >
                <LinkedinIcon className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://discord.gg/DsUSE3aMDZ"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
              >
                <DiscordIcon className="w-5 h-5" />
                <span className="sr-only">Discord</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center py-6 md:py-12 px-4">
        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-md w-full max-w-[90%] sm:max-w-md p-4 sm:p-6 md:p-8 transition-colors">
          <div className="flex flex-col items-center">
            <div className="w-full max-w-[400px] mt-6 mb-6">
              <Image
                src="/images/banner.png"
                alt="TrustBridge Logo"
                width={800}
                height={200}
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="w-full space-y-2">
              <Link
                href="https://trustbridge.vercel.app/"
                className="flex items-center gap-3 p-3 sm:p-4 border border-gray-200 dark:border-zinc-800 rounded-md hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
              >
                <GlobeIcon className="text-gray-700 dark:text-gray-300 w-4 sm:w-5 h-4 sm:h-5" />
                <span className="font-medium text-gray-900 dark:text-gray-100 text-sm sm:text-base">
                  Website
                </span>
              </Link>
              <Link
                href="https://trustbridge.gitbook.io/trustbridge"
                className="flex items-center gap-3 p-3 sm:p-4 border border-gray-200 dark:border-zinc-800 rounded-md hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
              >
                <FileTextIcon className="text-gray-700 dark:text-gray-300 w-4 sm:w-5 h-4 sm:h-5" />
                <span className="font-medium text-gray-900 dark:text-gray-100 text-sm sm:text-base">
                  Documentation
                </span>
              </Link>
              <Link
                href="https://testnet.trustbridge.dev"
                className="flex items-center gap-3 p-3 sm:p-4 border border-gray-200 dark:border-zinc-800 rounded-md hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
              >
                <CodeIcon className="text-gray-700 dark:text-gray-300 w-4 sm:w-5 h-4 sm:h-5" />
                <span className="font-medium text-gray-900 dark:text-gray-100 text-sm sm:text-base">
                  dApp
                </span>
              </Link>

              <Link
                href="https://github.com/trustbridgecr/dApp-TrustBridge"
                className="flex items-center gap-3 p-3 sm:p-4 border border-gray-200 dark:border-zinc-800 rounded-md hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
              >
                <GithubIcon className="text-gray-700 dark:text-gray-300 w-4 sm:w-5 h-4 sm:h-5" />
                <span className="font-medium text-gray-900 dark:text-gray-100 text-sm sm:text-base">
                  GitHub
                </span>
              </Link>
              <Link
                href="https://x.com/TrustBridgecr"
                className="flex items-center gap-3 p-3 sm:p-4 border border-gray-200 dark:border-zinc-800 rounded-md hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
              >
                <TwitterIcon className="text-gray-700 dark:text-gray-300 w-4 sm:w-5 h-4 sm:h-5" />
                <span className="font-medium text-gray-900 dark:text-gray-100 text-sm sm:text-base">
                  Twitter
                </span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/trustbridgecr"
                className="flex items-center gap-3 p-3 sm:p-4 border border-gray-200 dark:border-zinc-800 rounded-md hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
              >
                <LinkedinIcon className="text-gray-700 dark:text-gray-300 w-4 sm:w-5 h-4 sm:h-5" />
                <span className="font-medium text-gray-900 dark:text-gray-100 text-sm sm:text-base">
                  LinkedIn
                </span>
              </Link>
              <Link
                href="https://discord.gg/DsUSE3aMDZ"
                className="flex items-center gap-3 p-3 sm:p-4 border border-gray-200 dark:border-zinc-800 rounded-md hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
              >
                <DiscordIcon className="text-gray-700 dark:text-gray-300 w-4 sm:w-5 h-4 sm:h-5" />
                <span className="font-medium text-gray-900 dark:text-gray-100 text-sm sm:text-base">
                  Discord
                </span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-zinc-900 py-8 md:py-12 border-t border-gray-100 dark:border-zinc-800 transition-colors">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="md:col-span-1">
              <Link
                href="https://trustbridge.vercel.app/"
                className="flex items-center gap-2 mb-3 md:mb-4"
              >
                <div className="w-5 h-5 md:w-6 md:h-6">
                  <Image
                    src="/images/trustbridge-logo.png"
                    alt="TrustBridge Logo"
                    width={24}
                    height={24}
                    className="w-full h-full"
                  />
                </div>
                <span className="font-semibold text-gray-900 dark:text-gray-100">
                  TrustBridge
                </span>
              </Link>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                A bridge of trust to finance your dreams
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 md:mb-4 text-sm md:text-base">
                Resources
              </h3>
              <ul className="space-y-1 md:space-y-2">
                <li>
                  <Link
                    href="https://trustbridge.vercel.app/"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 text-xs sm:text-sm flex items-center gap-2"
                  >
                    <GlobeIcon className="w-3 sm:w-4 h-3 sm:h-4" />
                    Website
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 text-xs sm:text-sm"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 text-xs sm:text-sm"
                  >
                    Start Building
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 md:mb-4 text-sm md:text-base">
                Company
              </h3>
              <ul className="space-y-1 md:space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 text-xs sm:text-sm"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 text-xs sm:text-sm"
                  >
                    Invest
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 md:mb-4 text-sm md:text-base">
                Connect
              </h3>
              <div className="grid grid-cols-2 sm:flex sm:flex-col gap-1 md:gap-2">
                <Link
                  href="https://discord.gg/DsUSE3aMDZ"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 text-xs sm:text-sm flex items-center gap-2"
                >
                  <DiscordIcon className="w-3 sm:w-4 h-3 sm:h-4" />
                  Discord
                </Link>
                <Link
                  href="https://github.com/byteworkscr/dApp-TrustBridge"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 text-xs sm:text-sm flex items-center gap-2"
                >
                  <GithubIcon className="w-3 sm:w-4 h-3 sm:h-4" />
                  GitHub
                </Link>
                <Link
                  href="https://x.com/TrustBridgecr"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 text-xs sm:text-sm flex items-center gap-2"
                >
                  <TwitterIcon className="w-3 sm:w-4 h-3 sm:h-4" />
                  Twitter
                </Link>
                <Link
                  href="https://www.linkedin.com/company/trustbridgecr"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 text-xs sm:text-sm flex items-center gap-2"
                >
                  <LinkedinIcon className="w-3 sm:w-4 h-3 sm:h-4" />
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
