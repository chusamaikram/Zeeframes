import Headings from "../../components/common/Sec-headings";
import ProcessCard from "../../components/processCards";
import process1 from "../../assets/images/process-1.webp"
import process2 from "../../assets/images/process-2.webp"
import process3 from "../../assets/images/process-3.webp"
import process4 from "../../assets/images/process-4.webp"
import process5 from "../../assets/images/process-5.webp"
import process6 from "../../assets/images/process-6.webp"

import { useEffect, useRef, useState } from "react";

import { motion, useScroll } from "framer-motion"

export default function ProcessSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 500px", "end 300px"],
    });

    const [activeImage, setActiveImage] = useState(process1);

    const cardRefs = useRef([]);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const currentId = entry.target.getAttribute("data-id");
                        const currentCard = Cards.find((c) => c.id === currentId);
                        if (currentCard) {
                            setActiveImage(currentCard.img);
                        }
                    }
                });
            },
            { threshold: 0.5 }
        );

        cardRefs.current.forEach((ref) => ref && observer.observe(ref));

        return () => {
            cardRefs.current.forEach((ref) => ref && observer.unobserve(ref));
        };
    }, []);

    const Cards = [
        {
            id: "01",
            heading: "Discovery",
            category: "Research & Domain Analysis",
            desc: "Don't ignore the crucial step of Research & Development in the UX Design Process! Discover and solve user problems to launch a successful product. Gather data on the target audience and analyze customer feedback. Improve user experience",
            img: process1,

        },
        {
            id: "02",
            heading: "Flows",
            category: "User Journey Map Sitemap",
            desc: "Create successful user flows for your product in the UX design process by mapping user journeys and interactions. Define product ideas and goals, tailored to user needs, behavior, and expectations. Test with real users for optimization.",
            img: process2,


        },
        {
            id: "03",
            heading: "Wireframes",
            category: "Low - Fidelity Design",
            desc: "Define the content and functionality of your product with wireframes in the UX Design process. Brainstorm multiple ideas, get feedback, and refine for high fidelity wireframes. Enhance the user interface for a natural and intuitive look.",
            img: process3,

        },
        {
            id: "04",
            heading: "Mockups",
            category: "High - Fidelity Design",
            desc: "Visualize your product's appearance with mockups in the UX Design. Detailed design for every screen gets reviewed by stakeholders and the design team. Get it tested with users for improved design based on their needs and expectations.",
            img: process4,
        },
        {
            id: "05",
            heading: "Prototyping",
            category: "Interaction Design",
            desc: "UX Designers create clickable prototypes for your product using tools like Invision to assess product functionality. Gather user feedback and collaborate with development team to create improved version of the design for implementation.",
            img: process5,
        },
        {
            id: "06",
            heading: "Testing",
            category: "Usability Testing",
            desc: "UX designers focus on improving product usability by testing with real users. Define the testing goals and scenarios and recruit a target audience. Conduct usability tests, analyze results, and make changes for optimal user experience.",
            img: process6,
        },
    ]
    return (
        <>
            <section className="py-8 sm:py-[80px]">
                <div className="container">
                    <div className="mb-8 sm:mb-[64px]">
                        <Headings
                            title="Our process, Your Advantage"
                            secHeading="From Idea To Execution"
                            desc="We have become experts in creating top-notch digital products. We design beautifully and
develop excellently. And we care deeply about what we do."
                        />
                    </div>
                    <div ref={containerRef} className="flex items-start gap-20 relative ">
                        <motion.div
                            layout={false}
                            style={{
                                scaleY: scrollYProgress,
                                transformOrigin: 'top',
                            }}
                            initial={{ scaleY: 0 }}
                            className=" hidden md:block absolute left-[29px] top-0 h-full w-[3px] bg-[#F3FE00]"
                        />
                        <div className="process-cards pl-none sm:pl-12 w-full max-w-[609px] relative">
                            <ul className="  flex flex-col items-start gap-8 md:gap-25">
                                {Cards.map((items, index) => (
                                    <li key={items.id}
                                        ref={(el) => (cardRefs.current[index] = el)}
                                        data-id={items.id}
                                    >
                                        <div className="flex flex-col items-start gap-10">

                                            <ProcessCard
                                                id={items.id}
                                                heading={items.heading}
                                                category={items.category}
                                                desc={items.desc}
                                            />
                                            <div className="overflow-hidden block md:hidden h-[188px] w-full">
                                                <img className="object-cover w-full h-full rounded-4" src={items.img} alt="thumbnail" width={363} height={349} loading="lazy" />
                                            </div>
                                        </div>

                                    </li>

                                ))}
                            </ul>
                        </div>
                        <div className="hidden md:block  sticky top-[20vh] h-fit ">
                            <img className="object-contain w-full rounded-4" src={activeImage} alt="process visuals" width={527} height={506} loading="lazy" />

                        </div>

                    </div>


                </div>

            </section>

        </>
    )
}





