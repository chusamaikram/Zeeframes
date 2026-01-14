import Heading from '../../../components/common/Sec-headings'
import ServiceCard from './service-cards'



export default function ServicesSection() {
    const ServiceCards = [
        {
            id: 1,
            heading: "FOR DIGITAL EXPERIENCES",
            title: "UX UI Design",
            path: "/services/ux-ui-design",
        },
        {
            id: 2,
            heading: "For Startups & Existing Companies",
            title: "Product Revamp",
            path: "/services/product-revamp",
        },
        {
            id: 3,
            heading: "FOR VISUAL STORYTELLERS",
            title: "Brand Design",
            path: "/services/brand-design",
        },
        {
            id: 4,
            heading: "FOR RAPID APP BUILDERS",
            title: "No Code Development",
            path: "/services/no-code-development",
        },
        {
            id: 5,
            heading: "FOR STARTUPS & FOUNDERS",
            title: "MVP Design",
            path: "/services/mvp-design",
        },
        {
            id: 6,
            heading: "Dedicated ux ui Team",
            title: "Team Extension",
            path: "/services/team-extension",
        },
    ]

    return (
        <>
            <section className=" py-8 sm:py-[80px]">
                <div className="container">
                    <div className='relative z-20 pt-0 sm:pt-[80px]'>
                        <Heading title="WE are great at" secHeading="OUR SERVICES" desc="Designs with Exceptional User Experiences" />
                    </div>
                    <div className="card-wrapper  grid grid-cols-1 lg:grid-cols-2 gap-x-8 mt-[64px]">
                        {ServiceCards.map((item) => (
                            <ServiceCard key={item.id}
                                heading={item.heading}
                                title={item.title}
                                path={item.path} />
                        ))}

                    </div>

                </div>

            </section>
        </>
    )
}