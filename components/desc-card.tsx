import Image from "next/image";
import SmallText from "./small-txt";
import { Dot } from "lucide-react";

const DescCard = ({image, active, titleicon, titlesmall, title, desc, points}: {
    image: string,
    active: boolean,
    titleicon: React.ReactNode,
    title: string,
    titlesmall: string,
    desc: string,
    points: string[]
}) => {
return <div className={"flex flex-col gap-1 rounded-xl overflow-clip bg-green-50 hover:-translate-y-2 hover:shadow-xl " + (active == true ? "border border-green-950" : "")}>
    <Image src="/Lake-Restoration.jpeg" alt="Lake Restoration" width={1920} height={1080} />
    <div className="px-10 py-7 flex flex-col gap-5">
        <SmallText className="flex items-center justify-center gap-2 w-fit"> {titleicon} {titlesmall.toUpperCase()} </SmallText>
        <h2 className="text-xl font-bold outfit">{title}</h2>
        <p className="text-sm text-green-950/65 public">{desc}</p>
        <ul>
        {
            points.map(ele => {
                return <li className="text-green-950/95 text-sm flex gap-1 public"><Dot/>{ele}</li>
            })
        }
    </ul>
    </div>
    
</div>
}
export default DescCard;