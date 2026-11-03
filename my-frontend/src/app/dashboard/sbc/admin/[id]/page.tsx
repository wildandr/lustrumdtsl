import DetailUserSbc from "@/component/module/sbc/FormResponse";
import Image from "next/image";

export default async function DetailDashboard({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const {id} = await params;
    return (
        <div className=" bg-[#058369] h-[600vh] ">
            <Image
                src="/bgcia.png"
                alt="bgcia"
                width={1000}
                height={1000}
                className="hidden sm:flex fixed w-full h-full object-cover z-10"
            />
            <DetailUserSbc params={{ id }} />
        </div>
    );
}
