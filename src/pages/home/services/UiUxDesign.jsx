import { Design, Discovery, Prototype, Validation } from "../../../assets/svg";
import ServicePage from "../../../components/services/service-page/servicePage";

export default function UiUxdesign() {

    const StrategyListing = [{ id: 1, title: "Intuitive user flows" }, { id: 3, title: "Scalable visual systems" }, { id: 3, title: "Business-aligned experiences" }, { id: 4, title: "Improved engagement and conversions" }]

    const ProcessCards = [
        {
            id: 1,
            title: "Discover",
            desc: "Define design vision, audience expectations, and success clearly.",
            img: <Discovery />,
            digit_width: 19,
        },
        {
            id: 2,
            title: "Design",
            desc: "Create elegant, structured layouts with clear usability throughout.",
            img: <Design />,
            digit_width: 36,
        },
        {
            id: 3,
            title: "Prototype",
            desc: "Build interactive experiences that demonstrate flow and engagement.",
            img: <Prototype />,
            digit_width: 40,
        },
        {
            id: 4,
            title: "Refine",
            desc: "Review, validate, and enhance every detail for flawless visual experience.",
            img: < Validation />,
            digit_width: 46,
        },
    ]

    const WhyListing = [
        { title: "We Improve Usability to Reduce Drop-Off", desc: "We fix confusing flows and unclear UI so users move smoothly, complete actions, and stay engaged." },
        { title: "We Design Interfaces That Convert Better" },
        { title: "We Build Design Systems That Keep Products Consistent" }
    ]

    const ServicesGrid = [
        {
            title: "UI UX Consulting",
            desc: "Our team of expert UI UX designers has a proven track record of creating innovative design solutions that transform businesses across various industries and geographies.",
            path: "/services/ui-ux-consulting"
        },
        {
            title: "UX Audit & Product Optimization",
            desc: "Our team of expert UI UX designers has a proven track record of creating innovative design solutions that transform businesses across various industries and geographies.",
            path: "/services/ux-audit-product-optimization"
        },
        {
            title: "UX Research & Insights",
            desc: "Our team of expert UI UX designers has a proven track record of creating innovative design solutions that transform businesses across various industries and geographies.",
            path: "/services/ux-research-insights"
        },
        {
            title: "Experience Architecture",
            desc: "Our team of expert UI UX designers has a proven track record of creating innovative design solutions that transform businesses across various industries and geographies.",
            path: "/services/experience-architecture"
        },
        {
            title: "Design Systems & Guidelines",
            desc: "Our team of expert UI UX designers has a proven track record of creating innovative design solutions that transform businesses across various industries and geographies.",
            path: "/services/design-system-guidelines"
        },
        {
            title: "Prototyping & User Testing",
            desc: "Our team of expert UI UX designers has a proven track record of creating innovative design solutions that transform businesses across various industries and geographies.",
            path: "/services/prototyping-user-testing"
        },
        {
            title: "Web Design",
            desc: "Our team of expert UI UX designers has a proven track record of creating innovative design solutions that transform businesses across various industries and geographies.",
            path: "/services/web-design"
        },
        {
            title: "Mobile Design",
            desc: "Our team of expert UI UX designers has a proven track record of creating innovative design solutions that transform businesses across various industries and geographies.",
            path: "/services/mobile-design"
        },


    ]
    return (
        <>
            <ServicePage
                main_heading="UI UX Design"
                hero_desc="We help businesses design purposeful UI UX experiences through research-driven strategy and thoughtful design execution."
                sec_heading="Transform Ideas into Better User Experiences"
                sec_desc="We create stunning and usable interfaces that delight users while achieving measurable results for your business."
                StrategyListing={StrategyListing}
                processHeading="Our Strategic UI UX Design Process"
                processCards={ProcessCards}
                WhyListing={WhyListing}
                whyHeading="How Our UI UX Design Experts Improve User Conversion"
                ShowCards={true}
                ServiceCardsheading="UI UX Design Services"
                ServiceCarddesc="Our brand design services create clear, cohesive visual identities that make your brand recognizable, build trust, and support long-term growth."
                ServiceCards={ServicesGrid}
            />
        </>
    )
}