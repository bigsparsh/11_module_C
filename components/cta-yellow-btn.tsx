const CTAYellowBtn = ({children, className}: {children: React.ReactNode, className?: string}) => {
return <button className={"bg-orange-400 outfit rounded-full px-5 py-2 flex gap-2 shadow-amber-600 hover:shadow-lg hover:-translate-y-1 font-semibold cursor-pointer " + className}>
    {children}
</button>
}
export default CTAYellowBtn;