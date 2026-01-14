

import { RoadmapingIcon, ResearchIcon, ConsultingIcon, UiUxIcon, ArchitectureIcon, MotionDesignIcon } from "../../../assets/svg/service-dropdown-icons"
import CommonCard from "./service-card-style"
export default function BrandingSolutions() {

    const BrandingCards = [
        {
            id: 1,
            title: "Brand Identity Design",
            desc: "Craft brand visuals — logo, typography, and color ,reflecting your purpose.",
            path: "/services/brand-identity-design",
            icon: <ConsultingIcon />
        },
        {
            id: 2,
            title: "Brand Strategy & Positioning",
            desc: "Define how your brand communicates and connects across touchpoints.",
            path: "/services/brand-strategy-positioning",
            icon: <ResearchIcon />
        },
        {
            id: 3,
            title: "Motion Design ",
            desc: "Purposeful motion that guides attention and enhances brand communication.",
            path: "/services/motion-design",
            icon: <MotionDesignIcon />
        },
        {
            id: 4,
            title: "Visual Communication Design",
            desc: "Deliver cohesive assets from social to campaigns , reinforcing consistency.",
            path: "/services/visual-communication-design",
            icon: <UiUxIcon />
        },
        {
            id: 5,
            title: "Rebranding & Evolution",
            desc: "Transform existing identities into modern, future-ready brand systems.",
            path: "/services/rebranding-evolution",
            icon: <ArchitectureIcon />
        },
    ]
    return (
        <>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {BrandingCards.map(card=>(
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