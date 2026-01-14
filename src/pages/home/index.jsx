import gradientbg from "../../assets/images/gradient-bg.webp"
import SpinningStar from "../../assets/images/spining-star.gif"
import WtspBtn from "../../components/WtspBtn";
import CursorGlow from "../../components/common/blowanimation";
import Button from "../../components/common/button";
import ContactUs from "./contact-us";
import FaqSection from "./faq-section";
import HeroSection from "./hero";
import InsightsSection from "./insights";
import ProcessSection from "./process";
import ServicesSection from "./services/services";
import Showcase from "./showcase";
import VideoSection from "./video-section";
export default function Home() {
    return (
        <>
            <CursorGlow />
            <HeroSection />
            <VideoSection />
            <ServicesSection />
            <ProcessSection />
            <Showcase />

            <section className="relative z-20 bg-cover bg-center pt-8 sm:pt-[100px] pb-8 sm:pb-[110px]"
                style={{ backgroundImage: `url(${gradientbg})` }}>
                <div className="container">
                    <div className="flex flex-wrap md:flex-nowrap items-center justify-between  ">
                        <div className=" max-w-[717px] flex flex-col items-start  justify-between gap-4">
                            <h2 className="text-[28px] sm:text-[70px] font-bold leading-[42px] sm:leading-[85px] font-[Geologica]">Design That Thinks. Interfaces That Feel.</h2>
                            <p className="max-w-[665px] text-base sm:text-lg text-[#d5d5d5] leading-[25px] sm:leading-[30px] font-[Inter]">At ZeeFrames, we craft AI-ready design systems for modern software responsive, scalable, and human-centered.</p>
                            <Button
                                path="/contact"
                                className="mt-5 bg-[#F3FE00] text-[#000] hover:bg-transparent hover:text-[#F3FE00] border border-[#F3FE00] "
                                hovertext="Let's Talk"
                                defaulttext="See AI in Action"
                                showIcon={true}
                            />
                        </div>
                        <div className="">
                            <img className="h-auto object-contain" src={SpinningStar} alt="Spinning star"
                                width={430}
                                height={430}
                                loading="lazy" />
                        </div>
                    </div>
                </div>

            </section>

            <FaqSection />
            <InsightsSection />
            <ContactUs />

            <WtspBtn />


            {/* <div className="floating_btn">
                <a target="_blank" href="https://wa.me/" aria-label="whatsapp link">
                    <div className="contact_icon">
                        <i className="fa fa-whatsapp my-float"></i>
                    </div>
                </a>
            </div>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" aria-label=" whatsapp btn style"></link> */}


        </>
    )
}