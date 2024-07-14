import Marquee from "react-fast-marquee";

export default function Bata() {
  const backgroundImage = {
    backgroundImage: `url(/assets/ceremony/bata.png)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div
      style={backgroundImage}
      className="min-h-[35vh] lg:min-h-[50vh] flex flex-col relative"
    >
      <div className="w-full bg-redCeremony-500 py-2 absolute bottom-[0] z-10">
        <Marquee gradient={false} speed={40} autoFill={true}>
          <p className="font-mudstone text-white text-3xl lg:text-[2.5rem] overflow-hidden">
            ENJANA - R
          </p>
        </Marquee>
      </div>
    </div>
  );
}
