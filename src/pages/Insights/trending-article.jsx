import SearchInput from "./search-input";
import TrendingImg from "../../assets/images/trending-article.png"
import Heading from "../../components/common/Sec-headings";
import { Link } from "react-router-dom";



export default function TrendingArticle() {
    const TrendingInsight = [
        {
            id: 1,
            img: TrendingImg,
            title: "20+ GenAI UX patterns, examples and implementation tactics",
            desc: "A shared language for product teams to build usable, intelligent and safe GenAI experiences...",
            path: "#",
            readtime: "7",
            date: "Jan 23, 2025",
        },
        {
            id: 2,
            img: TrendingImg,
            title: "20+ GenAI UX patterns, examples and implementation tactics",
            desc: "A shared language for product teams to build usable, intelligent and safe GenAI experiences...",
            path: "#",
            readtime: "7",
            date: "Jan 23, 2025",
        },
        {
            id: 3,
            img: TrendingImg,
            title: "20+ GenAI UX patterns, examples and implementation tactics",
            desc: "A shared language for product teams to build usable, intelligent and safe GenAI experiences...",
            path: "#",
            readtime: "7",
            date: "Jan 23, 2025",
        },
        {
            id: 4,
            img: TrendingImg,
            title: "20+ GenAI UX patterns, examples and implementation tactics",
            desc: "A shared language for product teams to build usable, intelligent and safe GenAI experiences...",
            path: "#",
            readtime: "7",
            date: "Jan 23, 2025",
        },
        {
            id: 5,
            img: TrendingImg,
            title: "20+ GenAI UX patterns, examples and implementation tactics",
            desc: "A shared language for product teams to build usable, intelligent and safe GenAI experiences...",
            path: "#",
            readtime: "7",
            date: "Jan 23, 2025",
        },

    ]

    const BlogCategory = [
        { title: "Design", path: "#" },
        { title: "Product", path: "#" },
        { title: "Software Development", path: "#" },
        { title: "Customer Success", path: "#" },
        { title: "Leadership", path: "#" },
        { title: "Management", path: "#" },
    ]
    return (
        <>
            <section className="blogs-section ">
                <div className="container">
                    <div className="relative grid grid-cols-1 sm:grid-cols-[510px_1fr] gap-[45px]">
                        <div>
                            <aside className="sm:sticky top-[100px] flex flex-col items-start gap-12">
                                <Heading className="items-start text-start justify-start gap-3"
                                    title="Popular insights"
                                    title_mb="mb-3"
                                    secHeading="Trending Articles You Need To Read"
                                    desc="Stay Ahead of the Curve and Dive Deep into the Must-Read Trending Articles that Keep You Informed and Inspired"
                                />
                                <div className="flex flex-col items-start gap-3 overflow-hidden w-full">
                                    <h3 className="text-base font-medium font-[Inter]">Blog categories</h3>
                                    < SearchInput
                                        placeholder="Search Any Insight"
                                        ShowIcon={false}
                                        Ff="font-[Inter]"
                                    />
                                    <div className="max-w-full overflow-x-auto">
                                        <ul className="flex flex-row sm:flex-col overflow-x-auto min-w-max items-center sm:items-start gap-1">
                                            {BlogCategory.map((item, index) => (
                                                <li key={index} className="py-1.5 px-3 flex items-center ">
                                                    <button className="text-sm cursor-pointer font-[Inter] text-[#BDBDBD] leading-[21px]">
                                                        {item.title}
                                                    </button>
                                                </li>
                                            ))}

                                        </ul>
                                    </div>
                                </div>
                            </aside>
                        </div>
                        <div className="grid gap-12 ">
                            {TrendingInsight.map(card => (
                                <Link key={card.id} to={card.path} aria-label="navigation to detail page" className="border-2 border-transparent hover:border-[#F3FE00] rounded-xl transition-colors duration-300 group">
                                    <div className={`grid grid-cols-1 sm:grid-cols-2  items-center rounded-[12px] sm:h-[218px] sm:h-auto border border-white/20 backdrop-blur `}>
                                        <div className="overflow-hidden rounded-[12px_12px_0_0] sm:rounded-[12px_0_0_12px]">
                                            <img className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300" src={card.img} alt="thumbnail" width={295} height={218} loading="lazy" />
                                        </div>
                                        <div className="h-full  p-4 sm:p-[16px_16px_16px_28px]  bg-white/8  rounded-[0_0_12px_12px] sm:rounded-[0_12px_12px_0] flex flex-col items-start gap-3">
                                            <h3 className="text-[19px] font-[Geologica] font-semibold leading-[normal] group-hover:text-[#F3FE00] transition-colors duration-300 ">{card.title}</h3>
                                            <p className="text-[14px] font-[Inter] leading-[21px] text_gray_495 line-clamp-2 ">{card.desc}</p>
                                            <div className="flex items-center gap-2 font-[Inter] text_gray_495 text-[12px] mt-3">
                                                <span >{card.readtime} min read</span>
                                                <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
                                                <time datetime={card.date}>{card.date}</time>
                                            </div>

                                        </div>
                                    </div>
                                </Link>
                            ))}
                            <p className="text-lg leading-[21px] text-white/50 font-[Plus_Jakarta_Sans]" >No More Results</p>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}