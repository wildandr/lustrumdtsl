import ComingSoon from "@/component/module/ceremony/ComingSoon";
import Hero from "@/component/module/ceremony/Hero";
import LineUp from "@/component/module/ceremony/LineUp";
import FooterCeremony from "@/component/module/ceremony/FooterCeremony";
import BuyTicket from "@/component/module/ceremony/BuyTicket";
import Bata from "@/component/module/ceremony/Bata";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ceremony",
  description: "",
};

export default function Ceremony() {
  return (
    <div>
      <Hero />
      <LineUp />
      <BuyTicket />
      <Bata />
      <FooterCeremony />
    </div>
  );
}
