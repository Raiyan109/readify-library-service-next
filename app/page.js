import Image from "next/image";
import { Navbar } from "./components/Navbar";
import { UpperNav } from "./components/UpperNav";

export default function Home() {
  return (
    <main className="">
      <UpperNav />
      <Navbar />
    </main>
  );
}
