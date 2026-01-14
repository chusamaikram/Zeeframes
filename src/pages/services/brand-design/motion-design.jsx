import { Define, Discovery, Guide, Test } from "../../../assets/svg";
import ServicePage from "../../../components/services/service-page/servicePage";


export default function MotionDesign() {
    const StrategyListing = [
        { id: 1, title: "Smooth, intuitive interactions" },
        { id: 2, title: "Clear visual storytelling through motion" },
        { id: 3, title: "Stronger brand expression" },
        { id: 4, title: "Enhanced product and interface clarity" },
    ]

    const ProcessCards = [
        {
            id: 1,
            title: "Concept",
            desc: "Define purpose, message, and motion direction",
            img: <Discovery />,
            digit_width: 19,
        },
        {
            id: 2,
            title: "Storyboard",
            desc: "Plan motion flow, timing, and transitions",
            img: <Define />,
            digit_width: 36,
        },
        {
            id: 3,
            title: "Design",
            desc: "Create animations aligned with brand and product",
            img: <Guide />,
            digit_width: 40,
        },
        {
            id: 4,
            title: "Refinement",
            desc: "Polish motion for clarity, smoothness, and impact",
            img: < Test />,
            digit_width: 46,
        },
    ]
    const WhyListing = [
        { title: "Purpose-Driven Motion", desc: "Every animation serves a clear purpose—enhancing usability, communication, or brand expression." },
        { title: "Brand-Aligned Animations" },
        { title: "Product-Focused Approach" }
    ]
    return (
        <>
            <ServicePage
                main_heading="Motion Design"
                hero_desc="We create purposeful motion design that enhances storytelling, improves user experience, and adds clarity and impact to digital products."
                sec_heading=" Motion That Communicates"
                sec_desc="Our motion design services use purposeful movement to guide attention, explain ideas, and enhance usability without distraction."
                processHeading="Our Motion Design Process"
                whyHeading="Why Choose Our Motion Design Services?"
                StrategyListing={StrategyListing}
                processCards={ProcessCards}
                WhyListing={WhyListing}

            />
        </>
    )
}