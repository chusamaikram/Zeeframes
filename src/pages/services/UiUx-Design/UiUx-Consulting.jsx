import ServicePage from "../../../components/services/service-page/servicePage";

import { Discovery, Analysis, Strategy, Validation } from "../../../assets/svg/index";

export default function UiUxConsulting() {
    const StrategyListing = [
        { id: 1, title: "Identifying usability and UX issues" },
        { id: 2, title: "Understanding user behavior and pain points" },
        { id: 3, title: "Improving user flows and navigation" },
        { id: 4, title: "Aligning UX decisions with business goals" },
        { id: 5, title: "Reducing design and development risks" },
    ]

    const ProcessCards = [
        {
            id: 1,
            title: "Review",
            desc: "Understand goals, challenges, and current product experience",
            img: <Discovery />,
            digit_width: 19,
        },
        {
            id: 2,
            title: "Analysis",
            desc: "Analyze user flows, interfaces, behaviors uncover friction",
            img: <Analysis />,
            digit_width: 36,
        },
        {
            id: 3,
            title: "Strategy",
            desc: "Provide clear UX direction and actionable steps",
            img: <Strategy />,
            digit_width: 40,
        },
        {
            id: 4,
            title: "Validation",
            desc: "Validate solutions and define practical implementation roadmap",
            img: < Validation />,
            digit_width: 46,
        },
    ]
    const WhyListing = [
        { title: "Research-Driven Decisions", desc: "Our recommendations are grounded in analysis and real user insights, ensuring informed decisions instead of assumptions." },
        { title: "Actionable UX Guidance" },
        { title: "Business-Focused Approach" }
    ]
    return (
        <>
            <ServicePage
                main_heading="UI UX Consulting"
                hero_desc="We help businesses identify usability issues, improve user flows, and make confident UX decisions through expert analysis."
                sec_heading="Clarity Before Design Through Research-Driven Insights"
                sec_desc="Our UI UX consulting focuses on understanding your product and users to uncover usability gaps, validate ideas, and define clear UX direction."
                StrategyListing={StrategyListing}
                processHeading="Our UI UX Consulting Process"
                processCards={ProcessCards}
                whyHeading="Why Choose Our UI UX Consulting Expert?"
                WhyListing={WhyListing}

            />
        </>
    )
}