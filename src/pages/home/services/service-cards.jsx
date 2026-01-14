import { Link } from "react-router-dom";
import { cardbg } from "../../../assets/images";
import { ArrowIcon } from "../../../assets/svg/index";

export default function ServiceCard({ heading, title, path }) {
    return (
        <>

            <div className=" relative p-6 sm:p-10 h-[162px] border-t border-t-[#2D2D2D] border-b border-b-[#2D2D2D] hover:border-l-[#2D2D2D] group ">
                <div className="absolute left-0 top-0 h-0 w-[2px] bg-[#2D2D2D] transition-all duration-500 group-hover:h-full"></div>
                <div className="absolute right-30 top-0 opacity-0 translate-x-[-20px] transition-all duration-900 ease-in-out group-hover:opacity-70 group-hover:translate-x-20">
                    <img src={cardbg} alt="card background image" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="z-10 flex items-center justify-between ">
                    <div className=" flex flex-col items-start gap-2 sm:gap-5 translate-x-[-24px] sm:translate-x-[-40px] transition-all duration-900 ease-in-out group-hover:translate-x-0">
                        <p className="text-base sm:text-lg leading-[27px]  uppercase">{heading}</p>
                        <h3 className="text-[22px] sm:text-[28px] font-bold  font-[Geologica]">{title}</h3>
                    </div>
                    <Link to={path} className="w-12 h-12 flex items-center justify-center p-2.5 rounded-full bg-[#2D2D2D] border border-[#2D2D2D] translate-x-[24px] sm:translate-x-[40px] transition-all duration-900 ease-in-out group-hover:translate-x-0 group-hover:bg-white group-hover:text-black" aria-label="services navigation">
                        <ArrowIcon />
                    </Link>
                </div>

            </div>
        </>
    )
}