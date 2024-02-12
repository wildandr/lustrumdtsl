import React from "react";
import Image from "next/image";

export default function Hero() {
    const backgroundImage = {
        backgroundImage: `url(/assets/cia/bg_texture_cia.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };

    return (
        <main>
            <div
                className="min-h-screen flex flex-col justify-center items-center bg-green-500 font-sans"
                style={backgroundImage}
            >
                <Image
                    src="/assets/cia/title.png"
                    className={`w-[60px] h-[auto]`}
                    width={1000}
                    height={1000}
                    alt="cia"
                />
            </div>
        </main>
    );
}
