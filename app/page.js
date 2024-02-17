import Image from "next/image";
import { Navbar } from "./components/Navbar";
import { UpperNav } from "./components/UpperNav";
import { Hero } from "./components/Hero";


export default function Home() {
  return (
    <main className="">
      <UpperNav />
      <Navbar />
      <Hero />
    </main>
  );
}
