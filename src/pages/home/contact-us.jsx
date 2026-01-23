import LinkdelnMini from "../../assets/svg/linkdelnmini"
import ali from "../../assets/svg/ali.svg"
import babar from "../../assets/svg/babar.svg"
import TrustPilot from "../../assets/svg/trustpilot.svg"
import UxUi from "../../assets/svg/ui-ux.svg"
import Award from "../../assets/svg/award-2023.svg"
import Behemoths from "../../assets/svg/behemoths.svg"
import { CheckIcon } from "../../assets/svg"
import * as Yup from "yup";
import InputField from "../../components/forminput"
import { Form, Formik } from "formik"

const SignupSchema = Yup.object({
    name: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    message: Yup.string().required("Message is required"),
});

export default function ContactUs({ border_color = "border-[#F3FE00]", radius = "rounded-full" }) {

    const Checks = ["You'll hear from us within one business day.",
        "Our team will gather your project details and put together a clear brief.",
        "We'll provide a tailored estimate and share a proposal for your review."]

    const Reviews = [
        {
            id: 1,
            logo: Behemoths,
            path: "https://techbehemoths.com/company/zeeframes",
            name: "techbehemoths",
            width: "109",
            height: "36"
        },
        {
            id: 2,
            logo: TrustPilot,
            path: "https://www.trustpilot.com/review/zeeframes.com",
            name: "trustpilot",
            width: "156",
            height: "36"
        },
        {
            id: 3,
            logo: UxUi,
            path: "https://selectedfirms.co/agency/zeeframes",
            name: "selectedfirms",
            width: "50",
            height: "36"
        },
        {
            id: 4,
            logo: Award,
            path: "https://techbehemoths.com/awards-2024/ux-ui-design/pakistan#view=64495",
            name: "techbehemoths",
            width: "43",
            height: "36"
        },
    ]


    return (
        <>
            <section className="py-8 sm:py-[80px] " id="contact" >
                <div className="container">
                    <div className="flex flex-col lg:flex-row items-start justify-center gap-8 sm:gap-16">
                        <div className="max-w-[636px] w-full flex flex-col items-start justify-center gap-8">
                            <span className="text-sm text-[#F3FE00] font-[Geologica] uppercase ">Contact us</span>
                            <div className="max-w-[534px] flex flex-col items-start gap-4">
                                <h2 className="text-[28px] sm:text-[40px] font-bold leading-[40px] font-[Geologica]">Lets work on what you care about!</h2>
                                <p className="text_gray_495 text-sm leading-[21px] font-[Inter]">Got a project in mind? From a full UI/UX refresh to a brand-new digital experience, we're ready to help. Let's turn your vision into reality</p>
                            </div>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-6">

                                <div className="flex items-center gap-4">
                                    <img src={ali} className=" rounded-full border border-[#454545]" width={48} height={48} loading="lazy" alt="founder" />
                                    <div className="flex flex-col items-start gap-1.5 ">
                                        <h3 className="flex items-center gap-2 text-base font-medium leading-[21px] font-[Inter]">
                                            Mohammad Ali
                                            <a href="https://www.linkedin.com/in/mohammad-ali-ui-ux-consultant/" target="blank" aria-label="social link"> <LinkdelnMini /></a>
                                        </h3>
                                        <span className="text_gray_495 text-sm leading-[21px] font-[Inter]">Director & Co-Founder</span>

                                    </div>

                                </div>
                                <span className="hidden sm:block  h-[15px] w-1px bg-[#454545]"></span>
                                <div className="flex items-center gap-4" >
                                    <img src={babar} className=" rounded-full border border-[#454545]" width={48} height={48} loading="lazy" alt="founder thumbnail" />
                                    <div className="flex flex-col items-start gap-1.5 ">
                                        <div className="flex items-center gap-2">
                                            <h3 className=" text-base font-medium leading-[21px] font-[Inter]"> Muhammad Babar</h3>
                                            <a href="https://www.linkedin.com/in/muhammadbabar-uxui/" target="blank" aria-label="social link"> <LinkdelnMini /> </a>
                                        </div>

                                        <span className="text_gray_495 text-sm leading-[21px] font-[Inter]">Director & Co-Founder</span>

                                    </div>

                                </div>

                            </div>
                            <ul className="flex flex-col items-start gap-3">
                                {Checks.map((items, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <CheckIcon />
                                        <p className="text-sm leading-[21px] text_gray_495 font-[Inter]">{items}</p>

                                    </li>
                                ))}

                            </ul>

                            <ul className=" mt-2 flex flex-wrap col-gap-6 items-center gap-6">
                                {Reviews.map(item => (
                                    <li key={item.id}>
                                        <a href={item.path} target="blank" aria-label={item.name}>
                                            <img src={item.logo} alt={item.name} width={item.width} height={item.height} />
                                        </a>

                                    </li>
                                ))}


                            </ul>

                        </div>
                        <Formik
                            initialValues={{
                                name: '',
                                email: '',
                                company: '',
                                phone: '',
                                message: '',
                            }}
                            validationSchema={SignupSchema}
                            onSubmit={(values, { setSubmitting, resetForm }) => {
                                console.log(values);

                                // Simulate API call or async operation
                                setTimeout(() => {
                                    alert("Form submitted successfully!");
                                    setSubmitting(false);
                                    resetForm();
                                }, 1500);
                            }}
                        >
                            {({
                                touched,
                                values,
                                errors,
                                handleChange,
                                handleBlur,
                                isSubmitting,
                            }) => (
                                <Form className="w-full grow sm:w-[540px]">
                                    <div className=" p-4 sm:p-6  flex flex-col items-start gap-7 bg-white/5 backdrop-blur-sm rounded-[24px] border border-[#3C3C3C] ">
                                        <div className="w-full">
                                            <InputField
                                                name="name"
                                                placeholder="Full Name*"
                                                value={values.name}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={errors.name}
                                                touched={touched.name}
                                            />

                                            {touched.name && errors.name && (
                                                <p className="text-red-500 opacity-80 text-xs mt-1 font-medium font-[Inter] leading-[normal]">
                                                    {errors.name}
                                                </p>
                                            )}
                                        </div>
                                        <div className="w-full">
                                            <InputField
                                                name="email"
                                                placeholder="Email*"
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={errors.email}
                                                touched={touched.email}
                                            />
                                            {touched.email && errors.email && (
                                                <p className="text-red-500 opacity-80 text-xs mt-1 font-medium font-[Inter] leading-[normal]">
                                                    {errors.email}
                                                </p>
                                            )}
                                        </div>

                                        <InputField
                                            name="company"
                                            placeholder="Company"
                                            value={values.company}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />

                                        <InputField
                                            name="phone"
                                            placeholder="Contact"
                                            value={values.phone}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />

                                        <div className="w-full">
                                            <textarea
                                                name="message"
                                                value={values.message}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={errors.message}
                                                touched={touched.message}
                                                className={`w-full p-4 bg-[#171717] border rounded-[8px] outline-none h-[117px] resize-none text-[#B9B9B9] text-sm font-medium font-[Inter]
                                                   ${errors.message && touched.message
                                                        ? "border-red-500"
                                                        : "border-[#373737] focus:border-[#F3FE00]"
                                                    } `}
                                                placeholder="Tell us about your project*" />
                                            {touched.message && errors.message && (
                                                <p className="text-red-500 opacity-80 text-xs mt-1 font-medium font-[Inter] leading-[normal]">
                                                    {errors.message}
                                                </p>
                                            )}
                                        </div>

                                        <button type="submit" disabled={isSubmitting}
                                            className={`cursor-pointer px-5.5 py-3.5 my-1 bg-linear-to-r hover:from-lime-300 hover:to-green-400 transition duration-300" border ${border_color} ${radius}  w-full flex items-center justify-center text-base font-semibold leading-[21px] text-white font-[Inter] ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}>  {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                                        </button>
                                        <div className="font-[Inter] flex flex-col items-start gap-2">
                                            <p className="text-sm text-[#F2F2F2]">Hate contact forms? Direct Contact.</p>
                                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                                <a className="flex items-center gap-1.5" href="https://wa.me/+14232493851" target="blank" aria-label="contact link">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.3789 2.27907 14.6926 2.78382 15.8877C3.06278 16.5481 3.20226 16.8784 3.21953 17.128C3.2368 17.3776 3.16334 17.6521 3.01642 18.2012L2 22L5.79877 20.9836C6.34788 20.8367 6.62244 20.7632 6.87202 20.7805C7.12161 20.7977 7.45185 20.9372 8.11235 21.2162C9.30745 21.7209 10.6211 22 12 22Z" stroke="#BDBDBD" strokeWidth="1.5" strokeLinejoin="round" />
                                                        <path d="M8.58815 12.3773L9.45909 11.2956C9.82616 10.8397 10.2799 10.4153 10.3155 9.80826C10.3244 9.65494 10.2166 8.96657 10.0008 7.58986C9.91601 7.04881 9.41086 7 8.97332 7C8.40314 7 8.11805 7 7.83495 7.12931C7.47714 7.29275 7.10979 7.75231 7.02917 8.13733C6.96539 8.44196 7.01279 8.65187 7.10759 9.07169C7.51023 10.8548 8.45481 12.6158 9.91948 14.0805C11.3842 15.5452 13.1452 16.4898 14.9283 16.8924C15.3481 16.9872 15.558 17.0346 15.8627 16.9708C16.2477 16.8902 16.7072 16.5229 16.8707 16.165C17 15.8819 17 15.5969 17 15.0267C17 14.5891 16.9512 14.084 16.4101 13.9992C15.0334 13.7834 14.3451 13.6756 14.1917 13.6845C13.5847 13.7201 13.1603 14.1738 12.7044 14.5409L11.6227 15.4118" stroke="#BDBDBD" strokeWidth="1.5" />
                                                    </svg>
                                                    <span className="text_gray_495 text-sm leading-[21px]">+14232493851</span>
                                                </a>
                                                <a className="flex items-center gap-1.5" href="mailto:businessmanager@zeeframes.com" target="blank" aria-label="contact-link">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M9.944 3.25H14.056C15.894 3.25 17.35 3.25 18.489 3.403C19.661 3.561 20.61 3.893 21.359 4.641C22.107 5.39 22.439 6.339 22.597 7.511C22.75 8.651 22.75 10.106 22.75 11.944V12.056C22.75 13.894 22.75 15.35 22.597 16.489C22.439 17.661 22.107 18.61 21.359 19.359C20.61 20.107 19.661 20.439 18.489 20.597C17.349 20.75 15.894 20.75 14.056 20.75H9.944C8.106 20.75 6.65 20.75 5.511 20.597C4.339 20.439 3.39 20.107 2.641 19.359C1.893 18.61 1.561 17.661 1.403 16.489C1.25 15.349 1.25 13.894 1.25 12.056V11.944C1.25 10.106 1.25 8.65 1.403 7.511C1.561 6.339 1.893 5.39 2.641 4.641C3.39 3.893 4.339 3.561 5.511 3.403C6.651 3.25 8.106 3.25 9.944 3.25ZM5.71 4.89C4.704 5.025 4.124 5.279 3.7 5.702C3.278 6.125 3.024 6.705 2.889 7.711C2.751 8.739 2.749 10.093 2.749 12C2.749 13.907 2.751 15.262 2.889 16.29C3.024 17.295 3.278 17.875 3.701 18.298C4.124 18.721 4.704 18.975 5.71 19.11C6.738 19.248 8.092 19.25 9.999 19.25H13.999C15.906 19.25 17.261 19.248 18.289 19.11C19.294 18.975 19.874 18.721 20.297 18.298C20.72 17.875 20.974 17.295 21.109 16.289C21.247 15.261 21.249 13.907 21.249 12C21.249 10.093 21.247 8.739 21.109 7.71C20.974 6.705 20.72 6.125 20.297 5.702C19.874 5.279 19.294 5.025 18.288 4.89C17.261 4.752 15.906 4.75 13.999 4.75H9.999C8.092 4.75 6.739 4.752 5.71 4.89ZM5.422 7.52C5.54934 7.36729 5.7321 7.27139 5.93013 7.25338C6.12815 7.23538 6.32521 7.29675 6.478 7.424L8.64 9.223C9.573 10 10.22 10.538 10.768 10.89C11.297 11.23 11.656 11.345 12.001 11.345C12.346 11.345 12.705 11.231 13.234 10.89C13.781 10.538 14.429 10 15.362 9.223L17.521 7.423C17.5967 7.35997 17.6841 7.31246 17.7782 7.2832C17.8722 7.25393 17.9711 7.24348 18.0692 7.25244C18.1673 7.2614 18.2627 7.2896 18.3499 7.33542C18.4371 7.38124 18.5145 7.44379 18.5775 7.5195C18.6405 7.59521 18.688 7.68259 18.7173 7.77665C18.7466 7.87072 18.757 7.96963 18.7481 8.06774C18.7391 8.16584 18.7109 8.26122 18.6651 8.34843C18.6193 8.43564 18.5567 8.51297 18.481 8.576L16.285 10.406C15.398 11.146 14.68 11.744 14.045 12.152C13.385 12.577 12.742 12.845 12.001 12.845C11.26 12.845 10.617 12.576 9.956 12.152C9.322 11.744 8.604 11.145 7.717 10.407L5.52 8.577C5.44424 8.51394 5.38165 8.43656 5.33582 8.34929C5.28998 8.26202 5.2618 8.16657 5.25289 8.0684C5.24397 7.97023 5.25449 7.87127 5.28385 7.77717C5.31322 7.68307 5.36084 7.59568 5.424 7.52" fill="#BDBDBD" />
                                                    </svg>
                                                    <span className="text_gray_495 text-sm leading-[21px]">businessmanager@zeeframes.com</span>
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </section>
        </>
    )
}