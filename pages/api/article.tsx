import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

const SIZE = {
  WIDTH: 1200,
  HEIGHT: 630,
};

export const config = {
  runtime: "edge",
};

export default async function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  console.log({ searchParams });

  const title = searchParams.has("title")
    ? searchParams.get("title")?.slice(0, 100)
    : "Default Title";
  const createdAt = searchParams.has("createdAt")
    ? searchParams.get("createdAt")
    : "Default Title";

  const username = "peterkimzz";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          padding: "3rem 3rem",
          fontFamily: "Inter var -apple-system",
          flexDirection: "column",
          backgroundColor: "white",
        }}
      >
        <header tw="flex w-full items-center justify-between">
          <img
            src="https://www.peterkimzz.com/logo.svg"
            alt="Logo"
            tw="w-1/4"
          />

          <img
            tw="rounded-[2rem] w-[5rem] h-[5rem] shadow"
            src={`https://github.com/${username}.png`}
          />
        </header>

        <main tw=" w-full text-center">
          <div tw="flex flex-row">
            <h1
              tw="text-8xl tracking-tighter leading-[0.9] text-gray-900 text-center px-10 pt-10 pb-4"
              style={{ fontWeight: "bolder" }}
            >
              {title}
            </h1>

            {/* <img
            src="https://user-images.githubusercontent.com/20244536/132115718-4ab0874f-b30f-4a4c-8894-4655e3bc5b38.jpg"
            alt="Profile Image"
            tw="w-32 h-32"
          /> */}
          </div>
        </main>

        <footer tw="flex justify-center w-full">
          <time tw="text-gray-600 text-2xl font-semibold">{createdAt}</time>
        </footer>
      </div>
    ),
    {
      width: SIZE.WIDTH,
      height: SIZE.HEIGHT,
    }
  );
}
