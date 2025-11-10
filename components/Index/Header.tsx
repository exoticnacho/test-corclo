import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header className="absolute top-6 left-0 right-0 z-50">
      <div
        className="container mx-auto flex max-w-4xl items-center justify-between
                   rounded-full px-4 py-3 sm:px-6 
                   
                   border border-black/10 dark:border-white/10 
                   bg-white/30 dark:bg-black/30 
                   
                   backdrop-blur-md 
                   shadow-lg"
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold 
                     text-gray-900 dark:text-white
                    "
        >
          Corclo
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">
          <nav className="hidden items-center gap-6 md:flex">
            <Link
              href="/"
              className="text-sm font-medium text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/docs"
              className="text-sm font-medium text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
            >
              About
            </Link>
            <Link
              href="/docs"
              className="text-sm font-medium text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
            >
              Features
            </Link>
            <Link
              href="/docs"
              className="text-sm font-medium text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
            >
              Community
            </Link>
          </nav>

          <ThemeToggle />

          <div className="hidden h-6 w-px bg-gray-500/30 md:block dark:bg-gray-400/30" />

          <div className="hidden items-center gap-4 md:flex">
            <Link
              href="/sign-in"
              className="text-sm font-medium text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
            >
              Sign In
            </Link>
            <Link
              href="/sign-up"
              className="rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
