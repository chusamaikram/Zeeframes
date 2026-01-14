
import {  ResearchIcon, ConsultingIcon, UiUxIcon, ArchitectureIcon, RoadmapingIcon } from "../../../assets/svg/service-dropdown-icons"
import CommonCard from "./service-card-style"
export default function NoCodeDevelopment() {

    const NocodeCards = [
        {
            id: 1,
            title: "Webflow Development",
            desc: "Build responsive, pixel-perfect websites with seamless no-code performance.",
            icon: <ConsultingIcon />,
            path: "/services/webflow-development"
        }, 
        {
            id: 2,
            title: "Framer Development",
            desc: "Create fast, interactive sites with motion and creative precision.",
            icon: <ResearchIcon />,
            path: "/services/framer-development"
        },
        {
            id: 3,
            title: "Figma Sites",
            desc: "Bring Figma designs to life with unmatched pixel-perfect accuracy.",
            icon: <RoadmapingIcon/>,
            path: "/services/figma-sites"
        },
        {
            id: 4,
            title: "Platform Maintenance & Support",
            desc: "Keep platforms stable with regular updates and performance care.",
            icon: <ArchitectureIcon />,
            path: "/services/plateform-maintenance-support"
        },
    ]
    return (
        <>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {NocodeCards.map(card => (
                    <li key={card.id}>
                        <CommonCard
                            heading={card.title}
                            desc={card.desc}
                            icon={card.icon}
                            path={card.path}
                        />
                    </li>

                ))}
            </ul>
        </>
    )
}