
import { PlusIcon, MinusIcon } from "../../assets/svg"
import ClutchRatings from "../../assets/svg/clutch-ratings.svg"
import { useState } from "react";
import ExternalLink from "../../components/common/External-link";


export default function FaqSection() {

    const [activeIndex, setActiveIndex] = useState(0);

    const handletogle = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    };


    const FaqCards = [
        {
            question: "What is UI UX design, and why is it important?",
            answer:
                "UX design, or user experience design, is designing digital products that are easy to use and provide a positive experience for the user. It is important because a good UX design can increase user satisfaction, engagement, and conversions.",
        },
        {
            question: "What is the UX design process, and how long does it take?",
            answer:
                "The UX design process typically involves research, wireframing, prototyping, testing, and refinement. The time varies depending on project scope and complexity.",
        },
        {
            question: "What types of UX design services do you offer?",
            answer:
                "We offer user research, interface design, usability testing, and complete end-to-end UX strategy services.",
        },
        {
            question: "How does ZeeFrames UI UX Design differ from other design solutions?",
            answer:
                "At ZeeFrames, we believe in the power of Human-Computer Interaction and leverage it to make informed, data-driven design decisions that set us apart from the competition. As a leading UI UX design studio in Pakistan, we follow a design strategy that begins with discovering the needs and pain points of users and ends with real user testing for direct feedback. This approach enables us to create user-centric designs that enhance usability, accessibility, and overall user satisfaction. Our design philosophy is simple: put users at the center of everything we do.Whether it's UX research or designing User Flows, Wireframing or Prototyping our team of expert UI UX designers ensure that your users are considered in every phase of designing to deliver outstanding results that meet the unique needs of your business.",
        },
        {
            question:
                "Are there any customer reviews or case studies available for ZeeFrames UI UX Design?",
            answer:
                "At ZeeFrames, we take pride in our customer reviews and case studies that showcase our expertise in the UI UX design industry. You can easily access them on our website to get a glimpse of our work and the impact it has had on our clients' businesses. As a top-class UI UX design firm, we have worked with a diverse range of clients worldwide, helping them create engaging and intuitive digital experiences for their customers. With our expertise and user-centered design approach, you can be rest assured as we will take your website design to the next level.",
        },
    ]

    return (
        <>
            <section className="above-glow  hidden sm:block py-[80px]">
                <div className="container ">
                    <div className="flex flex-col lg:flex-row items-start justify-between gap-12 ">
                        <div className="max-w-[414px] w-full flex flex-col items-start gap-8  ">
                            <span className="text-[#F3FE00] text-sm uppercase font-[Inter]">FAQs</span>
                            <div className="flex flex-col items-start gap-3">
                                <h2 className="text-[40px] leading-[40px] font-bold uppercase font-[Geologica] ">Got Question?</h2>
                                <p className="max-w-[408px] text-[#BDBDBD] text-sm leading-[21px] font-[Inter] ">We begin with meaningful conversations that drive design decisions.</p>
                            </div>

                            <div className="flex items-start justify-between gap-8">
                                <div className="w-[220px]">
                                    <ExternalLink
                                        path="https://calendly.com/contact-zeeframes/30min?month=2025-12"
                                        className="w-full text-black bg-white hover:bg-transparent hover:text-[#F3FE00] border border-white hover:border-[#F3FE00]"
                                        hovertext="Let's talk"
                                        defaulttext="Book a free call"
                                        showicon={true}
                                    />
                                </div>

                                <a href="#" className="flex items-start gap-4" aria-label="clutch ratings">
                                    <img src={ClutchRatings} alt="clutch logo" width={166} height={47} loading="lazy" />
                                </a>
                            </div>
                        </div>
                        <div className=" w-full flex-grow flex flex-col items-start justify-center gap-4 font-[Inter]">
                            {FaqCards.map((item, index) => (
                                <div key={index} className={` w-full p-5  bg-[rgba(255, 255, 255, 0.04)] border  transition-all duration-500 ${activeIndex === index ? "border-[#F3FE00]" : "border-[#3C3C3C]"}  rounded-[12px]`}>
                                    <button className=" w-full bg-transparent border-none cursor-pointer flex items-center justify-between"
                                     onClick={() => handletogle(index)} aria-label="accordian btn">
                                        <span className="grow text-base font-[Geologica] font-medium text-white text-start"> {item.question}</span>
                                        <span className={`w-[24px] h-[24px] border  rounded-[6px]  ${activeIndex === index ? "border-[#F3FE00] bg-[#F3FE00]" : "border-[#3C3C3C] bg-[#3C3C3C]"}  p-1`}>
                                            {activeIndex === index ?
                                                <PlusIcon /> : <MinusIcon />
                                            }

                                        </span>
                                    </button>
                                    <div
                                        className={`overflow-hidden  transition-all duration-500 ${activeIndex === index ? "max-h-[500px]" : "max-h-0"}`}>
                                        <p className="mt-2 text-base leading-6 text-[#E7E7E7] opacity-[0.6]">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>

                            ))}
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}