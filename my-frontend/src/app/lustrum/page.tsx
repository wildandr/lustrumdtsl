import Hero from "../../component/module/lustrum/Hero";
import Tema from "../../component/module/lustrum/Tema";
import Timeline from "../../component/module/lustrum/Timeline";
import Kegiatan from "../../component/module/lustrum/Kegiatan";
import Isi from "../../component/module/lustrum/Isi";
import Event from "../../component/module/lustrum/Event";
import Footer from "../../component/layout/Footer";
import Sponsorship from "../../component/module/lustrum/Sponsorship";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LUSTRUM KMTSL",
  description: "",
};

export default function Lustrum() {
  return (
    <div className="">
      <Hero />
      <Tema />
      <Kegiatan />
      <Isi />
      <Event />
      <Sponsorship />
      <Footer />
    </div>
  );
}
