import { Design, Discovery, Prototype, Validation } from "../../../assets/svg";
import ServicePage from "../../../components/services/service-page/servicePage";

export default function BrandDesign() {

    const StrategyListing = [{
        id: 1,
        title: "Consistent visual communication"
    },
    {
        id: 2,
        title: "Strong brand differentiation"
    },
    {
        id: 3,
        title: "A scalable foundation for growth"
    },
    {
        id: 4,
        title: "Cohesive design across platforms"
    }
    ]

    const ProcessCards = [
        {
            id: 1,
            title: "Discover",
            desc: "Understand brand goals, audience, and positioning",
            img: <Discovery />,
            digit_width: 19,
        },
        {
            id: 2,
            title: "Direction",
            desc: "Define visual direction and creative foundations",
            img: <Design />,
            digit_width: 36,
        },
        {
            id: 3,
            title: "Design",
            desc: "Design brand visuals, assets, and key elements",
            img: <Prototype />,
            digit_width: 40,
        },
        {
            id: 4,
            title: "System",
            desc: "Build a consistent and scalable brand system",
            img: < Validation />,
            digit_width: 46,
        },
    ]

    const WhyListing = [
        { title: "Strategy-Driven Design", desc: "Our brand designs are rooted in strategy, ensuring visuals align with purpose and positioning." },
        { title: "Consistent Brand Systems" },
        { title: "Scalable by Design" }
    ]

    const ServicesGrid = [
        {
            title: "Brand Identity Design",
            desc: "Our team of expert UI UX designers has a proven track record of creating innovative design solutions that transform businesses across various industries and geographies.",
            path: "/services/brand-identity-design",
        },
        {
            title: "Brand Strategy & Positioning",
            desc: "Our team of expert UI UX designers has a proven track record of creating innovative design solutions that transform businesses across various industries and geographies.",
            path: "/services/brand-strategy-positioning"
        },
        {
            title: "Motion Design",
            desc: "Our team of expert UI UX designers has a proven track record of creating innovative design solutions that transform businesses across various industries and geographies.",
            path: "/services/motion-design"
        },
        {
            title: "Rebranding & Evolution",
            desc: "Our team of expert UI UX designers has a proven track record of creating innovative design solutions that transform businesses across various industries and geographies.",
            path: "/services/rebranding-evolution"
        },
        {
            title: "Visual Communication Design",
            desc: "Our team of expert UI UX designers has a proven track record of creating innovative design solutions that transform businesses across various industries and geographies.",
            path: "/services/visual-communication-design"
        },


    ]
    return (
        <>
            <ServicePage
                main_heading="Brand Design"
                hero_desc="Weak branding costs attention and trust. We create distinctive brand designs that stand out, build credibility, and drive action."
                sec_heading="Brand Design That Builds Recognition"
                sec_desc="Our brand design services create clear, consistent visual identities that reflect your values and support long-term growth."
                StrategyListing={StrategyListing}
                processHeading="A Structured Brand Design Process"
                processCards={ProcessCards}
                WhyListing={WhyListing}
                whyHeading="Why Choose Our Brand Design Services?"
                ShowCards={true}
                ServiceCardsheading="Brand Design Services"
                ServiceCarddesc="Our brand design services create clear, cohesive visual identities that make your brand recognizable, build trust, and support long-term growth."
                ServiceCards={ServicesGrid}
            />
        </>
    )
}