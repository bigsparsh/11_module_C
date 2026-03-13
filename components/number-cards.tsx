const NumberCards = ({icon, number, ops, title, desc}: {
    icon: React.ReactNode,
    number: string,
    ops: React.ReactNode,
    title: string,
    desc: string
}) => {
    return <div className="flex flex-col items-center justify-center gap-3 p-3 border rounded-xl bg-green-50/5 aspect-square">
        {icon}
        <h1 className="text-5xl text-green-50 outfit font-black">{number}</h1>
        <div className="flex flex-col justify-center items-center">
            <h3 className="text-green-50 font-bold outfit">{title}</h3>
        <p className="text-xs text-green-50/50 public text-center">{desc}</p>
        </div>
    </div>
}
export default NumberCards;