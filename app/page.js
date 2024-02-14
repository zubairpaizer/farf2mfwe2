import Image from "next/image";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="main">
      <Header />
      <Footer />
    </main>
  );
}
