import { motion } from "framer-motion"
export default function ProcessCard(props) {
    return (
        <>
            <div className="relative flex flex-col items-start">
                <h3 className=" font-[Geologica] text-xl md:text-4xl font-semibold md:font-semibold leading-[normal] " >
                    <motion.span
                        initial={{ opacity: 0.5 }}
                        whileInView={{
                            opacity: 1
                        }}
                        transition={{
                            duration: 1.5
                        }}>
                        {props.heading}
                    </motion.span>
                </h3>
                <span className="text-lg text-white/60 font-bold font-['Inter'] " >{props.category}</span>
                <motion.p
                    initial={{ opacity: 0.5 }}
                    whileInView={{
                        opacity: 1
                    }}
                    transition={{
                        duration:2
                    }}
                    className="max-w-[553px] mt-2.5 text-base leading-[24px] text-white font-['Inter'] text-start ">{props.desc}
                </motion.p>
                <motion.span
                    className="absolute top-0 -left-12 text-base font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{
                        opacity: 1
                    }}
                    transition={{
                        duration: 2
                    }}
                >
                    {props.id}
                </motion.span>
            </div>

        </>
    )
}