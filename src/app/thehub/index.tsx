import { ChevronRight, Star } from "lucide-react";
import { useEffect, useState } from "react";

export const revalidate = 3600;

export default function TheHub() {
  let formatter = Intl.NumberFormat("en", { notation: "compact" });

  const [starCount, setStarCount] = useState(0);

  useEffect(() => {
    fetch("/api/stars")
      .then((response) => response.json())
      .then((res) => {
        setStarCount(res.stars);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <a
      target="_blank"
      rel="noreferrer noopener"
      href="https://github.com/hacksore/vercel.lol"
      className="group fixed gap-2 w-fit items-center flex top-20 left-1/2 -translate-x-1/2 group border hover:no-underline border-white/10 backdrop-saturate-200 backdrop-blur-xl bg-black/30 rounded-full p-2 pr-3 pl-2 mx-auto text-white duration-300 hover:border-neutral-500/30 overflow-hidden text-xs sm:text-sm xl:text-base"
    >
      <div
        id="star-bg"
        className="absolute -z-10 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 scale-500 group-hover:scale-100 opacity-0  group-hover:opacity-100 duration-300 ease-out h-24 w-24 rounded-full bg-white blur-3xl"
      ></div>
      <div
        id="star-count"
        className={`flex gap-1 items-center ${starCount ? "px-2" : "px-1.5"
          } py-0.5 mr-0.5 duration-300 bg-black text-black rounded-full font-bold`}
      >
        <>
          <Star className="lucide-star w-3 h-3 fill-current" />
          {formatter.format(starCount)}
        </>
      </div>
      <span className="duration-300 whitespace-nowrap grayscale group-hover:grayscale-0 text-white">
        Star us on the hub
      </span>
      <ChevronRight className="lucide-chevron-right w-4 h-4 duration-300 group-hover:translate-x-0.5" />
    </a>
  );
}
