import { Canvas } from "../components/canvas";

export default function Home() {
  return (
    <div>
      <h1 className="fixed bg-clip-text text-transparent leading-5 bg-white bg-opacity-90 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-4xl md:text-8xl text-center">
        <span>▲</span>
        <br />
        <span>The</span>
        <br />
        <span>Triangle</span>
        <br />
        <span className="tracking-widest">Company</span>
        <div
          id="subtitle"
          className="rounded-full font-normal max-w-max mx-auto mt-8 text-xl p-[1.5px]"
        >
          <div className="px-3 py-1 rounded-full bg-black bg-opacity-50 duration-300 text-white">
            We sell triangles.
          </div>
        </div>
      </h1>
      <Canvas />
      <span className="fixed left-8 bottom-8 text-neutral-600 text-sm duration-300 hover:text-white">
        <a target="_blank" href="https://github.com/Hacksore/vercel.lol">
          Sauce
        </a>
      </span>
      <span className="fixed bottom-8 left-1/2 -translate-x-1/2 text-neutral-600 text-sm">
        © 2069 ▼ercel.lol
      </span>
    </div>
  );
}
