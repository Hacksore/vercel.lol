import { Canvas } from "../components/canvas";
import { VercelToolbar } from "@vercel/toolbar/next";
import { Suspense } from "react";
import { FlagValues } from "@vercel/flags/react";
import TheHub from "./thehub";

export default function Home() {
  return (
    <div>
      <TheHub />
      <h1 className="fixed opacity-90 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-6xl md:text-8xl text-center">
        <div id="t1wrap" className="relative pb-3">
          <span
            id="t1"
            className="duration-300 opacity-0 bg-clip-text text-transparent bg-gradient-to-r from-[#00FFFF] to-[#0088FF]"
          >
            <a href="https://vercel.com">▲</a>
          </span>
        </div>
        <div id="t2wrap" className="relative">
          <span
            id="t2"
            className="duration-300 opacity-0 bg-clip-text text-transparent bg-gradient-to-r from-[#4444FF] to-[#0088FF]"
          >
            The
          </span>
        </div>
        <div id="t3wrap" className="relative tracking-tighter">
          <span
            id="t3"
            className="duration-300 opacity-0 bg-clip-text text-transparent bg-gradient-to-r from-[#4444FF] to-[#FF00FF]"
          >
            Triangle
          </span>
        </div>
        {/* T4 Stack */}
        <div id="t4wrap" className="relative tracking-wide">
          <span
            id="t4"
            className="duration-300 opacity-0 bg-clip-text text-transparent bg-gradient-to-r from-[#FFCC00] to-[#FF2222]"
          >
            Company
          </span>
        </div>
        <div
          id="subtitle"
          className="rounded-full bg-white bg-opacity-80 font-normal max-w-max mx-auto mt-8 text-sm md:text-xl p-[1px] md:p-[1.5px]"
        >
          <div className="px-3 py-1 rounded-full bg-black bg-opacity-60 duration-300 text-white">
            We sell triangles.
          </div>
        </div>
      </h1>
      <Canvas />
      <div className="group">
        <span className="fixed left-1/2 -translate-x-1/2 bottom-16 text-neutral-600 flex items-center gap-2">
          <a
            target="_blank"
            className="text-neutral-600 text-sm duration-300 hover:text-white hover:underline"
            href="https://github.com/Hacksore/vercel.lol"
          >
            Sauce
          </a>
          <div className="text-xs">|</div>
          <a
            target="_blank"
            className="text-neutral-600 text-sm duration-300 hover:text-white hover:underline"
            href="https://github.com/sponsors/PickleNik"
          >
            Buy a Triangle
          </a>
        </span>
        <span className="fixed whitespace-nowrap bottom-24 left-1/2 -translate-x-1/2 text-neutral-600 text-sm flex items-center gap-1">
          Made with
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-3.5 w-3.5 group-hover:text-red-500 group-hover:scale-110 ease-[cubic-bezier(0.175,0.885,0.32,2.275)] duration-300 fill-current lucide lucide-heart"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
          by
          <a
            target="_blank"
            className="text-neutral-600 text-sm duration-300 hover:text-white hover:underline"
            href="https://x.com/PickleNik0864"
          >
            PickleNik
          </a>
          and
          <a
            target="_blank"
            className="text-neutral-600 text-sm duration-300 hover:text-white hover:underline"
            href="https://x.com/Hacksore"
          >
            Hacksore
          </a>
        </span>
      </div>

      <span className="fixed bottom-8 left-1/2 -translate-x-1/2 text-neutral-600 text-sm">
        © 2069 <span className="-mr-[3px]">▼</span>ercel.lol
      </span>
      <Suspense>
        <VercelToolbar />
      </Suspense>

      <div>
        {/* Some other content */}
        <FlagValues values={{ exampleFlag: true }} />
      </div>
    </div>
  );
}
