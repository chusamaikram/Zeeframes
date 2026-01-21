
import { RatingStar, GoodFirmsLogo, UpworkLogo, RatingClutch, } from "../../assets/svg";


export default function RatingsSection() {

    const RatingCards = [
        {
            id: 1,
            link: '#',
            reviewCount: 41,
            icon: <RatingClutch />,
            color: "#FF3D2E",
        },
        {
            id: 2,
            link: '#',
            reviewCount: 41,
            icon: <GoodFirmsLogo />,
            color: "#5591FF",
        },
        {
            id: 3,
            link: '#',
            reviewCount: 41,
            icon: <UpworkLogo />,
            color: "#6FDA44",
        },
    ]



    return (
        <>
            <section className=" bg-[#0D0D0D]  py-8 sm:py-[80px]">
                <div className="container">
                    <div className="flex flex-col sm:flex-row items-center justify-center  gap-6 sm:gap-18">
                        {RatingCards.map(card => (
                            <a className="max-w-full flex flex-col items-start gap-3" key={card.id} href={card.link} target="_blank" aria-label="ratings" >

                                <div className="flex items-center justify-between sm:justify-center gap-3">
                                    <p className="text-[#CACACA] text-base leading-[16px] font-[Inter]">Reviewed on</p>
                                    <div className="flex items-center gap-1">
                                        < RatingStar fill={card.color} />
                                        < RatingStar fill={card.color} />
                                        < RatingStar fill={card.color} />
                                        < RatingStar fill={card.color} />
                                        < RatingStar fill={card.color} />
                                    </div>

                                </div>
                                <div className="flex items-center gap-5">
                                    {card.icon}

                                    <span className="text-[#CACACA] text-base leading-[16px] font-[Inter]">{card.reviewCount} Reviews</span>
                                </div>

                            </a>

                        ))}
                    </div>

                    <div className=" max-w-[1030px] mx-auto mt-[70px] p-6 sm:p-8 bg-[#F3FE00] rounded-[12px] flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-17.5">
                        <div className="flex flex-col sm:flex-row items-center sm:gap-5 ">
                            <span className="text-[40px] font-[Inter] leading-none font-[800] text-black">224</span>
                            <span className="sm:max-w-[87px] text-base font-[Inter] leading-[24px] text-[#1F1F1F]"> Reviews on 3 platforms</span>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center sm:gap-4">
                            <div className="flex items-center gap-4">
                                <span className="text-[40px] font-[Inter] leading-none font-[800] text-black">4.9</span>
                                <div className="flex items-center gap-1">
                                    <RatingStar fill="#000" width="24" height="24" />
                                    <RatingStar fill="#000" width="24" height="24" />
                                    <RatingStar fill="#000" width="24" height="24" />
                                    <RatingStar fill="#000" width="24" height="24" />
                                    <RatingStar fill="#000" width="24" height="24" />
                                </div>
                            </div>
                            <span className=" text-base font-[Inter] leading-[24px] text-[#1F1F1F]">Average Rating</span>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}