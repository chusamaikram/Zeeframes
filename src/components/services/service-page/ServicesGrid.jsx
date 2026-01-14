import { Link } from "react-router-dom"
import Servicethumbnail from "../../../assets/images/service-thumbnail.png"
export default function Servicesgrid({ heading, desc, ServiceCards = [], }) {
    return (
        <section className="py-8 sm:py-20">
            <div className="container">
                <div className="mx-auto ">
                    <h2 className="text-[28px] sm:text-[40px]/12 font-bold text-center font-['Geologica']">{heading}</h2>
                    <p className="mt-4 mx-auto max-w-[570px] text-sm/5.25 text-[#BDBDBD] text-center">{desc} </p>
                </div>
                <div className=" mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ServiceCards.map((card, index) => (
                        <Link key={index} to={card.path}>
                            <div className="p-4 rounded-2xl border border-[#373737] bg-[#0B0B0B] flex flex-col items-center gap-6">
                                <div className="overflow-hidden rounded-lg w-full">
                                    <img className="object-cover w-full h-auto" src={Servicethumbnail} width={366} height={210} loading="lazy" />
                                </div>
                                <div className="flex flex-col items-start gap-2">
                                    <h3 className="text-xl/7.5 font-['Geologica'] text-white">{card.title}</h3>
                                    <p className="text-sm/5.25 text-[#D5D5D5] text-start line-clamp-4">{card.desc}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}