import Image from "next/image";
import Landing from "./Landing.js";
import MobileMenu from "../components/MobileMenu.js";

export default function Home() {
  return (
    <main>
      <Landing></Landing>
      <MobileMenu></MobileMenu>
    </main>
  );
}
