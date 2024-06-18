export const Avatar = ({name, size = "xs"}: {name:string, size?:"xs" | "xl"}) => {

return (
<div className={`relative inline-flex items-center justify-center ${size === "xs" ? "w-6 h-6":" w-10 h-10"} overflow-hidden bg-gray-400 rounded-full`}>
    <span className={`text-gray-00 ${size === "xs" ? "text-xs":" text-xl"}`}>{name[0].toUpperCase()}</span>
</div>)

}