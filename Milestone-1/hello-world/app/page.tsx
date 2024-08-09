"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black min-h-screen ">
      <h2 className="text-white text-3xl font-extrabold flex justify-center">
        Nextjs Milestone 01
      </h2>
      <br />
      <br />
      <br />
      <br />

      <h1 className="flex justify-center normal-case hover:uppercase text-5xl pt-10 text-rose-300 tracking-tight hover:tracking-wide transition-transform hover:scale-40 font-Apple Color Emoji">
        Hello
      </h1>

      <br />
      <br />

      <h1 className="flex justify-center text-6xl pt-2 bg-gradient-to-r from-blue-400 to-purple-400 animate-bounce transition-transform font-sans hover:font-serif">
        World<sub className="text-5xl text-rose-400">...</sub>!
      </h1>
      <div className="pt-40 space-y-4 space-x-4">
        <p className="text-white flex justify-center">
          To learn more about the folder structure click the button below
        </p>
        <Link
          href={
            "//github.com/NaimalArain13/Nextjs-React-Milestones/blob/main/README.md"
          }
          className="flex justify-center"
        >
          <button className="flex-col py-2 px-5  bg-violet-500  font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75">
            Learn More
          </button>
        </Link>
      </div>
      <p className="text-white flex justify-center gap-2">
        created by GIAIC senior student:{" "}
        <Link href={"//github.com/NaimalArain13/"}>
          <i> Naimal Salahuddin</i>
        </Link>
      </p>
    </div>
  );
}
