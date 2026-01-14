
import { Plan, Analyze, Recommend, Validation } from "../../../assets/svg/index";
import ServicePage from "../../../components/services/service-page/servicePage";

export default function UxAudit() {
    const StrategyListing = [
        { id: 1, title: "Heuristic analysis" },
        { id: 2, title: "Performance and usability review" },
        { id: 3, title: "Conversion optimization" },
        { id: 4, title: "Experience refinement" },
    ]

    const ProcessCards = [
        {
            id: 1,
            title: "Assess",
            desc: "Review current user experience and product performance.",
            img: <Plan />,
            digit_width: 19,
        },
        {
            id: 2,
            title: "Analyze",
            desc: "Identify friction points and missed usability improvements strategically.",
            img: <Analyze />,
            digit_width: 36,
        },
        {
            id: 3,
            title: "Recommend",
            desc: "Deliver prioritized improvement plans and optimization suggestions clearly.",
            img: <Recommend />,
            digit_width: 40,
        },
        {
            id: 4,
            title: "Optimize",
            desc: "Implement and monitor changes to measure long-term user satisfaction.",
            img: < Validation />,
            digit_width: 46,
        },
    ]
    const WhyListing = [
        { title: "We Identify Usability and Experience Issues", desc: "We audit user flows, interactions, and interfaces to uncover friction points and gaps." },
        { title: "We Prioritize Improvements Based on Impact" },
        { title: "We Optimize Experiences for Better Adoption" }
    ]
    return (
        <>
            <ServicePage
                main_heading="UX Audit & Product Optimization"
                hero_desc="Refine what exists, redefine how it performs. We optimize products for usability, efficiency, and conversion."
                sec_heading="Identify usability issues and optimize product"
                sec_desc="Our UX Audit identifies design weaknesses, user friction, and missed opportunities, helping you deliver consistent product excellence."
                StrategyListing={StrategyListing}
                processHeading="A Strategic Process That Builds Strong Foundations"
                processCards={ProcessCards}
                whyHeading="Hire UX Audit Experts for Long-Term Product Success"
                WhyListing={WhyListing}

            />
        </>
    )
}