import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative py-20  bg-[#0f0f0f] text-gray-200 w-full ">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute  left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px]" />
        <div className="absolute  right-1/4 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px]" />
      </div>

      <section className="flex items-center justify-center  px-6">
        <div className="max-w-6xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#181818]/80 border border-gray-800 mb-10 backdrop-blur">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-gray-400 tracking-wide">
              Your thoughts, beautifully shared
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold font-serif leading-tight mb-6 animate-fade-up text-gray-300" style={{ animationDelay: "0.1s" }}>
           Where stories find <br /> <span className="text-emerald-400 gradient-text">their readers</span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            ReadStack curates thoughtful pieces that stay with you long after the page ends.
            offering a reading experience designed for clarity, depth, and meaning.
          </p>


          {/* CTA */}
          <div className="mt-14 flex justify-center gap-6">
            <Link
              href="/all"
              className="group inline-flex items-center gap-3 px-7 py-3 rounded-xl bg-emerald-500 text-black font-medium transition-all hover:bg-emerald-400 hover:scale-[1.03]"
            >
              Get started
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/books"
              className="px-7 py-3 rounded-xl border border-gray-700 text-gray-300 transition hover:border-gray-500 hover:text-gray-100"
            >
              Explore blogs
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
