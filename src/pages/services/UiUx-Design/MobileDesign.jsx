

import { Plan, Deliver, Discovery, Validation, Design } from "../../../assets/svg/index";
import ServicePage from "../../../components/services/service-page/servicePage";

export default function MobileDesign() {
    const StrategyListing = [
        { id: 1, title: "Mobile-first layout and structure" },
        { id: 2, title: "Touch-friendly interactions" },
        { id: 3, title: "Clear navigation on small screens" },
        { id: 4, title: "Consistent design across devices" },
    ]

    const ProcessCards = [
        {
            id: 1,
            title: "Research",
            desc: "Understand mobile users, behaviors, and contexts",
            img: <Discovery />,
            digit_width: 19,
        },
        {
            id: 2,
            title: "Structure",
            desc: "Define mobile layouts and content hierarchy",
            img: <Plan />,
            digit_width: 36,
        },
        {
            id: 3,
            title: "Design",
            desc: "Create intuitive, touch-friendly mobile interfaces",
            img: <Design />,
            digit_width: 40,
        },
        {
            id: 4,
            title: "Testing",
            desc: "Validate usability across devices and screen sizes",
            img: < Validation />,
            digit_width: 46,
        },
    ]
    const WhyListing = [
        { title: "Mobile-First Thinking", desc: "We design with mobile users in mind from the start, not as an afterthought." },
        { title: "Touch-Friendly Design" },
        { title: "Consistent Across Devices" }
    ]
    return (
        <>
            <ServicePage
                main_heading="Mobile Design"
                hero_desc="We design mobile-first interfaces that are intuitive, responsive, and optimized for real user behavior across devices."
                sec_heading="Mobile Experiences Built with Purpose"
                sec_desc="Our mobile design services create clear, fast, and easy-to-navigate experiences optimized for smaller screens and real user behavior."
                StrategyListing={StrategyListing}
                processHeading="Our Mobile Design Process"
                processCards={ProcessCards}
                whyHeading="Why Choose Our Mobile Design Services?"
                WhyListing={WhyListing}

            />
        </>
    )
}