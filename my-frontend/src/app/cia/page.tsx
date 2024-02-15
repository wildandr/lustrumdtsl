import Image from "next/image";
import Hero from "../../component/module/cia/Hero";
import Tema from "../../component/module/cia/Tema";
import Utama from "../../component/module/cia/Utama";
import Sponsorship from "../../component/module/cia/Sponsorship";
import Mediapatner from "../../component/module/cia/Mediapatner";
import Footer2 from "../../component/layout/Footer2"


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
          <Utama/>
          <Sponsorship/>
          <Mediapatner/>
          <Footer2/>
      </div>
    )
  }
