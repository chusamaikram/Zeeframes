import { Design, Discovery, Prototype, Validation } from "../../../assets/svg";
import ServicePage from "../../../components/services/service-page/servicePage";

export default function TeamExtension() {

    const StrategyListing = [{ id: 1, title: "Consistent delivery and quality" }, { id: 2, title: "Access to skilled designers and developers" }, { id: 3, title: "Seamless team collaboration" }, { id: 4, title: "Reduced hiring and onboarding overhead" }]

    const ProcessCards = [
        {
            id: 1,
            title: "Understanding",
            desc: "Understand your needs, roles, and project scope",
            img: <Discovery />,
            digit_width: 19,
        },
        {
            id: 2,
            title: "Matching",
            desc: "Match you with the right skilled professionals",
            img: <Design />,
            digit_width: 36,
        },
        {
            id: 3,
            title: "Integration",
            desc: "Integrate seamlessly into your team and workflow",
            img: <Prototype />,
            digit_width: 40,
        },
        {
            id: 4,
            title: "Scaling",
            desc: "Scale team size based on project needs",
            img: < Validation />,
            digit_width: 46,
        },
    ]

    const WhyListing = [
        { title: "Skilled Professionals", desc: "Work with experienced designers and developers who deliver high-quality results from day one." },
        { title: "Seamless Collaboration" },
        { title: "Flexible Engagement" }
    ]

    return (
        <>
            <ServicePage
                main_heading="Team Extension"
                hero_desc="We help businesses scale faster by providing dedicated designers and developers who seamlessly integrate into your team and workflow."
                sec_heading="Scale Your Team Without Hiring Hassle"
                sec_desc="Our team extension services give you access to experienced professionals to scale capacity, speed delivery, and maintain quality without full-time hiring."
                StrategyListing={StrategyListing}
                processHeading="Our Team Extension Process"
                processCards={ProcessCards}
                WhyListing={WhyListing}
                whyHeading="Why Choose Our Team Extension Services?"
            />
        </>
    )
}