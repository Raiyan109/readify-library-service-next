import Head from "next/head";
import { Hero } from "./components/Hero";


export default function Home() {
  return (
    <main className="">
      <Head>
        <link rel="icon" href="/public/images/favicon.ico" sizes="any" />
      </Head>
      <Hero />
    </main>
  );
}
