import { Link } from "react-router-dom";
import Button from "../../components/common/button";
import { useEffect, useState } from "react";

export default function InsightsSection() {
    const [homeinsights, setHomeInsights] = useState([])

    useEffect(() => {
        if (homeinsights.length === 0) {
            fetch(`/data/insights.json`)
                .then(res => res.json())
                .then(data => {
                    setHomeInsights(data.data.slice(2, 5))
                })
        }
    }, [])

    return (

        <>
            <section className="above-glow py-8 sm:py-[80px]">
                <div className="container">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 sm:gap-auto">
                        <div className="max-w-[510px] flex flex-col items-center sm:items-start justify-start gap-4 sm:gap-8">
                            <span className="text-sm text-[#F3FE00] font-[Inter] uppercase">Our Insights</span>
                            <h2 className="text-[28px] sm:text-[40px] text-center sm:text-start font-bold leading-[40px] sm:leading-[44px] font-[Geologica]">Insights That Inspire Vision Forward</h2>
                        </div>
                        <div>

                            <Button
                                defaulttext="Explore More"
                                hovertext="See more "
                                className="bg-white text-black hover:bg-black hover:text-[#F3FE00] border hover:border-[#F3FE00]"
                                showicon={true}
                                path="/insights"
                            />
                        </div>
                    </div>
                    <div className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 items-start">
                        {homeinsights.map(item => (
                            <Link to={`/insights/${item.slug}`} key={item.slug} className="border-2 border-transparent hover:border-[#F3FE00] transition-colors duration-300 rounded-[12px]">
                                <div
                                    className="
                                            bg-[#121212] group
                                            border-1 border-[#2D2D2D] rounded-[12px]
                                            overflow-hidden flex flex-col items-center justify-center
                                            "
                                    aria-label="insight link"  >
                                    <div className="h-[227px] overflow-hidden w-full">
                                        <img
                                            className="h-full w-full object-cover group-hover:scale-105 transition-all duration-400 "
                                            src={item.thumbnail}
                                            alt={item.slug}
                                            width={392}
                                            height={227}
                                            loading="lazy"
                                        />
                                    </div>

                                    <div className="h-full p-6 flex flex-col items-start">
                                        <div className="flex flex-col items-start gap-2">
                                            <h3 className="text-[20px] sm:text-[24px] font-[Geologica] leading-[normal] line-clamp-3 font-medium text-white group-hover:text-[#F3FE00]">
                                                {item.title}
                                            </h3>
                                            <p className="text-base line-clamp-2 text_gray_495 leading-[24px]">
                                                {item.detail}
                                            </p>
                                        </div>

                                        <div className="flex pt-5 items-center gap-2 text_gray_495 text-[12px] font-[Inter]">
                                            <span>{item.readTime}</span>
                                            <span className="w-[6px] h-[6px] bg-white rounded-full"></span>
                                            <time dateTime={item.date}>{item.date}</time>
                                        </div>
                                    </div>
                                </div>
                            </Link>


                        ))}

                    </div>
                </div>
            </section>

        </>
    )
}