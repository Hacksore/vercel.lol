import { NextResponse } from "next/server";

export async function GET() {
  const githubData = await fetch(
    "https://api.github.com/repos/hacksore/vercel.lol",
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      next: { revalidate: 3600 },
    },
  )
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
    });

  return NextResponse.json({
    stars: githubData.stargazers_count,
    lastUpdate: githubData.updated_at,
  });
}
