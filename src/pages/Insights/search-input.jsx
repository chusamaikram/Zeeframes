import { SearchIcon } from "../../assets/svg"
export default function SearchInput({ placeholder, ShowIcon = true, Ff = 'font-[Plus_Jakarta_Sans]', borderColor = "border-[#2D2D2D]" }) {
    return (
        <>
            <div className={`w-[364px]  h-[48px]  p-1.5 ps-4.5 bg-white/10 border ${borderColor} rounded-full flex items-center justify-between relative  `}>
                <input type="search" placeholder={placeholder} className={`outline-none h-full text-base leading-[normal] ${Ff} bg-transparent grow text-white  `} />
                {ShowIcon &&
                    <button className="w-[36px] cursor-pointer h-[36px] px-[2px] rounded-[100px] flex items-center justify-center shrink-0 bg-white/10" aria-label="serach button"><SearchIcon /> </button>
                }

            </div>
        </>
    )
}