
import { Design, Discovery, Prototype, Validation } from "../../../assets/svg";
import ServicePage from "../../../components/services/service-page/servicePage";

export default function NoCodeDevelopment() {

    const StrategyListing = [
        { id: 1, title: "Easy content and feature updates" },
        { id: 2, title: "Reduced development costs and timelines" },
        { id: 3, title: "Faster product and website launches" },
        { id: 4, title: "Flexible and scalable no-code solutions" }]

    const ProcessCards = [
        {
            id: 1,
            title: "Planning",
            desc: "Define product goals, features, and requirements",
            img: <Discovery />,
            digit_width: 19,
        },
        {
            id: 2,
            title: "Design",
            desc: "Design structured, scalable no-code layouts",
            img: <Design />,
            digit_width: 36,
        },
        {
            id: 3,
            title: "Build",
            desc: "Develop using reliable no-code platforms",
            img: <Prototype />,
            digit_width: 40,
        },
        {
            id: 4,
            title: "Launch",
            desc: "Test, refine, and launch with confidence",
            img: < Validation />,
            digit_width: 46,
        },
    ]

    const WhyListing = [
        { title: "Faster Time to Market", desc: "We help you launch products quickly without sacrificing quality, usability, or long-term flexibility—so you can validate ideas and reach users sooner." },
        { title: "Scalable No-Code Solutions" },
        { title: "Easy to Maintain" }
    ]

    const ServicesGrid = [
        {
            title: "Webflow Development",
            desc: "Our team of expert UI UX designers has a proven track record of creating innovative design solutions that transform businesses across various industries and geographies.",
            path: "/services/webflow-development",
        },
        {
            title: "Framer Development",
            desc: "Our team of expert UI UX designers has a proven track record of creating innovative design solutions that transform businesses across various industries and geographies.",
            path: "/services/framer-development"
        },
        {
            title: "Figma Sites",
            desc: "Our team of expert UI UX designers has a proven track record of creating innovative design solutions that transform businesses across various industries and geographies.",
            path: "/services/figma-sites"
        },
        {
            title: "Platform Maintenance & Support",
            desc: "Our team of expert UI UX designers has a proven track record of creating innovative design solutions that transform businesses across various industries and geographies.",
            path: "/services/plateform-maintenance-support"
        },

    ]
    return (
        <>
            <ServicePage
                main_heading="No-Code Development"
                hero_desc="We design and build websites and digital products using modern no-code tools, enabling faster launches without sacrificing flexibility or performance."
                sec_heading="Fast Builds Without Compromise"
                sec_desc="Our no-code development services prioritize speed and adaptability, helping you launch faster, iterate easily, and scale without complexity."
                StrategyListing={StrategyListing}
                processHeading="Our No-Code Development Process"
                processCards={ProcessCards}
                WhyListing={WhyListing}
                whyHeading="Why Choose Our No-Code Development Services?"
                ShowCards={true}
                ServiceCardsheading="No-Code Development Services"
                ServiceCarddesc="Build and launch digital products faster using flexible, scalable no-code solutions designed to grow with your business."
                ServiceCards={ServicesGrid}
            />
        </>
    )
}