
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DevelopmentIcon, BrandingIcon, DesignIcon, } from "../../assets/svg/service-dropdown-icons";
import ProductDesign from "../../components/services/service-tabs/ui-ux-design";
import BrandingSolutions from "../../components/services/service-tabs/branding-solution";
import NoCodeDevelopment from "../../components/services/service-tabs/no-code";

export default function Services() {
    const location = useLocation();
    const currentPath = location.pathname;


    const Sidebar = [
        {
            id: 1,
            title: "UI UX Design",
            icon: <DesignIcon />,
            keywords: [
                "/services/ux-ui-consulting",
                "/services/ux-research-insights",
                "/services/experience-architecture",
                "/services/design-system-guidelines",
                "/services/prototyping-user-testing",
                "/services/ux-audit-product-optimization",
                "/services/web-design",
                "/services/mobile-design",
            ],
        },
        {
            id: 2,
            title: "Brand Design",
            icon: <BrandingIcon />,
            keywords: [
                "/services/brand-identity-design",
                "/services/brand-strategy-positioning",
                "/services/motion-design",
                "/services/visual-communication-design",
                "/services/rebranding-evolution",
            ],
        },
        {
            id: 3,
            title: "No-Code Development",
            icon: <DevelopmentIcon />,
            keywords: [
                "/services/webflow-development",
                "/services/framer-development",
                "/services/bubble-app-development",
                "/services/figma-sites",
                "/services/plateform-maintenance-support",
            ],
        },
    ];

    const [activeTab, setActiveTab] = useState(1);

    useEffect(() => {

        const matchedCategory = Sidebar.find((cat) =>
            cat.keywords?.some((kw) => currentPath.includes(kw))
        );

        if (matchedCategory) {
            setActiveTab(matchedCategory.id);
        } else {

            setActiveTab(Sidebar[0].id);
        }
    }, [currentPath]);

    return (
        <section className="pt-10 pb-25 bg-transparent md:bg-[#090909]">
            <div className="container">
                <div className=" grid grid-cols-1 sm:grid-cols-[280px_1fr] gap-6 items-start">


                    <aside className="w-full sm:w-[279px] sm:sticky top-[40px] flex flex-col items-start bg-transparent md:bg-[#090909]">
                        {Sidebar.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`w-full p-4 rounded-[8px] flex items-center gap-3 transition-all
                                             ${activeTab === item.id
                                        ? "bg-[#F3FE0014] text-white"
                                        : "text-white hover:bg-[#F3FE0014]"
                                    }`}
                                aria-label="service tab"
                            >
                                <span>{item.icon}</span>
                                <p className="text-base leading-[24px] font-semibold font-[Inter]">
                                    {item.title}
                                </p>
                            </button>
                        ))}
                    </aside>

                    {activeTab === 1 && <ProductDesign />}
                    {activeTab === 2 && <BrandingSolutions />}
                    {activeTab === 3 && <NoCodeDevelopment />}
                </div>
            </div>
        </section>
    );
}

