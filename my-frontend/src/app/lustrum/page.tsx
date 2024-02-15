import Hero from "../../component/module/lustrum/Hero";
import Tema from "../../component/module/lustrum/Tema"
import Timeline from "../../component/module/lustrum/Timeline";
import Isi from "../../component/module/lustrum/Isi";
import Footer from "@/component/layout/Footer";


export default function Lustrum() {

  return (
    <div>
        <Hero/>
        <Tema/>
        <Timeline/>
        <Isi/>
        <Footer/>
    </div>
  )
}
