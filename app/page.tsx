"use client"
import CTAYellowBtn from "@/components/cta-yellow-btn";
import DescCard from "@/components/desc-card";
import DialogForm from "@/components/dialog-form";
import GhostBtn from "@/components/ghost-btn";
import MainHeader from "@/components/main-header";
import NumberCards from "@/components/number-cards";
import SmallText from "@/components/small-txt";
import { ArrowRight, Crop, Droplet, Percent, Plus, Recycle, Trees, Dot } from "lucide-react";
import { useState } from "react";

const Landing = () => {
  const [showDialog, setShowDialog] = useState<boolean>(false);

  
  return <>
  {showDialog? <DialogForm close={setShowDialog}/>: null}
  <main className="h-screen *:text-green-100" style={{
    background: " linear-gradient(110deg, rgba(10, 28, 18, 0.88) 40%, rgba(10, 28, 18, 0.45) 100% 100%), url('/hero-bg.jpg') "
  }}>
      <div className="flex justify-between items-center border-b border-green-500 bg-emerald-950/70 px-5 py-2 fixed top-0 z-[999] w-full backdrop-blur-lg shadow-lg">
        <MainHeader />
        <nav className="flex gap-3 *:outfit">
          <a href="" className="text-green-100/50 hover:text-green-600 font-semibold public">Home</a>
          <a href="" className="text-green-100/50 hover:text-green-600 font-semibold public">Initialve</a>
          <a href="" className="text-green-100/50 hover:text-green-600 font-semibold public">Lake Restoration</a>
          <a href="" className="text-green-100/50 hover:text-green-600 font-semibold public">Events</a>
        </nav>
        <button onClick={() => setShowDialog(true)}>
        <CTAYellowBtn className="h-fit w-fit text-green-50">
        Join the Movement <ArrowRight/></CTAYellowBtn>
      </button>
      </div>

      <section className="flex gap-10 pt-40 p-20"> 
        <div className="flex flex-col gap-7 basis-1/2 justify-center">
          <div className="border public border-green-800 text-green-800 public bg-emerald-950/75 w-fit text-sm px-3 rounded-full public font-bold flex items-center justify-center"><Dot/> GREEN CITY MISSION 2030 <Dot/> AMC INITIATIVE <Dot/></div>
          <h1 className="text-7xl font-black outfit leading-14">Building a <span className="block text-green-600">Greener</span> Agra</h1>
          <p className="text-green-50/65 public">
            The Agra Municipal Corporation, in partnership with the Government of Uttar Pradesh, is restoring rivers, planting forests, and building a city that breathes — one green zone at a time.
          </p>
          <div className="flex gap-5">
            <CTAYellowBtn>Explore Initiatives <ArrowRight/> </CTAYellowBtn>
            <GhostBtn>View Lakes</GhostBtn>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 basis-1/2 w-fit h-fit p-3 rounded-xl border border-green-700 bg-green-800/25 backdrop-blur place-items-center">
          <div className="flex flex-col gap-1 p-5">
            <h3 className="text-5xl text-green-50 outfit font-black flex items-center ">50K <Plus className="text-green-600"/></h3>
            <SmallText className="text-green-50/50">TREES PLANTED</SmallText>
          </div>
          <div className="flex flex-col gap-1 p-5">
            <h3 className="text-5xl text-green-50 outfit font-black flex items-center ">50K <Plus className="text-green-600"/></h3>
            <SmallText className="text-green-50/50">TREES PLANTED</SmallText>
          </div>
          <div className="flex flex-col gap-1 p-5">
            <h3 className="text-5xl text-green-50 outfit font-black flex items-center ">50K <Percent className="text-green-600"/> </h3>
            <SmallText className="text-green-50/50">TREES PLANTED</SmallText>
          </div>
          <div className="flex flex-col gap-1 p-5">
            <h3 className="text-5xl text-green-50 outfit font-black flex items-center ">50K <Plus className="text-green-600"/></h3>
            <SmallText className="text-green-50/50">TREES PLANTED</SmallText>
          </div>
        </div>
      </section>

  </main>
  <section className="h-screen flex flex-col justify-center items-center bg-green-900 p-20 gap-10">
    <SmallText className="text-green-600">— OUR IMPACT</SmallText>
    <h2 className="text-5xl text-green-50 font-black outfit">Numbers That Tell the Story</h2>
    <div className="grid grid-cols-4 gap-3">

    <NumberCards icon={<Trees className="text-white" width={25} height={25}/>} number="50K" ops={<Plus className="text-green-600"/>} title="Trees Planted" desc="Across all AMC zones" /> 
    <NumberCards icon={<Droplet className="text-white" width={25} height={25}/>} number="12" ops={<Plus className="text-green-600"/>} title="Lakes Restored" desc="Including Keetham Lake & Brahma Sarovar" /> 
    <NumberCards icon={<Recycle className="text-white" width={25} height={25}/>} number="30" ops={<Percent className="text-green-600"/>} title="Waste Recycled" desc="Leading smart city index in 2023" /> 
    <NumberCards icon={<Crop className="text-white" width={25} height={25}/>} number="200" ops={<Plus className="text-green-600"/>} title="Green Zones" desc="Parks, pocket forests, & habitats" /> 
    </div>
  </section>

  <section className="flex flex-col p-20 bg-green-100 gap-10">
    <SmallText className="text-amber-600 font-bold">— WHAT WE DO</SmallText>
    <div className="flex gap-10 items-center">
      <h1 className="text-5xl text-green-950 font-black outfit leading-14">Three Pillars of a Greener City</h1>
      <p className="text-green-950/65 public">From reviving the Yamuna's banks to planting a million trees, Agra's transformation is driven by science, community, and an unstoppable commitment to a sustainable future.</p>
    </div>
    <div className="grid grid-cols-3 gap-3">
      <DescCard image="https://picsum.photos/1920/1080" title="Lake Restoration" titleicon={<Droplet className="text-green-950/50" width={20} height={20} />} desc="Reviving Agra's iconic water bodies through desilting, ghats restoration and wetland regeneration — restoring ecological balance and beloved public spaces along the Yamuna." points={[
        "8 water bodies fully desilted & restored",
        "Keetham Lake water quality up 35%",
        "Yamuna ghat beautification underway",
        "Bird sanctuary at Sur Sarovar expanded",
      ]} active ={true} titlesmall="Water Bodies"  />

      <DescCard image="https://picsum.photos/1920/1080" title="Urban Forestry" titleicon={<Trees className="text-green-950/50" width={20} height={20} />} desc="Building a city-wide green canopy through strategic tree planting, avenue greening and Miyawaki forests to fight the urban heat island effect across Agra's heritage zones." points={[
        "50,000+ trees planted city-wide",
        "Taj Mahal buffer zone fully greened",
        "Miyawaki forests at 10 locations",
        "Native species priority policy",
      ]} active ={false} titlesmall="Forestry"  />

      <DescCard image="https://picsum.photos/1920/1080" title="Waste Management" titleicon={<Recycle className="text-green-950/50" width={20} height={20} />} desc="Transforming Agra's waste into a resource through source segregation, composting and cutting-edge processing across all AMC wards — keeping heritage sites spotless." points={[
        "30% waste now composted / recycled",
        "Dry waste centres in every ward",
        "Bio-methanation at 4 major markets",
        "Zero-waste ward programme launched",
      ]} active ={false} titlesmall="Sustainability"  />
    </div>
  </section>

  <section className="flex flex-col p-20 bg-green-900">
    <SmallText className="text-amber-500">— BE THE CHANGE</SmallText>
    <div className="flex justify-between">
      <div className="basis-1/2">
        <h1 className="text-5xl text-green-50 font-black outfit leading-14 ">Agra Needs Your Green Thumb</h1>
    <p className="text-green-50/65 public">
      Volunteer for lake clean-ups, tree planting drives and waste awareness campaigns. Every action plants the seed of a greener future.
    </p>
      </div>
      <button onClick={() => setShowDialog(true)}>
        <CTAYellowBtn className="h-fit w-fit text-green-50">
        Join the Movement <ArrowRight/></CTAYellowBtn>
      </button>
      
    </div>
  </section>

  <footer className="p-20 flex flex-col bg-green-950 gap-10">
      <div className="flex ">
        <div className="flex flex-col basis-2/4">
          <MainHeader color="text-green-50" />
          <p className="text-green-50/65 public pr-20 pl-3">Building a sustainable, vibrant Agra for every citizen. Restoring what the city has lost — one river, one tree, one neighbourhood at a time.</p>
        </div>
        <div className="flex flex-col basis-1/4 gap-2">
          <SmallText className="text-white">QUICK LINKS</SmallText>
          <a href="" className="text-green-100/50 hover:text-green-600  public text-sm">Home</a>
          <a href="" className="text-green-100/50 hover:text-green-600  public text-sm">Our Impact</a>
          <a href="" className="text-green-100/50 hover:text-green-600  public text-sm">Initiatives</a>
          <a href="" className="text-green-100/50 hover:text-green-600  public text-sm">Volunteer</a>
        </div>
        <div className="flex flex-col basis-1/4 gap-2">
          <SmallText className="text-white">INITIATIVES</SmallText>
          <a href="" className="text-green-100/50 hover:text-green-600  public text-sm">Lake Restoration</a>
          <a href="" className="text-green-100/50 hover:text-green-600  public text-sm">Urban Forestry</a>
          <a href="" className="text-green-100/50 hover:text-green-600  public text-sm">Waste Management</a>
          <a href="" className="text-green-100/50 hover:text-green-600  public text-sm">Green Zones</a>
        </div>
      </div>
      <hr className="border-green-700" />
      <div className="flex justify-between">
        <p className="text-green-50/65 public">© 2026 Green Agra · AMC Initiative · Government of Uttar Pradesh</p>
        <p className="text-green-50/65 public">Designed with 💚 for a greener tomorrow</p>
      </div>
  </footer>
  </>
}
export default Landing;