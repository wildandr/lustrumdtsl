import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function BuyTicket() {
  const backgroundImage = {
    backgroundImage: `url(/assets/ceremony/bg_early_bird_2.png)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  const backgroundImageMobile = {
    backgroundImage: `url(/assets/ceremony/bg_early_bird_mobile.png)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left",
  };

  return (
    <div className="relative">
      <div
        style={backgroundImage}
        className="flex-col min-h-screen items-end hidden lg:flex px-[10%] pt-[10%]"
      >
        <Image
          src="/assets/ceremony/tanggal.svg"
          width={1920}
          height={1080}
          alt="button"
          className="w-[40%] h-auto shadow-2xl mb-[2%]"
        />
        <Link
          className="w-[40%] h-auto shadow-2xl hover:scale-110 focus:scale-105"
          href="https://www.instagram.com/renjanafest/"
        >
          <Image
            src="/assets/ceremony/btn_buy_mobile.svg"
            width={1920}
            height={1080}
            alt="button"
            className="w-full h-auto"
          />
        </Link>
      </div>
      <div
        style={backgroundImageMobile}
        className="flex flex-col min-h-screen justify-around items-center lg:hidden py-[20%]"
      >
        <Link
          className="w-[70%] h-auto shadow-2xl hover:scale-110 focus:scale-105"
          href="https://www.instagram.com/renjanafest/"
        >
          <Image
            src="/assets/ceremony/btn_buy_mobile.svg"
            width={1920}
            height={1080}
            alt="button"
            className="w-full h-auto"
          />
        </Link>

        <Link
          className="w-[70%] h-auto shadow-2xl hover:scale-110 focus:scale-105"
          href="https://www.instagram.com/renjanafest/"
        >
          <Image
            src="/assets/ceremony/btn_buy_mobile.svg"
            width={1920}
            height={1080}
            alt="button"
            className="w-full h-auto"
          />
        </Link>
      </div>
      <div className="w-full bg-[#FFC737] py-2 absolute bottom-[0] z-10">
        <Marquee gradient={false} speed={40} autoFill={true}>
          <p className="font-mudstone text-white text-3xl lg:text-[2.5rem] overflow-hidden">
            ENJANA - R
          </p>
        </Marquee>
      </div>
      <Image
        src="/assets/ceremony/maskot_duduk.png"
        alt="maskot"
        width={1920}
        height={1080}
        className="absolute w-[80%] md:w-[40%] h-auto bottom-[-10%] md:bottom-[-8%] lg:bottom-[-25%] right-0 z-10"
      />
    </div>
  );
}
