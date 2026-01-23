import Button from "../../components/common/button";
import Mainheading from "../../components/common/mainheading";
import SearchInput from "./search-input";
import Elipse from "../../assets/images/ellipse-5.png"
import InsightsImg from "../../assets/images/insight-thumbnail.png"
import RecentArticles from "./recent-articles";
import ContactUs from "../home/contact-us";
import TrendingArticle from "./trending-article";
import useTitle from "../../components/common/page-title";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



export default function Insights() {

    useTitle("Insights | Zeeframes");


    const [recentArticles, setRecentArticles] = useState([]);
    const [trendingArticles, setTrendingArticles] = useState([]);

    useEffect(() => {
        if (recentArticles.length === 0) {
            fetch("/data/insights.json")
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    setRecentArticles(data.data.slice(0, 9));
                    setTrendingArticles(data.data.slice(9));
                })
                .catch(err => {
                    console.log(err);
                });
        }

    }, []);
    return (
        <>
            <section className="bg-[#030303] py-12 sm:py-[80px] ">

                <div className="container">
                    <div className='relative'>
                        <div className='absolute top-[75px] md:top-[163px] left-0 md:left-[117px] z-[2]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                                <path
                                    d="M0.0100075 33.0318C-0.0137919 33.16 0.00525768 33.289 0.0589005 33.4014C0.11667 33.5226 0.204905 33.6186 0.319485 33.6807C0.438587 33.7301 0.566746 33.754 0.703937 33.7523L7.48027 33.0694C11.1945 32.7105 14.932 33.1796 18.4538 34.4205C21.9715 35.6529 25.1791 37.6597 27.8265 40.2947L32.659 45.0631C32.7472 45.1591 32.866 45.2299 32.9941 45.2538C33.1309 45.2735 33.2598 45.2545 33.3809 45.1967C33.502 45.139 33.6066 45.0466 33.6687 44.9321C33.7139 44.8043 33.7291 44.6802 33.7314 44.5517L33.0676 37.7952C32.699 34.084 33.1498 30.3325 34.4021 26.8147C35.6289 23.2878 37.6255 20.0841 40.259 17.4369L45.0547 12.601C45.1506 12.5127 45.2173 12.3854 45.241 12.2572C45.2735 12.1249 45.2544 11.9959 45.188 11.8789C45.1303 11.7578 45.0379 11.6531 44.9233 11.591C44.8042 11.5416 44.6761 11.5177 44.543 11.5281L37.7626 12.2023C34.0528 12.5484 30.3066 12.0835 26.789 10.8512C23.2713 9.61883 20.0678 7.62071 17.4204 4.98565L12.5797 0.199932C12.4914 0.103951 12.3728 0.0331236 12.2446 0.00927674C12.1165 -0.0145701 11.9789 0.0085762 11.8578 0.0663217C11.7367 0.124066 11.6321 0.21641 11.57 0.331C11.5207 0.450118 11.4968 0.578283 11.5072 0.711386L12.1876 7.50249C12.5562 11.2137 12.0926 14.9607 10.8489 18.4744C9.62219 22.0012 7.62561 25.2049 4.99207 27.8521L0.20052 32.6967C0.104592 32.7849 0.0338078 32.9036 0.0100075 33.0318Z"
                                    fill="#F3FE00" />
                            </svg>

                        </div>
                        <div className='relative  z-[10] flex flex-col items-center justify-center gap-3'>

                            <Mainheading className="max-w-[774px]" text="Stay Updated With Our insights" />
                            <p
                                className='text-base sm:text-lg text-center leading-[27px] max-w-[774px] font-[Inter] capitalize'>
                                Read our thoughts and insights on UI UX design</p>

                            <div className='mt-5'>
                                <SearchInput placeholder="Search Any Insights" />

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 sm:py-[80px] relative">
                <div className="absolute z-1 left-6 bottom-0">
                    <img src={Elipse} alt="ellipse" width={1440} height={180} loading="lazy" />
                </div>
                <div className="container">
                    {trendingArticles.length > 2 && (
                        <Link to={trendingArticles[1].slug}>
                            <div className="relative z-2 grid grid-cols-1 md:grid-cols-[588px_1fr] items-center gap-x-12 gap-y-8 " >

                                <img className="object-cover w-full h-full rounded-[12px]" src={trendingArticles[1].thumbnail} alt="Insight Thumbnail" width={588} height={406} loading="lazy" />

                                <div className="flex flex-col items-start gap-3">
                                    <h2 className="text-[28px] sm:text-[48px] font-[Geologica] leading-[normal] font-semibold w-full">{trendingArticles[1].title}</h2>
                                    <p className="text-sm sm:text-base leading-[21px] sm:leading-[30px] text_gray_495 font-[Inter]">{trendingArticles[1].detail}</p>
                                    <div className="mt-3 flex items-center text_gray_495 text-sm leading-[normal] gap-2">
                                        <span >{trendingArticles[1].readTime}</span>
                                        <span className="w-[6px] h-[6px] bg-white rounded-full"></span>
                                        <time dateTime="Jan 23, 2025">{trendingArticles[1].data}</time>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )}

                </div>
            </section>
            < RecentArticles LatestInsight={recentArticles} />
            < TrendingArticle TrendingInsight={trendingArticles} />
            < ContactUs />
        </>
    )
}