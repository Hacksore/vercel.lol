import { Canvas } from "../components/canvas";

export default function Home() {
  return (
    <div>
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
