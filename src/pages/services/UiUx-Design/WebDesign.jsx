
import { Discovery, Integrate, Validation, Design, Plan, Deliver } from "../../../assets/svg/index";
import ServicePage from "../../../components/services/service-page/servicePage";

export default function WebDesign() {
    const StrategyListing = [
        { id: 1, title: "Clear and intuitive website structure" },
        { id: 2, title: "Responsive design across all devices" },
        { id: 3, title: "Improved usability and navigation" },
        { id: 4, title: "Websites aligned with business objectives" },
    ]

    const ProcessCards = [
        {
            id: 1,
            title: "Discovery",
            desc: "Understand goals, audience, and website requirements",
            img: <Discovery />,
            digit_width: 19,
        },
        {
            id: 2,
            title: "Structure",
            desc: "Define sitemap, layout, and content hierarchy",
            img: <Plan />,
            digit_width: 40,
        },
        {
            id: 3,
            title: "Design",
            desc: "Create responsive, visually consistent website layouts",
            img: < Validation />,
            digit_width: 36,
        },
        {
            id: 4,
            title: "Refinement",
            desc: "Refine designs based on feedback and validation",
            img: <Deliver />,
            digit_width: 46,
        },
    ]
    const WhyListing = [
        { title: "User-Centered Design", desc: "We design websites around user needs, ensuring clarity, accessibility, and intuitive navigation." },
        { title: "Responsive by Default" },
        { title: "Business-Aligned Design" }
    ]
    return (
        <>
            <ServicePage
                main_heading="Web Design"
                hero_desc="We design modern, responsive websites that balance visual appeal with usability, performance, and business goals."
                sec_heading="Web Design Focused on Usability and Impact"
                sec_desc="We design websites that prioritize usability, clarity, and performance while supporting meaningful user actions and business outcomes."
                StrategyListing={StrategyListing}
                processHeading="Our Web Design Process Focused on Results"
                processCards={ProcessCards}
                whyHeading="Why Choose Our Web Design Services?"
                WhyListing={WhyListing}

            />
        </>
    )
}