import Image from "next/image";
import Hero from "../../component/module/cia/Hero";
import Tema from "../../component/module/cia/Tema";
import Utama from "../../component/module/cia/Utama";
import Sponsorship from "../../component/module/cia/Sponsorship";
import Mediapatner from "../../component/module/cia/Mediapatner";
import Event from "../../component/module/cia/Event";
import Galeri from "../../component/module/cia/Galeri";
import Footer2 from "../../component/layout/Footer2";
import Contact from "@/component/module/cia/Contact";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Civil In Action x CRAFT",
  description: "",
};

export default function Home() {
  const backgroundImage = {
    backgroundImage: `url(/assets/cia/bg_texture_cia.png)`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "repeat",
  };

  const innerShadowStyle = {
    boxShadow: "inset 0 10px 0px rgba(0, 0, 0, 0.5);",
  };

  return (
    <div
      className=" bg-chiasGreen-500 shadow"
      style={{ ...backgroundImage, ...innerShadowStyle }}
    >
      <Hero />
      <Tema />
      <Event />
      <Utama />
      <Galeri />
      <Contact />
      <Sponsorship />
      <Mediapatner />
      <Footer2 />
    </div>
  );
}
