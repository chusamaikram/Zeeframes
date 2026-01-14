import { Analyze, Deliver, Discovery, Integrate } from "../../../assets/svg";
import ServicePage from "../../../components/services/service-page/servicePage";


export default function Rebranding() {
    const StrategyListing = [
        { id: 1, title: "Brand audits and evaluations" },
        { id: 2, title: "Identity redesign and refinement" },
        { id: 3, title: "Brand repositioning and tone update" },
        { id: 4, title: "Transition strategy and rollout planning" },
    ]

    const ProcessCards = [
        {
            id: 1,
            title: "Assess",
            desc: "Review your existing brand identity, voice, and perception comprehensively.",
            img: <Discovery />,
            digit_width: 19,
        },
        {
            id: 2,
            title: "Strategize",
            desc: "Define rebranding goals and develop creative strategies aligned with future direction thoughtfully.",
            img: <Analyze />,
            digit_width: 36,
        },
        {
            id: 3,
            title: "Redesign",
            desc: "Create refreshed visuals and systems that reflect modern relevance beautifully.",
            img: <Integrate />,
            digit_width: 40,
        },
        {
            id: 4,
            title: "Launch",
            desc: "Implement new identity and ensure a seamless transition across all platforms smoothly.",
            img: < Deliver />,
            digit_width: 46,
        },
    ]
    const WhyListing = [
        { title: "We Identify Gaps in Brand Perception", desc: "We uncover misalignment between brand intent and audience perception." },
        { title: "We Redesign Brand Systems for Today’s Market" },
        { title: "We Maintain Consistency During Brand Change" }
    ]
    return (
        <>
            <ServicePage
                main_heading="Rebranding & Evolution"
                hero_desc="Transform existing identities into modern, future-ready brand systems. We evolve your brand with purpose, precision, and continuity."
                sec_heading=" Revitalizing Brands for the Next Chapter"
                sec_desc="Our Rebranding & Evolution service helps you modernize your visual identity, tone, and positioning without losing your core essence. We ensure your brand remains relevant, engaging, and forward-looking."
                processHeading="A Strategic Process That Builds Strong Foundations"
                whyHeading="Hire Rebranding Experts to Lead Brand Transformation"
                StrategyListing={StrategyListing}
                processCards={ProcessCards}
                WhyListing={WhyListing}

            />
        </>
    )
}