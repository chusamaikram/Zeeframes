import bg1 from "../../assets/images/bg1.webp"
import bg2 from "../../assets/images/bg2.webp"
import bg3 from "../../assets/images/bg3.webp"
import TrustedLogo from "../../assets/svg/trusted-logo.svg"
import { adiqat, cisco, nissan, repurpose, trafilea, walmart, yallamotor } from "../../assets/images";
import Button from "../../components/common/button";

import { Bdot, Diamond, FigmaIcon, StarIcon1, StarIcon2, Wicon, XD } from "../../assets/svg";
import ExternalLink from "../../components/common/External-link";

export default function HeroSection() {
    const Startups = [
        {
            id: 1,
            icon: <FigmaIcon />
        },
        {
            id: 2,
            icon: <Diamond />
        },
        {
            id: 3,
            icon: <XD />
        },
        {
            id: 4,
            icon: <FigmaIcon />
        },
        {
            id: 5,
            icon: <Wicon />
        },
        {
            id: 6,
            icon: <Bdot />
        },
    ]

    const companies = [
        {
            name: 'walmart',
            image: walmart,
            width: "135",
            height: "33"
        },
        {
            name: 'cisco',
            image: cisco,
            width: "61",
            height: "33"
        },
        {
            name: 'repurpose',
            image: repurpose,
            width: "198",
            height: "33"
        },
        {
            name: 'trafilea',
            image: trafilea,
            width: "137",
            height: "33"
        },
        {
            name: 'adiqat',
            image: adiqat,
            width: "56",
            height: "40"
        },
        {
            name: 'yallamotor',
            image: yallamotor,
            width: "152",
            height: "33"
        },
        {
            name: 'nissan',
            image: nissan,
            width: "142",
            height: "33"
        },
        {
            name: 'walmart',
            image: walmart,
            width: "135",
            height: "33"
        },
        {
            name: 'nissan',
            image: nissan,
            width: "142",
            height: "33"
        },
        {
            name: 'walmart',
            image: walmart,
            width: "135",
            height: "33"
        },
        {
            name: 'nissan',
            image: nissan,
            width: "142",
            height: "33"
        },
        {
            name: 'walmart',
            image: walmart,
            width: "135",
            height: "33"
        },
        {
            name: 'yallamotor',
            image: yallamotor,
            width: "152",
            height: "33"
        },
        {
            name: 'nissan',
            image: nissan,
            width: "142",
            height: "33"
        },



    ]

    return (
        <>
            <section className="hero-section h-[750px]">

                <div className="container">
                    <div className="relative ">

                        <img className="absolute z-0 top-0 -left-[65px] hidden sm:block blur-[15px]" src={bg1} width={649} height={789} aria-hidden="true" loading="lazy" />
                        <img className="hidden sm:block  absolute z-0 top-[150px] sm:top-0 -left-[20px] sm:left-[65px] " src={bg2} width={435} height={429} aria-hidden="true" loading="lazy" />
                        <img className="absolute z-0 -top-[15px] -right-[60px] blur-[15px] hidden sm:block opacity-[0.8]" src={bg3} width={673} height={606} aria-hidden="true" loading="lazy" />
                        <StarIcon1 />
                        <StarIcon2 />

                        <div className="absolute z-10 top-0 left-0">
                            <div className="above-glow mx-auto w-fit sm:w-[600px] mt-8 sm:mt-12 mx-auto bg-[#0B0B0B] rounded-[8px] border border-[rgba(60,60,60,0.4)] flex flex-col sm:flex-row items-start sm:items-center justify-center gap-5 p-2">
                                <div className="flex items-center gap-3">
                                    <img src={TrustedLogo} alt="thumbnail" width={28} height={28} />
                                    <p className="leading-[normal]">Trusted by startups to craft $100M+ designs with</p>
                                </div>

                                <ul className="group flex items-center   ">
                                    {Startups.map(item => (
                                        <li key={item.id}>
                                            <div className={`-ms-[7px] w-[32px] h-[32px] rounded-full bg-[#303030] border border-[#0D0D0C] flex items-center justify-center transition-transform duration-300 ease-in-out ${item.id === 1 ? "group-hover:translate-x-0" : "group-hover:translate-x-[6px]"} `}>
                                                {item.icon}
                                            </div>


                                        </li>

                                    ))}


                                </ul>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-3 py-12">
                                <div className="relative">
                                    <h1 className=" w-[330px] sm:w-[700px] lg:w-[978px] text-center font-[Geologica] uppercase font-extrabold text-[36px]  sm:text-[42px] lg:text-[72px]  leading-[50px] sm:leading-[64px] lg:leading-[96px]">
                                        Creative Intelligence in Every Pixel
                                    </h1>
                                    <span className="absolute hidden md:block  rotate-7 top-[10px] -right-[7px] bg-[#F3FE00] py-[6px] px-2 rounded-[8px] text-[#0B0B0B] text-[12px] font-bold uppercase font-[Geologica]"> NO CODE</span>


                                </div>
                                <p className=" w-[319px] sm:w-full text-base text-center capitalize text-[#FFFFFF] font-[Inter]"> We craft <span className="text-[#F3FE00] font-[Plus Jakarta Sans]"> stunning</span> designs for businesses worldwide.</p>

                            </div>
                            <div className=" above-glow flex items-center justify-center gap-[20px] mx-auto">
                                <ExternalLink
                                    path="https://calendly.com/contact-zeeframes/30min?month=2025-12"
                                    className=" h-[49px] min-w-[180px] bg-white border border-white text-[#0B0B0B]  font-[Plus Jakarta Sans] leading-none "
                                    hovertext={" Let's talk 🤙"}
                                    defaulttext={"Schedule Call"}
                                    showicon={false}
                                />
                                <ExternalLink
                                    path="https://www.figma.com/proto/ZVnmWStSNFPShPBIOzXAqN/Sample-Work---Products?node-id=187190-11767&p=f&t=ljXD3DpgiMiJKe8T-0&scaling=scale-down&content-scaling=fixed&page-id=187190%3A11766"
                                    className=" h-[49px] w-[152px] bg-black border border-white font-[Inter] hover:border-[#F3FE00] "
                                    hovertext={" Open "} defaulttext={"©2025 Work"}
                                    showicon={false}
                                />
                            </div>
                            <p className="mt-8 sm:mt-[88px] text-center text-[14px] font-medium uppercase text-[#E7E7E7]">Trusted by Industry Leaders & Fast-Growing Startups</p>
                            <div className="py-5 mt-6 hidden sm:flex  overflow-hidden">
                                <div className=" slide-track relative py-1 flex shrink-0  items-center justify-between gap-[48px]">
                                    {companies.map((item,index) => (
                                        <div key={index} className=" ">
                                            <img className="w-full h-full"
                                                src={item.image} alt={item.name}
                                                width={item.width}
                                                height={item.height}
                                            />
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}