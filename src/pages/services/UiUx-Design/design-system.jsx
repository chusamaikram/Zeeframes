
import { Plan, Create, Document, Integrate } from "../../../assets/svg/index";
import ServicePage from "../../../components/services/service-page/servicePage";

export default function DesignSystem() {
    const StrategyListing = [
        { id: 1, title: "Design libraries & tokens" },
        { id: 2, title: "System scalability & team alignment" },
        { id: 3, title: "UI documentation & accessibility" },
        { id: 4, title: "Visual and brand consistency" },
    ]

    const ProcessCards = [
        {
            id: 1,
            title: "Audit",
            desc: "Evaluate existing design assets, patterns, and inconsistencies.",
            img: <Plan />,
            digit_width: 19,
        },
        {
            id: 2,
            title: "Create",
            desc: "Develop reusable UI components, styles, and tokens for flexible scaling.",
            img: <Create />,
            digit_width: 36,
        },
        {
            id: 3,
            title: "Document",
            desc: "Establish design rules and documentation to enhance collab.",
            img: <Document />,
            digit_width: 40,
        },
        {
            id: 4,
            title: "Integrate",
            desc: "Implement, train teams, and ensure smooth workflow adoption.",
            img: < Integrate />,
            digit_width: 46,
        },
    ]
    const WhyListing = [
        { title: "We Create Unified Design Languages", desc: "We define shared UI components, patterns, and principles that keep products consistent across teams and platforms." },
        { title: "We Improve Speed and Design Efficiency" },
        { title: "We Ensure Long-Term Consistency at Scale" }
    ]
    return (
        <>
            <ServicePage
                main_heading="Design Systems & Guidelines"
                hero_desc="Design smarter, scale faster, and stay consistent. We create scalable systems that bring unity to your brand experiences."
                sec_heading="Building Foundations for Scalable Design"
                sec_desc="Our Design Systems service establishes visual and functional harmony across your entire digital ecosystem. We standardize UI components, documentation, and interaction patterns to strengthen brand consistency."
                StrategyListing={StrategyListing}
                processHeading="A Strategic Process That Builds Strong Foundations"
                processCards={ProcessCards}
                whyHeading="Hire Design System Experts to Create Scalable Product Systems"
                WhyListing={WhyListing}

            />
        </>
    )
}