import { MoveRight } from "lucide-react";

import Aurora from "@/components/ui/AuroraBackground";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0 dark bg-[--background]">
        <Aurora />
      </div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
          Welcome to <span className="text-primary">Corclo</span>
        </h1>
        <p className="mt-4 text-xl text-gray-300 md:text-2xl">
          The new way to connect, share, and discover.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
          <button
            className="flex items-center gap-2 rounded-full 
                       bg-primary px-8 py-3 text-lg 
                       font-semibold text-primary-foreground 
                       shadow-lg transition-transform hover:scale-105 hover:bg-primary/90"
          >
            Get Started
            <MoveRight className="h-5 w-5" />
          </button>
          <button
            className="flex items-center gap-2 rounded-full 
                       border-2 border-white px-8 py-3 
                       text-lg font-semibold text-white 
                       transition-colors hover:bg-white hover:text-primary"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
