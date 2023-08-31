import Head from "next/head";
import Link from "next/link";
import Footer from "~/components/vscode/Footer";
import MainContainer from "~/components/vscode/MainContainer";
import Navbar from "~/components/vscode/Navbar";
import { api } from "~/utils/api";

export default function Home() {
  return (
    <>
      <Head>
        <title>Léo Piras</title>
        <meta name="description" content="Bienvenue sur mon portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid min-h-screen  grid-rows-[38px_1fr_20px] phone:flex">
        <Navbar />
        <MainContainer />
        <Footer />
      </main>
    </>
  );
}
