
import { Link, useParams } from "react-router-dom"
import Insight2 from "../../../assets/images/insight-detail2.png"
import ShareIcon from "../../../assets/svg/share-icon.svg"
import TrendingArticleImg from "../../../assets/images/trending-article.png"
import RecentArticles from "../recent-articles"
import ContactUs from "../../home/contact-us"
import useTitle from "../../../components/common/page-title"
import { useEffect, useState } from "react"

export default function InsightDetail() {
    useTitle("Insights | Zeeframes")

    const [article, setArticle] = useState(null);
    const [trendingArticles, setTrendingArticles] = useState([])
    const [recentArticles, setRecentArticles] = useState([])

    const { slug } = useParams();

    useEffect(() => {
        fetch("/data/insights.json")
            .then((res) => res.json())
            .then((data) => {
                setTrendingArticles(data.data.slice(0, 4))
                setRecentArticles(data.data.slice(4))
                const found = data.data.find((item) => item.slug === slug);
                setArticle(found);

            })
            .catch((err) => {
                console.error(err);
            });
    }, [slug]);


if (!article) {
  return <p>Loading article...</p>;
}

    return (
        <>
            <article>
                <section className="py-8 sm:py-25 bg-[linear-gradient(0deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0)_79.98%)] ">
                    <div className="container">
                        <div className="flex flex-col items-start">
                            <div className="text-[#CDCDCD]">
                                <p className=" text-base sm:text-lg font-[Inter] leading-[24px] mb-6">Posted by: Admin</p>
                                <h1 className="w-full text-white text-[32px] sm:text-[48px] leading-[44px] sm:leading-[58px] font-semibold font-[Geologica]">{article.title}</h1>
                                <p className="text-base mt-5 leading-[24px] font-[Inter] text_gray_495">{article.detail}</p>
                            </div>
                            <div className=" px-3 py-[19px] border-t border-b border-[#252525]  mt-8  flex items-center justify-between w-full ">
                                <div className=" flex items-center justify-start gap-2 text-[#CDCDCD] text-lg font-[Inter] leading-[normal] ">
                                    <span >{article.readTime}</span>
                                    <div className="w-[6px] h-[6px] bg-[#4D4C4C] rounded-full"></div>
                                    <time dateTime="Jan 23, 2025">{article.date}</time>
                                </div>
                                <button className=" cursor-pointer font-[Inter] flex items-center justify-center gap-1.5 text-[#CDCDCD]">
                                    <img src={ShareIcon} alt="icon" width={20} loading="lazy" />
                                    <span className="text-[12px]">Share</span>
                                </button>


                            </div>
                        </div>
                        <div className="pt-[66px] pb-8 sm:pb-25 w-full overflow-hidden">
                            <img className="max-w-full h-auto object-contain" src={article.detailThumbnail} alt={article.slug} width={1210} height={539} loading="lazy" />
                        </div>
                    </div>

                </section>
                <section className="py-8 sm:py-20">
                    <div className="container">
                        <div className="grid grid-cols-1 sm:grid-cols-[1fr_341px] gap-y-8 gap-x-10 items-start ">
                            <div className="flex flex-col items-start gap-2 font-[Plus_Jakarta_Sans] text-[#ECECEC]">
                                <h3 className="text-lg font-medium font-[Geologica] ">Let me paint you a picture of Junior Me.</h3>
                                <p className="text-base text-left text_gray_495 font-[Inter] leading-[24px]">I'd whip up a design, slap together a shiny mockup, and send it off to the developers, feeling pretty damn proud of myself. I'd whip up a design, slap together a shiny mockup, and send it off to the developers, feeling pretty damn proud of myself.</p>
                                <p className="text-base text-left text_gray_495 font-[Inter] leading-[24px] font-medium ">Junior Me thought, “Hey, if it looks good, we're good, right?</p>
                                <h3 className="text-[22px] font-medium font-[Geologica] ">Wrong. So very wrong.</h3>
                                <p className="text-base text-left text_gray_495 font-[Inter] leading-[24px]"> Fast-forward to now, and my deliverables are unrecognizable compared to those plain mockups of the past. I've learned — sometimes the hard way — that the job doesn't stop at making things look pretty.
                                    <br />
                                    <br />
                                    As a product designer and now product manager, I've realized that great deliverables anticipate problems, answer questions, and make the dev team's life a whole lot easier.
                                    <br />
                                    <br /> Here are five lessons I've learned about deliverables that Junior Me could've never imagined.
                                </p>
                                <p className="text-base text-left text_gray_495 font-[Inter] leading-[24px]"> Fast-forward to now, and my deliverables are unrecognizable compared to those plain mockups of the past. I've learned — sometimes the hard way — that the job doesn't stop at making things look pretty.
                                    <br />
                                    <br />
                                    As a product designer and now product manager, I've realized that great deliverables anticipate problems, answer questions, and make the dev team's life a whole lot easier.
                                    <br />
                                    <br />
                                    Here are five lessons I've learned about deliverables that Junior Me could've never imagined.
                                </p>
                                <div className=" my-8 overflow-hidden">
                                    <img className="w-full h-auto object-cover" src={Insight2} alt="insight thumbnail" width={900} height={448} loading="lazy" />

                                </div>
                                <h3 className="text-lg font-medium font-[Geologica] ">Best practices for working with big data tables</h3>
                                <p className="text-base text-left text_gray_495 font-[Inter] leading-[24px]">Designing tables for large datasets is a whole different story. Big data tables need optimized designs and smart interactions to make sure users can navigate and analyze data efficiently. Here are some best practices to keep in mind when working with big data tables:</p>
                                <h3 className="text-lg font-medium font-[geologica] mt-2  ">1. Enable advanced sorting and filtering</h3>
                                <p className="text-base text-left text_gray_495 font-[Inter] leading-[24px]  ">When you’re working with big data sets, it’s important to have effective ways to sift through all that information. Sorting and filtering are key tools for helping users find relevant data quickly.</p>
                                <ul className="flex flex-col items-start list-disc ml-4">
                                    <li className="text-base text-left text_gray_495 font-[Inter] leading-[24px]"> <strong className="font-semibold text-white">Multi-level sorting:</strong> Let users sort by multiple columns at the same time. For instance, users might want to sort first by department, then by revenue and then by date.
                                    </li>
                                    <li className="text-base text-left text_gray_495 font-[Inter] leading-[24px]"> <strong className="font-semibold text-white">Dynamic filters:</strong>  give users the option to filter as they type or select options. Filters should be simple to understand, easy to use and flexible, so users can easily customize their views of the data
                                    </li>

                                </ul>
                            </div>
                            <aside className="sticky top-[100px]">
                                <h2 className="text-[24px] font-semibold font-[Geologica]">Trending Blogs</h2>
                                <div className="mt-6 flex flex-col gap-5">
                                    {trendingArticles.map(card => (
                                        <Link key={card.slug} to={`/insights/${card.slug}`} className=" rounded-[16px] border-2 border-transparent hover:border-[#F3FE00] transition-colors duration-300 group bg-white/8 " aria-label="detail page navigation">
                                            <div className="border border-white/20 rounded-2xl grid grid-cols-[104px_1fr] p-1.5  gap-3 backdrop-blur max-w-[341px] ">
                                                <div className="overflow-hidden rounded-[12px]">
                                                    <img className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300 " src={card.thumbnail} alt="thumbnail" width={295} height={218} loading="lazy" />
                                                </div>
                                                <div className="flex flex-col items-start gap-3">
                                                    <span className="text-[12px] font-[Inter] leading-[normal]">ZeeFrames</span>
                                                    <h1 className="text-sm font-medium font-[Geologica] overflow-hidden line-clamp-2 group-hover:text-[#F3FE00] transition-colors duration-300">{card.title}</h1>
                                                    <div className="text-[12px] leading-[normal] flex items-center gap-2 text_gray_495 font-[Inter]">
                                                        <span >{card.readTime}</span>
                                                        <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
                                                        <time dateTime={card.date}>{card.date}</time>
                                                    </div>

                                                </div>
                                            </div>
                                        </Link>
                                    ))}


                                </div>
                            </aside>
                        </div>
                    </div>
                </section>
                <RecentArticles LatestInsight={recentArticles} />
                <ContactUs />
            </article>
        </>
    )
}