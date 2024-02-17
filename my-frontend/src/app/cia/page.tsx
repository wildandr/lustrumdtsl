import Image from "next/image";
import Hero from "../../component/module/cia/Hero";
import Tema from "../../component/module/cia/Tema";
import Utama from "../../component/module/cia/Utama";
import Sponsorship from "../../component/module/cia/Sponsorship";
import Mediapatner from "../../component/module/cia/Mediapatner";
import Event from "../../component/module/cia/Event";
import Galeri from "../../component/module/cia/Galeri";

export default function Home() {

    const backgroundImage = {
        backgroundImage: `url(/assets/cia/bg_texture_cia.png)`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
    };

    return (
      <div
       className=" bg-chiasGreen-500"
       style={backgroundImage}>
          <Hero/>
          <Tema/>
          <Event/>
          <Utama/>
          <Galeri/>
          <Sponsorship/>
          <Mediapatner/>
      </div>
    )
  }
