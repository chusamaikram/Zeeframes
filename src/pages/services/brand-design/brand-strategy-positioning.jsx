import { Define, Develop, Research, Validation } from "../../../assets/svg";
import ServicePage from "../../../components/services/service-page/servicePage";


export default function BrandStrategy() {
    const StrategyListing = [
        { id: 1, title: "Market research & analysis" },
        { id: 2, title: "Brand positioning & tone" },
        { id: 3, title: "Audience persona development" },
        { id: 4, title: "Value proposition definition" },
    ]

    const ProcessCards = [
        {
            id: 1,
            title: "Research",
            desc: "Explore market landscape, competitors, and audience expectations thoroughly.",
            img: <Research />,
            digit_width: 19,
        },
        {
            id: 2,
            title: "Define",
            desc: "Identify positioning, tone, and communication pillars that set you apart distinctly.",
            img: <Define />,
            digit_width: 36,
        },
        {
            id: 3,
            title: "Develop",
            desc: "Craft messaging, mission, and purpose that resonate across every brand channel.",
            img: <Develop />,
            digit_width: 40,
        },
        {
            id: 4,
            title: "Align",
            desc: "Validate positioning through audience feedback and refine for maximum impact.",
            img: < Validation />,
            digit_width: 46,
        },
    ]
    const WhyListing = [
        { title: "We Define Clear Brand Strategy", desc: "We clarify your brand’s purpose, vision, and goals to create a strong strategic foundation." },
        { title: "We Establish Strategic Brand Direction" },
        { title: "We Align Brand Vision and Purpose" }
    ]
    return (
        <>
            <ServicePage
                main_heading="Brand Strategy & Positioning"
                hero_desc="Define who you are, why you matter, and where you belong. We position your brand with clarity, confidence, and competitive power."
                sec_heading=" Building Brands With Strategic Depth"
                sec_desc="We create brand strategies that articulate vision, values, and personality. Our positioning frameworks help your brand stand out and connect emotionally with the right audience."
                processHeading="A Strategic Process That Builds Strong Foundations"
                whyHeading="Why Are Our Brand Strategy & Positioning Services the Right Choice for You?"
                StrategyListing={StrategyListing}
                processCards={ProcessCards}
                WhyListing={WhyListing}

            />
        </>
    )
}