import { Analyze, Define, Deliver, Design, Discovery } from "../../../assets/svg";
import ServicePage from "../../../components/services/service-page/servicePage";


export default function VisualCommunication() {
    const StrategyListing = [
        { id: 1, title: "Social media and digital assets" },
        { id: 2, title: "Marketing and advertising collateral" },
        { id: 3, title: "Campaign visuals and storytelling" },
        { id: 4, title: "Brand consistency across all channels" },
    ]

    const ProcessCards = [
        {
            id: 1,
            title: "Discover",
            desc: "Understand your brand goals, campaigns, and communication needs thoroughly.",
            img: <Discovery />,
            digit_width: 19,
        },
        {
            id: 2,
            title: "Conceptualize",
            desc: "Develop design ideas and visual directions that align with campaign strategy seamlessly.",
            img: <Analyze />,
            digit_width: 36,
        },
        {
            id: 3,
            title: "Design",
            desc: "Create high-quality visuals optimized for digital and print performance efficiently.",
            img: <Design />,
            digit_width: 40,
        },
        {
            id: 4,
            title: "Deliver",
            desc: "Package assets with detailed brand application guidelines for consistent usage globally.",
            img: < Deliver />,
            digit_width: 46,
        },
    ]
    const WhyListing = [
        { title: "We Translate Complex Ideas Into Clear Visuals", desc: "We simplify information through visuals that are easy to understand and act on." },
        { title: "We Design Consistent Visual Messaging" },
        { title: "We Improve Engagement Through Design Clarity" }
    ]
    return (
        <>
            <ServicePage
                main_heading="Visual Communication Design"
                hero_desc="Deliver cohesive visual assets that amplify brand consistency. We design communication materials that speak your brand’s language clearly and effectively."
                sec_heading="Building Cohesive Visual Brand Communication"
                sec_desc="Our Visual Communication Design service ensures that every marketing material, social post, and campaign asset aligns with your brand identity. We help you communicate visually with clarity, consistency, and creativity."
                processHeading="A Strategic Process That Builds Strong Foundations"
                whyHeading="Hire Visual Communication Designers for Long-Term Impact"
                StrategyListing={StrategyListing}
                processCards={ProcessCards}
                WhyListing={WhyListing}

            />
        </>
    )
}
