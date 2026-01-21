import { Link, useLocation } from "react-router-dom";


export default function CommonCard({ path, icon, heading, desc }) {
    const location = useLocation()
    const pathname = location.pathname
    return (
        <>
            <Link  to={path} className={`max-w-[456px] p-5 font-[Inter] rounded-[6px] flex items-start gap-3 transition-transform duration-500 hover:-translate-y-1 hover:bg-[#F3FE0014] ${pathname === path ||
                (pathname.includes(path) && path !== "/")
                ? "bg-[#F3FE0014]"
                : ""
                }`}
                aria-label="service card">
                <div className="w-[24px] h-[24px]">{icon}</div>
                <div className="flex flex-col items-start  gap-1 font-[Inter]">
                    <h3 className="text-base leading-[24px] font-semibold  ">{heading}</h3>
                    <p className="text-base leading-[24px] font-[Inter]">{desc}</p>
                </div>
            </Link>
        </>
    )
}