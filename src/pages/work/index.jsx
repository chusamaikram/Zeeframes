import { useState } from "react";
import Mainheading from "../../components/common/mainheading";
import ShowcaseCard from "../home/showcase-card";
import ContactUs from "../home/contact-us";
import useTitle from "../../components/common/page-title";
import ExternalLink from "../../components/common/External-link";

export default function Work() {

    useTitle("Work | Zeeframes");


    const Filters = [
        { id: 1, name: "All Niches", },
        { id: 2, name: "AI", },
        { id: 3, name: "Enterprise", },
        { id: 4, name: "Finn-Tech", },
        { id: 5, name: "SaaS", },
        { id: 6, name: "Crypto & Web3", },
        { id: 7, name: "Automotive", },
        { id: 8, name: "Ed-Tech", },
        { id: 9, name: "Mar-Tech", },
        { id: 10, name: "IT/Consulting", },
        { id: 11, name: "Social Media", },
        { id: 12, name: "Health Tech", },
        { id: 13, name: "E-Commerce", },
        { id: 14, name: "Construction Tech", },
        { id: 15, name: "Legal Tech", },
        { id: 16, name: "Freight & Logistics", },

    ]

    const [selected, setSelected] = useState([Filters[0].id]); // first selected by default

    const toggleSelect = (id) => {
        if (selected.includes(id)) {
            setSelected(selected.filter((i) => i !== id));
        } else {
            setSelected([...selected, id]);
        }
    };
    return (
        <>
            <section className="bg-[#030303] py-12 sm:py-[80px] ">

                <div className="container">
                    <div className='relative'>
                        <div className='absolute top-[60px] sm:top-[163px] left-0 sm:left-[117px] z-[2]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                                <path
                                    d="M0.0100075 33.0318C-0.0137919 33.16 0.00525768 33.289 0.0589005 33.4014C0.11667 33.5226 0.204905 33.6186 0.319485 33.6807C0.438587 33.7301 0.566746 33.754 0.703937 33.7523L7.48027 33.0694C11.1945 32.7105 14.932 33.1796 18.4538 34.4205C21.9715 35.6529 25.1791 37.6597 27.8265 40.2947L32.659 45.0631C32.7472 45.1591 32.866 45.2299 32.9941 45.2538C33.1309 45.2735 33.2598 45.2545 33.3809 45.1967C33.502 45.139 33.6066 45.0466 33.6687 44.9321C33.7139 44.8043 33.7291 44.6802 33.7314 44.5517L33.0676 37.7952C32.699 34.084 33.1498 30.3325 34.4021 26.8147C35.6289 23.2878 37.6255 20.0841 40.259 17.4369L45.0547 12.601C45.1506 12.5127 45.2173 12.3854 45.241 12.2572C45.2735 12.1249 45.2544 11.9959 45.188 11.8789C45.1303 11.7578 45.0379 11.6531 44.9233 11.591C44.8042 11.5416 44.6761 11.5177 44.543 11.5281L37.7626 12.2023C34.0528 12.5484 30.3066 12.0835 26.789 10.8512C23.2713 9.61883 20.0678 7.62071 17.4204 4.98565L12.5797 0.199932C12.4914 0.103951 12.3728 0.0331236 12.2446 0.00927674C12.1165 -0.0145701 11.9789 0.0085762 11.8578 0.0663217C11.7367 0.124066 11.6321 0.21641 11.57 0.331C11.5207 0.450118 11.4968 0.578283 11.5072 0.711386L12.1876 7.50249C12.5562 11.2137 12.0926 14.9607 10.8489 18.4744C9.62219 22.0012 7.62561 25.2049 4.99207 27.8521L0.20052 32.6967C0.104592 32.7849 0.0338078 32.9036 0.0100075 33.0318Z"
                                    fill="#F3FE00" />
                            </svg>

                        </div>
                        <div className='relative  z-[10] flex flex-col items-center justify-center gap-3'>

                            <Mainheading className="max-w-[774px]" text="We’re Proud of What We’ve Built." />
                            <p
                                className='text-base sm:text-lg leading-[27px] max-w-[571px] text-center font-[Inter] capitalize'>
                                No matter the industry you're in, or the asset you need, we can design it for you</p>

                            
                                <ExternalLink
                                    path="https://calendly.com/contact-zeeframes/30min?month=2025-12"
                                    className="mt-5 hover:text-[#F3FE00] border hover:border-[#F3FE00] "
                                    defaulttext="Schedule Call"
                                    hovertext="Book a Demo"
                                    showicon={false}
                                />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 sm:py-[80px]">
                <div className="container">
                    <p>Choose your industry</p>
                    <div className="mt-6 overflow-x-auto sm:overflow-hidden flex flex-nowrap sm:flex-wrap gap-4 w-full">
                        {Filters.map((item) => {
                            const isChecked = selected.includes(item.id);
                            return (
                                <label
                                    key={item.id}
                                    className={`
                    relative h-12 py-3 px-6 border text-base font-medium rounded-full whitespace-nowrap cursor-pointer
                    ${isChecked ? "bg-white border-white text-[#0D0D0D]" : "bg-[#111111] border-[#3C3C3CB8] text-white"}
                  `}
                                >
                                    <input
                                        type="checkbox"
                                        className="absolute opacity-0 inset-0 cursor-pointer"
                                        checked={isChecked}
                                        onChange={() => toggleSelect(item.id)}
                                    />
                                    {item.name}
                                </label>
                            );
                        })}
                    </div>
                    <div className="mt-16">
                        <ShowcaseCard />


                    </div>
                </div>
            </section>
            <ContactUs />
        </>
    )
}