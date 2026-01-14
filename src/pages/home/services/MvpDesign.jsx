import { Design, Discovery, Prototype, Validation } from "../../../assets/svg";
import ServicePage from "../../../components/services/service-page/servicePage";

export default function MvpDesign() {

    const StrategyListing = [
        {
            id: 1,
            title: "Intuitive user flows and interactions"
        }
        , {
            id: 2,
            title: "Reduced development time and risk"
        },
        {
            id: 3,
            title: "Faster user feedback and validation"
        },
        {
            id: 4,
            title: "Strong foundation for future scaling"
        }
    ]

    const ProcessCards = [
        {
            id: 1,
            title: "Discovery",
            desc: "Understand goals, users, and problem scope",
            img: <Discovery />,
            digit_width: 19,
        },
        {
            id: 2,
            title: "Definition",
            desc: "Define core features and MVP requirements",
            img: <Design />,
            digit_width: 36,
        },
        {
            id: 3,
            title: "Design",
            desc: "Create intuitive flows and usable interfaces",
            img: <Prototype />,
            digit_width: 40,
        },
        {
            id: 4,
            title: "Validation",
            desc: "Prepare MVP for testing and real feedback",
            img: < Validation />,
            digit_width: 46,
        },
    ]

    const WhyListing = [
        { title: "Focus on Essentials", desc: "We design MVPs around what truly matters—no unnecessary features or complexity." },
        { title: "User-Centered Thinking" },
        { title: "Ready for Development" }
    ]

    return (
        <>
            <ServicePage
                main_heading="MVP Design"
                hero_desc="We help startups and teams design MVPs focused on core features to validate ideas quickly and deliver real user value."
                sec_heading="MVP Design Built for Speed and Clarity"
                sec_desc="Our MVP design services turn ideas into testable products by defining core features, intuitive flows, and a clear foundation for development."
                StrategyListing={StrategyListing}
                processHeading="Our MVP Design Process"
                processCards={ProcessCards}
                WhyListing={WhyListing}
                whyHeading="Why Choose Our MVP Design Services?"
            />
        </>
    )
}