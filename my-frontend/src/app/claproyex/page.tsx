import Hero from "@/component/module/claproyex/Hero";
import Tema from "@/component/module/claproyex/Tema";
import ComingSoon from "@/component/module/claproyex/ComingSoon";
import FooterClap from "@/component/layout/FooterClap";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Claproyex",
  description: "",
};

export default function Home() {
  const backgroundImage = {
    backgroundImage: `url(/assets/claproyex/bg_pattren.png)`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "repeat",
  };

  return (
    <div className="bg-[#D0DEC0]" style={backgroundImage}>
      <Hero />
      <Tema />
      <ComingSoon />
      <FooterClap />
    </div>
  );
}
