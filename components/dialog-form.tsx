import { Cross, CrossIcon, DoorClosed } from "lucide-react";
import GhostBtn from "./ghost-btn";
import { Dispatch, SetStateAction } from "react";

const DialogForm = ({close}: {close: Dispatch<SetStateAction<boolean>>}) => {
    return <div className="w-screen h-screen fixed top-0 grid place-items-center bg-green-950/50 backdrop-blur z-[9999]">
        <button className="bg-green-50 text-green-950 p-5 rounded-xl absolute top-10 right-10" onClick={() => close(false)}><DoorClosed /></button>
        <div className="p-5 rounded-xl flex flex-col gap-3">
        <input type="text" className="rounded-full border border-green-600 bg-green-600/50 px-4 py-1 public placeholder:public" placeholder="Enter Name" />
        <input type="email" className="rounded-full border border-green-600 bg-green-600/50 px-4 py-1 public placeholder:public" placeholder="Emter email" />
        <input type="number" className="rounded-full border border-green-600 bg-green-600/50 px-4 py-1 public placeholder:public" placeholder="Enter number" />
        <input type="text" className="rounded-full border border-green-600 bg-green-600/50 px-4 py-1 public placeholder:public" placeholder="Enter Area" />
        <select className="rounded-full border border-green-600 bg-green-600/50 px-4 py-1 public placeholder:public" >
            <option>
                Lake Restoration
            </option>
            <option>
                Urban Forestry
            </option>
            <option>
                Waste Management
            </option>
        </select>
        <GhostBtn>Submit</GhostBtn>
    </div>
    </div>
}
export default DialogForm;