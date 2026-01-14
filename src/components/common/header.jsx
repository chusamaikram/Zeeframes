

import { Link, useLocation } from "react-router-dom";
import Button from "./button";
import logo from "../../assets/images/logo.svg";
import { useState, useEffect } from "react";
import dropdown from "../../assets/svg/dropdown.svg";
import Services from "../../pages/services";
import { Humbergur, ThemeIcon } from "../../assets/svg";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [mobileView, setMobileview] = useState(false);

  const toggleMobileView = () => {
    setMobileview((prev) => !prev);
  };



  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showServicesPanel, setShowServicesPanel] = useState(false);

  const pathname = location.pathname;
  const isServicesActive = pathname.startsWith("/services");

  const Navlinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "#" },
    { name: "Work", path: "/work" },
    { name: "Insights", path: "/insights" },
  ];

  useEffect(() => {
    setShowServicesPanel(false);
  }, [pathname]);

  return (
    <>
      <header className="sticky top-0 z-9999 py-[22px] max-h-[94px] bg-[#0D0D0D]">
        <div className="container">
          <nav className="flex items-center justify-between">
            <Link to="/" aria-label="zeeframes logo">
              <img src={logo} alt="logo" width={179} height={36} loading="eager" />
            </Link>

            <ul
              className={`py-12 lg:py-0 px-6 lg:px-0 flex flex-col gap-8 lg:gap-0 lg:flex-row items-center absolute lg:static left-0 top-[80px] w-full lg:w-auto min-h-screen md:min-h-auto bg-black lg:bg-transparent ${isMenuOpen
                ? "opacity-100 visible"
                : "opacity-0 invisible lg:visible lg:opacity-100"
                }`}
            >
              {Navlinks.map((link) => (
                <li key={link.name} className="relative">
                  {link.name === "Services" ? (
                    <div
                      className="service-link relative"
                      onMouseEnter={() => !isMobile && setShowServicesPanel(true)}
                      onMouseLeave={() => setShowServicesPanel(false)}
                    >
                      <Link
                        onClick={toggleMobileView }
                        to={link.path}
                        className={`relative text-lg font-normal flex items-center justify-center gap-2 px-4 py-2 font-[Inter] text-[18px] leading-[27px] ${isServicesActive ? "text-[#F3FE00]" : "text-white"}`}
                      >
                        Services
                        <img src={dropdown} alt="dropdownicon" width={14} height={14} />

                        <span
                          className={`absolute left-1/2 bottom-0 h-px transform -translate-x-1/2 bg-[#F3FE00] transition-all duration-500 ease-in-out
                                     ${isServicesActive ? "w-6 opacity-100" : "w-0 opacity-0"}`}></span>

                      </Link>
                      {mobileView && isMobile && (
                        <div className="w-full max-h-[70vh] overflow-y-auto mt-2 pb-4 scrollbar-width-[none] [&::-webkit-scrollbar]:hidden ">
                          <Services />

                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`relative px-4 py-2 font-[Inter] text-[18px] leading-[27px] ${pathname === link.path ||
                        (pathname.includes(link.path) && link.path !== "/")
                        ? "text-[#F3FE00]"
                        : "text-[#FFFFFF]"
                        }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                      <span className={`absolute left-1/2 bottom-0 h-[1px] transform -translate-x-1/2 transition-all duration-500 ease-in-out bg-[#F3FE00] ${pathname === link.path || (pathname.includes(link.path) && link.path !== '/') ? "w-6 opacity-100" : "w-0 opacity-0 "}`}></span>
                    </Link>
                  )}
                </li>
              ))}

              <Button
                onclick="() => setIsMenuOpen(false)"
                path="/contact"
                hovertext={" Let's talk"}
                defaulttext={"Work with us"}
                className="flex sm:hidden w-[190px]  text-black border border-[#f3fe00] bg-[#f3fe00] hover:bg-black  hover:text-[#f3fe00]"
              />
            </ul>

            <div className="flex items-center gap-3">
              {/* <button className=" p-1 bg-white rounded-[12px] sm:rounded-[16px] w-[38px] sm:w-[52px] h-[24px] sm:h-[32px] cursor-pointer relative" aria-label="theme toggler">
                <div className="w-[20px] sm:w-[26px] h-[20px] sm:h-[26px] bg-black rounded-full absolute left-[3px] top-[3px] flex items-center justify-center">
                  <ThemeIcon />
                </div>
              </button> */}
              <Button
                path="/contact" hovertext={" Let's talk"} defaulttext={"Work with us"}
                className="header-btn  max-w-[190px] border border-[#f3fe00] bg-[#f3fe00] transition-[background-color,border-color] duration-500 ease-in-out hover:bg-black text-black hover:text-[#f3fe00] "
              />
              <button className="block lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="humbergur " >
                <Humbergur />
              </button>

            </div>
          </nav>
        </div>

        {showServicesPanel && (
          <div
            className=" fixed left-0 top-[80px] overflow-y-auto  scrollbar-width-[none] [&::-webkit-scrollbar]:hidden  h-[calc(100vh-80px)] transition-all duration-300 ease w-full bg-[#0D0D0D] "
            onMouseEnter={() => !isMobile && setShowServicesPanel(true)}
            onMouseLeave={() => setShowServicesPanel(false)}
          >
            <Services />
          </div>
        )}


      </header>
    </>
  );
}

