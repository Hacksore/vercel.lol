import { Canvas } from "../components/canvas";

export default function Home() {
  return (
    <div>
      <h1 className="fixed opacity-90 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-6xl md:text-8xl text-center">
        <div id="t1" className="duration-300 pb-3 ">
          ▲
        </div>
        <div id="t2" className="duration-300">
          The
        </div>
        <div id="t3" className="duration-300 tracking-tight">
          Triangle
        </div>
        {/* T4 Stack */}
        <div id="t4" className="duration-300 tracking-widest">
          Company
        </div>
        <div
          id="subtitle"
          className="rounded-full bg-opacity-80 font-normal max-w-max mx-auto mt-8 text-sm md:text-xl p-[1px] md:p-[1.5px]"
        >
          <div className="px-3 py-1 rounded-full bg-black bg-opacity-60 duration-300 text-white">
            We sell triangles.
          </div>
        </div>
      </h1>
      <Canvas />
      <span className="fixed left-1/2 -translate-x-1/2 bottom-16 text-neutral-600 text-sm duration-300 hover:text-white">
        <a target="_blank" href="https://github.com/Hacksore/vercel.lol">
          Sauce
        </a>
      </span>
      <span className="fixed bottom-8 left-1/2 -translate-x-1/2 text-neutral-600 text-sm">
        © 2069 <span className="-mr-[3px]">▼</span>ercel.lol
      </span>
    </div>
  );
}
