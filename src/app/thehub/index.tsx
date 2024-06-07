import { ChevronRight, Loader, Star } from "lucide-react";

export const revalidate = 3600;

export default async function TheHub() {
  let starCount: number | undefined;
  let formatter = Intl.NumberFormat("en", { notation: "compact" });
  await fetch("https://api.github.com/repos/hacksore/vercel.lol")
    .then((response) => response.json())
    .then((data) => {
      starCount = data.stargazers_count;
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  return (
    <a
      target="_blank"
      rel="noreferrer noopener"
      href="https://github.com/hacksore/vercel.lol"
      className="group fixed gap-2 w-fit items-center flex top-24 left-1/2 -translate-x-1/2 group border hover:no-underline dark:border-white/10 border-black/10 backdrop-saturate-200 backdrop-blur-xl bg-white/30 dark:bg-black/30 rounded-full p-2 pr-3 pl-2 mx-auto dark:text-white duration-300 dark:hover:border-neutral-500/30 hover:border-black/20 overflow-hidden text-xs sm:text-sm xl:text-base"
    >
      <div
        id="star-bg"
        className="absolute -z-10 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 scale-500 group-hover:scale-100 opacity-0 group-hover:opacity-50 dark:group-hover:opacity-100 duration-300 ease-out h-24 w-24 rounded-full bg-white blur-3xl"
      ></div>
      <div
        id="star-count"
        className={`flex gap-1 items-center ${
          starCount ? "px-2" : "px-1.5"
        } py-0.5 mr-0.5 duration-300 bg-black text-black rounded-full font-bold`}
      >
        {starCount ? (
          <>
            <Star className="lucide-star w-3 h-3 fill-current" />
            {formatter.format(starCount)}
          </>
        ) : (
          <Loader className="lucide-loader h-4 w-4 animate-spin my-1" />
        )}
      </div>
      <span className="duration-300 whitespace-nowrap grayscale group-hover:grayscale-0 text-black dark:text-white">
        Star us on the hub
      </span>
      <ChevronRight className="lucide-chevron-right w-4 h-4 duration-300 group-hover:translate-x-0.5" />
    </a>
  );
}
