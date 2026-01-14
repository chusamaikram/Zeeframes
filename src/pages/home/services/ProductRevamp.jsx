import { Design, Discovery, Prototype, Validation } from "../../../assets/svg";
import ServicePage from "../../../components/services/service-page/servicePage";

export default function ProductRevamp() {

    const StrategyListing = [
        { id: 1, title: "Improved usability and user flow" }, { id: 2, title: "Clearer product structure and navigation" }, { id: 3, title: "Modern, consistent interface design" }, { id: 4, title: "Better engagement and retention" }]

    const ProcessCards = [
        {
            id: 1,
            title: "Audit",
            desc: "Review existing product, usability, and performance",
            img: <Discovery />,
            digit_width: 19,
        },
        {
            id: 2,
            title: "Insights",
            desc: "Identify gaps, friction points, and opportunities",
            img: <Design />,
            digit_width: 36,
        },
        {
            id: 3,
            title: "Redesign",
            desc: "Improve structure, interface, and user experience",
            img: <Prototype />,
            digit_width: 40,
        },
        {
            id: 4,
            title: "Optimization",
            desc: "Refine and validate changes for better results",
            img: < Validation />,
            digit_width: 46,
        },
    ]

    const WhyListing = [
        { title: "User-Focused Improvements", desc: "We prioritize real user needs to ensure meaningful product enhancements." },
        { title: "Strategic Refinement" },
        { title: "Minimal Disruption" }
    ]

    return (
        <>
            <ServicePage
                main_heading="Product Revamp"
                hero_desc="We help businesses revamp existing digital products to improve usability, enhance user experience, and align design with evolving business goals."
                sec_heading="Revamp with Purpose to Build a Stronger Brand"
                sec_desc="Our product revamp services identify what’s not working and refine structure, design, and interactions for better performance and usability."
                StrategyListing={StrategyListing}
                processHeading="A Structured Approach to Product Improvement"
                processCards={ProcessCards}
                WhyListing={WhyListing}
                whyHeading="Why Choose Our Product Revamp Services?"
            />
        </>
    )
}