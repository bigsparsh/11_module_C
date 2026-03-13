const SmallText = ({children, className}: {
    children: React.ReactNode, 
    className: string
}) => {
return <h3 className={className + " text-xs tracking-widest public"}>
    {children}
</h3>
}
export default SmallText;