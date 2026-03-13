
const GhostBtn = ({children}: {children: React.ReactNode}) => {
return <button className="border-2 border-green-50 outfit rounded-full px-5 py-2 bg-emerald-950/10 hover:border-green-600 hover:text-green-600 font-semibold">
    {children}
</button>
}
export default GhostBtn;