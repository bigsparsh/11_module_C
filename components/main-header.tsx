import Image from "next/image"
import SmallText from "./small-txt"

const MainHeader = ({color}: {color?: string}) => {
    return (<header className="flex gap-2  p-3 ">
        <div className="bg-green-700 p-2 rounded-xl grid place-items-center">
          <Image src="/icon-1.png" alt="Green Agra Logo" width={25} height={25}   />
        </div>
            
          <div className="flex flex-col">
            <h1 className={"outfit " + color}>Green Agra</h1>
            <SmallText className="text-green-600">GREEN CITY MISSION 2030</SmallText>
          </div>
        </header>)
}
export default MainHeader;