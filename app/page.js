import Head from "next/head";
import { Hero } from "./components/Hero";
import { Hero2 } from "./components/Hero2";


export default function Home() {
  return (
    <main className="">
      <Head>
        <link rel="icon" href="/public/images/favicon.ico" sizes="any" />
      </Head>
      {/* <Hero /> */}
      <Hero2 />
    </main>
  );
}
