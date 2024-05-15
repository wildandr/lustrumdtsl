import Donasi from "@/component/module/srawung_desa/Donasi";
import FooterSrawung from "@/component/module/srawung_desa/FooterSrawung";
import Hero from "@/component/module/srawung_desa/Hero";
import LatarBelakang from "@/component/module/srawung_desa/LatarBelakang";
import Rangkaian from "@/component/module/srawung_desa/Rangkaian";
import SedikitCerita from "@/component/module/srawung_desa/SedikitCerita";
import Tema from "@/component/module/srawung_desa/Tema";

export default function SrawungDesa() {
  return (
    <div>
      <Hero />
      <LatarBelakang />
      <SedikitCerita />
      <Tema />
      <Rangkaian />
      <Donasi />
      <FooterSrawung />
    </div>
  );
}
