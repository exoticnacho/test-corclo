// app/page.tsx
import About from "@/components/Index/About";
import Features from "@/components/Index/Features";
import Footer from "@/components/Index/Footer";
import Header from "@/components/Index/Header";
import Hero from "@/components/Index/Hero";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <main>
        <div className="relative">
          <Header />
          <Hero />
        </div>
        <About />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
