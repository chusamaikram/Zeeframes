import Heading from "../../components/common/Sec-headings";
import ArrowLeft from "../../assets/svg/arrow-left.svg";
import ArrowRight from "../../assets/svg/arrow-right.svg";
import { Link } from "react-router-dom";
import RecentArticle from "../../assets/images/insight-img.png"



import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useRef, useState } from 'react';


const RecentBlog = ({ title, desc, path, className, img, readtime, date }) => {
    return (
        <>
            <Link to={path} aria-label="navigation to detail page" >
                <div className={`flex flex-col items-center max-w-[381] group backdrop-blur border border-white/20 rounded-2xl bg-white/8 ${className}`}>
                    <div className="overflow-hidden rounded-[16px_16px_0_0] ">
                        <img className=" w-full object-cover group-hover:scale-105 transition-all duration-300" src={img} alt="thumbnail" width={382} height={246} loading="lazy" />
                    </div>
                    <div className="p-6 w-full  ">
                        <div className="  flex flex-col items-start gap-3">
                            <h3 className="text-[19px] font-[Geologica] font-semibold leading-[normal] group-hover:text-[#F3FE00] ">{title}</h3>
                            <p className="text-base font-[Inter] text_gray_495 leading-[25px] line-clamp-2 ">{desc}</p>
                            <div className="flex items-center gap-2 font-[Inter] text_gray_495 text-[12px] mt-3">
                                <span >{readtime} min read</span>
                                <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
                                <time datetime={date}>{date}</time>
                            </div>
                        </div>
                    </div>
                </div>
            </Link >
        </>
    )
}

export default function RecentArticles() {
    const swiperRef = useRef(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const LatestInsight = [
        {
            id: 1,
            img: RecentArticle,
            title: "20+ GenAI UX patterns, examples and implementation tactics",
            desc: "A shared language for product teams to build usable, intelligent and safe GenAI",
            path: "/insights/insight-details",
            readtime: "7",
            date: "Jan 23, 2025",
        },
        {
            id: 2,
            img: RecentArticle,
            title: "20+ GenAI UX patterns, examples and implementation tactics",
            desc: "A shared language for product teams to build usable, intelligent and safe GenAI",
            path: "/insights/insight-details",
            readtime: "7",
            date: "Jan 23, 2025",
        },
        {
            id: 3,
            img: RecentArticle,
            title: "20+ GenAI UX patterns, examples and implementation tactics",
            desc: "A shared language for product teams to build usable, intelligent and safe GenAI",
            path: "/insights/insight-details",
            readtime: "7",
            date: "Jan 23, 2025",
        },
        {
            id: 4,
            img: RecentArticle,
            title: "20+ GenAI UX patterns, examples and implementation tactics",
            desc: "A shared language for product teams to build usable, intelligent and safe GenAI",
            path: "/insights/insight-details",
            readtime: "7",
            date: "Jan 23, 2025",
        },

    ]



    return (
        <>

            <section className="py-8 sm:py-[80px]">
                <div className="container">
                    <div className="mb-8 sm:mb-9 flex flex-col sm:flex-row items-start sm:items-center justify-between">
                        <Heading
                            className="items-start justify-start gap-3"
                            title="Latest insights"
                            secHeading="Our Recent Articles"
                        />
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => swiperRef.current?.slidePrev()}
                                disabled={isBeginning}
                                className={`h-[48px] w-[68px] rounded-full bg-[#F3FE00] flex items-center justify-center px-5 ${isBeginning ? "opacity-20 cursor-not-allowed" : ""
                                    }`}
                                aria-label="slider button"
                            >
                                <img src={ArrowLeft} alt="arrow-left" loading="lazy" />
                            </button>

                            <button
                                onClick={() => swiperRef.current?.slideNext()}
                                disabled={isEnd}
                                className={`h-[48px] w-[68px] rounded-full bg-[#F3FE00] flex items-center justify-center px-5 ${isEnd ? "opacity-20 cursor-not-allowed" : ""
                                    }`}
                                aria-label="slider button"
                            >
                                <img src={ArrowRight} alt="arrow-right" loading="lazy" />
                            </button>
                        </div>
                    </div>


                    <div className="overflow-hidden">
                        <Swiper
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            onSlideChange={(swiper) => {
                                setIsBeginning(swiper.isBeginning);
                                setIsEnd(swiper.isEnd);
                            }}
                            spaceBetween={25}
                            slidesPerView={1.1}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                        >
                            {LatestInsight.map((item) => (
                                <SwiperSlide key={item.id} className="rounded-2xl border-2 border-transparent hover:border-[#F3FE00] h-auto transition-colors duration-300 ">
                                    <RecentBlog
                                        title={item.title}
                                        desc={item.desc}
                                        path={item.path}
                                        img={item.img}
                                        readtime={item.readtime}
                                        date={item.date}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>






        </>
    )
}
