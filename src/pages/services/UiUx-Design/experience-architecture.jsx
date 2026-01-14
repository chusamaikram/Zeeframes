
import { Define, Map, Structure, Validation } from "../../../assets/svg/index";
import ServicePage from "../../../components/services/service-page/servicePage";

export default function Architecture() {
    const StrategyListing = [
        { id: 1, title: "Information hierarchy" },
        { id: 2, title: "Navigation clarity" },
        { id: 3, title: "Flow optimization" },
        { id: 4, title: "Wireframe logic" },
    ]

    const ProcessCards = [
        {
            id: 1,
            title: "Define",
            desc: "Gather requirements, objectives, and user expectations carefully.",
            img: <Define />,
            digit_width: 19,
        },
        {
            id: 2,
            title: "Map",
            desc: "Sketch visual paths and logical flows across different interactions.",
            img: <Map />,
            digit_width: 36,
        },
        {
            id: 3,
            title: "Structure",
            desc: "Organize navigation hierarchy, user goals, and screen layouts clearly.",
            img: <Structure />,
            digit_width: 40,
        },
        {
            id: 4,
            title: "Validate",
            desc: "Test flow usability and adjust for better engagement efficiency.",
            img: < Validation />,
            digit_width: 46,
        },
    ]
    const WhyListing = [
        { title: "We Design Clear Experience Structures", desc: "We define how users move through products by structuring flows, journeys, and interaction patterns." },
        { title: "We Bring Order to Complex Experiences" },
        { title: "We Create Consistent Experience Frameworks" }
    ]
    return (
        <>
            <ServicePage
                main_heading="Experience Architecture"
                hero_desc="Simplify complexity through structured design logic. We create intuitive user flows that make navigation effortless."
                sec_heading="Blueprinting Seamless Digital Experiences"
                sec_desc="We create structures that make digital experiences intuitive and fluid, reducing friction and improving usability across all screens."
                StrategyListing={StrategyListing}
                processHeading="A Strategic Process That Builds Strong Foundations"
                processCards={ProcessCards}
                whyHeading="Hire Experience Architecture Experts to Design Clear Journeys"
                WhyListing={WhyListing}

            />
        </>
    )
}