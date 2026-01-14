
import { Discovery, Build, Test, Validation } from "../../../assets/svg/index";
import ServicePage from "../../../components/services/service-page/servicePage";

export default function Prototyping() {
    const StrategyListing = [
        { id: 1, title: "Prototyping for concept validation" },
        { id: 2, title: "Real user testing" },
        { id: 3, title: "Feedback collection & iteration" },
        { id: 4, title: "Usability improvement insights" },
    ]

    const ProcessCards = [
        {
            id: 1,
            title: "Concept",
            desc: "Define prototype goals, interaction depth, and test objectives clearly.",
            img: <Discovery />,
            digit_width: 19,
        },
        {
            id: 2,
            title: "Build",
            desc: "Design high-fidelity prototypes for realistic testing scenarios.",
            img: <Build />,
            digit_width: 36,
        },
        {
            id: 3,
            title: "Test",
            desc: "Iterate and enhance the design based on verified test outcomes.",
            img: <Test />,
            digit_width: 40,
        },
        {
            id: 4,
            title: "Refine",
            desc: "Iterate and enhance the design based on verified test outcomes effectively.",
            img: < Validation />,
            digit_width: 46,
        },
    ]
    const WhyListing = [
        { title: "We Validate Ideas With Real Users", desc: "We test assumptions early using interactive prototypes and real user feedback." },
        { title: "We Identify Usability Issues Before Development" },
        { title: "We Support Confident Product Decisions" }
    ]
    return (
        <>
            <ServicePage
                main_heading="Prototyping & User Testing"
                hero_desc="Test ideas, validate fast, and design smarter. We turn concepts into interactive experiences validated by real users"
                sec_heading="From Idea to User-Validated Prototype"
                sec_desc="We help you move from assumptions to proof by turning design ideas into clickable, testable prototypes. Our testing ensures every interaction is purposeful and performance-driven."
                StrategyListing={StrategyListing}
                processHeading="A Strategic Process That Builds Strong Foundations"
                processCards={ProcessCards}
                whyHeading="Hire Prototyping Experts to Validate Product Experiences"
                WhyListing={WhyListing}

            />
        </>
    )
}