import { Define, Deliver, Design, Discovery } from "../../../assets/svg";
import ServicePage from "../../../components/services/service-page/servicePage";


export default function BrandIdentity() {
    const StrategyListing = [
        { id: 1, title: "Logo and mark design" },
        { id: 2, title: "Color palette and typography" },
        { id: 3, title: "Visual consistency across platforms" },
        { id: 4, title: "Brand personality and mood creation" },
    ]

    const ProcessCards = [
        {
            id: 1,
            title: "Discover",
            desc: "Understand brand values, audience insights, and goals deeply for authenticity.",
            img: <Discovery />,
            digit_width: 19,
        },
        {
            id: 2,
            title: "Define",
            desc: "Establish creative tone, mood, and positioning direction clearly across channels.",
            img: <Define />,
            digit_width: 36,
        },
        {
            id: 3,
            title: "Design",
            desc: "Craft cohesive logo systems and visuals that express brand essence beautifully.",
            img: <Design />,
            digit_width: 40,
        },
        {
            id: 4,
            title: "Deliver",
            desc: "Document every asset in a clear, easy-to-use and comprehensive brand guide for consistency.",
            img: < Deliver />,
            digit_width: 46,
        },
    ]
    const WhyListing = [
        { title: "Strategic Foundation", desc: "We design brand identities grounded in clear strategy, ensuring every visual decision supports your brand’s purpose, positioning, and long-term goals." },
        { title: "Consistent Systems" },
        { title: "Scalable Design" }
    ]
    return (
        <>
            <ServicePage
                main_heading="Brand Identity Design"
                hero_desc="We design brand identities that inspire recognition and trust. Your brand’s visual DNA, shaped for consistency, clarity, and timeless appeal."
                sec_heading=" Identity That Defines Your Brand"
                sec_desc="Our Brand Identity Design service builds the visual and emotional foundation of your brand. We craft logos, typography, and color systems that capture who you are and how you want to be remembered."
                processHeading="Our Brand Identity Design Process"
                whyHeading="Why Choose Our Brand Identity Design Services?"
                StrategyListing={StrategyListing}
                processCards={ProcessCards}
                WhyListing={WhyListing}

            />
        </>
    )
}