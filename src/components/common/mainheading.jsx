
export default function Mainheading({text, className}) {
    return (
        <>
        <h1 className={` sm:w-[700px] lg:w-[978px] text-center font-[Geologica] uppercase font-extrabold text-[36px]  sm:text-[42px] lg:text-[72px]  leading-[50px] sm:leading-[64px] lg:leading-[96px] ${className} `}>{text}</h1>
        </>
    )
}