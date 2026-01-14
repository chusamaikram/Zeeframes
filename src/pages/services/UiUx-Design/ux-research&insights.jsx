
import { Plan, Collect, Analyze, Deliver } from "../../../assets/svg/index";
import ServicePage from "../../../components/services/service-page/servicePage";

export default function UxResearch() {
    const StrategyListing = [
        { id: 1, title: "User behavior & motivation" },
        { id: 2, title: "Problem discovery" },
        { id: 3, title: "Usability validation" },
        { id: 4, title: "Insight-based design direction" },
    ]

    const ProcessCards = [
        {
            id: 1,
            title: "Plan",
            desc: "Define clear objectives and target audience.",
            img: <Plan />,
            digit_width: 19,
        },
        {
            id: 2,
            title: "Collect",
            desc: "Gather relevant qualitative and quantitative data.",
            img: <Collect />,
            digit_width: 36,
        },
        {
            id: 3,
            title: "Analyze",
            desc: "Find actionable insights and emerging trends.",
            img: <Analyze />,
            digit_width: 40,
        },
        {
            id: 4,
            title: "Deliver",
            desc: "Present data-backed design recommendations.",
            img: < Deliver />,
            digit_width: 46,
        },
    ]
    const WhyListing = [
        { title: "We Base Every Decision on Proven Data", desc: "Design backed by real evidence ensures confidence and clarity in outcomes." },
        { title: "We Translate User Behavior Into Actionable Insight" },
        { title: "We Help You Build With Clarity and Focus" }
    ]
    return (
        <>
            <ServicePage
                main_heading="UX Research & Insights"
                hero_desc="Understand your users beyond assumptions. We uncover what drives real behavior through research and data."
                sec_heading="Turning user behavior into actionable insights"
                sec_desc="Our UX Research & Insights reveal patterns, motivations, and expectations that shape better design decisions. We provide data you can act on, not guess from."
                StrategyListing={StrategyListing}
                processHeading="A Strategic Process That Builds Strong Foundations"
                processCards={ProcessCards}
                whyHeading="Hire UX Researchers to Uncover User Needs and Behaviors"
                WhyListing={WhyListing}

            />
        </>
    )
}