import ComingSoon from "@/component/module/ceremony/ComingSoon";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ceremony",
  description: "",
};

export default function Ceremony() {
  return (
    <div>
      <ComingSoon />
    </div>
  );
}
