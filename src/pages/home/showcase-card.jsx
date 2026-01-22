
import { Link } from "react-router-dom"
import { SmartMoney, forecast, effortless, ConnectBryond, style, SmartShipping } from "../../assets/images"
import { ArrowIconMini } from "../../assets/svg"


export default function ShowcaseCard() {

    const CardsData = [
        {
            id: 1,
            img: SmartMoney,
            title: "Empowering communities with financial solutions.",
            heading:"Bloom Money",
            path: "/work"
        },
        {
            id: 2,
            img: forecast,
            title: "The Platform for Content Creators",
            heading:"Alfan",
            path: "/work"
            
        },
        {
            id: 3,
            img: effortless,
            title: "The Best Place ToFind Productivity Tools",
            heading:"Earpoin",
            path: "/work"
        },
        {
            id: 4,
            img: ConnectBryond,
            title: "Wallet application to streamline digital transactions",
            heading:"Finnecta",
            path: "/work"
        },
        {
            id: 5,
            img: style,
            title: "Clearbit, a business intelligence platform",
            heading:"Trivo",
            path: "/work"
        },
        {
            id: 6,
            img: SmartShipping,
            title: "Fastgo’s scooter rental app to drive adoption",
            heading:"Fastgo",
            path: "/work"
        },
    ]
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 row-gap-12">
                {CardsData.map(item => (
                    <div key={item.id} className={`${item.id % 2 === 0 ? 'sm:mt-[120px]' : 'mt-0'}`} >
                        <div className="w-full flex flex-col items-start justify-center gap-6">
                            <div className="overflow-hidden">
                                <img className="max-w-full h-full object-cover rounded-6" src={item.img} alt={item.title} loading="lazy"
                                    width={600}
                                    height={685}
                                />
                            </div>

                            <Link to={item.path} className="flex items-center justify-between w-full">
                                <div>
                                    <span className="mb-2 text-sm font-normal ">{item.heading}</span>
                                    <h2 className="text-[28px] leading-[normal] font-semibold text-white font-[Geologica] ">{item.title}</h2>
                                </div>
                                <div className="w-6 h-6 rounded-full border border-[#B8B8B8] shrink-0 flex items-center justify-center">
                                    <ArrowIconMini />
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>


        </>
    )
}