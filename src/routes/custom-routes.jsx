import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingLayout from "../layouts/landing-layout";
import Home from "../pages/home/index";
import AuthLayout from "../layouts/auth-layout";
import Login from "../pages/auth/loginpage";
import AboutUs from "../pages/about";
import Insights from "../pages/Insights";
import InsightDetail from "../pages/Insights/insight-detail/insight-detail";
import Work from "../pages/work";
import ContactPage from "../pages/contact";

        {/*Ui Ux Design Imports  */ }

import UiUxConsulting from "../pages/services/UiUx-Design/UiUx-Consulting";
import WebDesign from "../pages/services/UiUx-Design/WebDesign";
import MobileDesign from "../pages/services/UiUx-Design/MobileDesign";
import UxResearch from "../pages/services/UiUx-Design/ux-research&insights";
import Architecture from "../pages/services/UiUx-Design/experience-architecture";
import DesignSystem from "../pages/services/UiUx-Design/design-system";
import Prototyping from "../pages/services/UiUx-Design/prototyping";
import UxAudit from "../pages/services/UiUx-Design/ux-audit";

        {/*Brand Design Imports */ }

import BrandIdentity from "../pages/services/brand-design/brand-identity-solution";
import BrandStrategy from "../pages/services/brand-design/brand-strategy-positioning";
import MotionDesign from "../pages/services/brand-design/motion-design";
import VisualCommunication from "../pages/services/brand-design/visual-communication-design";
import Rebranding from "../pages/services/brand-design/rebranding-evaluation";

        {/*No Code Development Imports */ }

import Webflow from "../pages/services/nocode-development/webflow-development";
import FramerDevelopment from "../pages/services/nocode-development/framer-development";
import BubbleApp from "../pages/services/nocode-development/bubble-app-development";
import FigmaSites from "../pages/services/nocode-development/figma-sites";
import PlateformMaintenance from "../pages/services/nocode-development/plateform-maintenance-support";

import UseScrollToTop from "./use-scroll-to-top";

import UiUxdesign from "../pages/home/services/UiUxDesign";
import ProductRevamp from "../pages/home/services/ProductRevamp";
import BrandDesign from "../pages/home/services/BrandDesign";
import NoCodeDevelopment from "../pages/home/services/NoCodeDevelopment";
import MvpDesign from "../pages/home/services/MvpDesign";
import TeamExtension from "../pages/home/services/TeamExtension";








export default function CustomRoutes() {
    return (
        <>
            <BrowserRouter>
                <UseScrollToTop />
                <Routes>
                    <Route path="/" element={<LandingLayout />} >
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/insights" element={< Insights />} />
                        <Route path="/insights/insight-details" element={<InsightDetail />} />
                        <Route path="/work" element={<Work />} />
                        {/* Ui Ux Design Pages  */}
                        <Route path="/services/ui-ux-consulting" element={<UiUxConsulting />} />
                        <Route path="/services/ux-research-insights" element={<UxResearch />} />
                        <Route path="/services/experience-architecture" element={<Architecture />} />
                        <Route path="/services/design-system-guidelines" element={<DesignSystem />} />
                        <Route path="/services/prototyping-user-testing" element={<Prototyping />} />
                        <Route path="/services/ux-audit-product-optimization" element={<UxAudit />} />
                        <Route path="/services/web-design" element={<WebDesign />} />
                        <Route path="/services/mobile-design" element={<MobileDesign />} />

                        {/* Brand Design Pages  */}

                        <Route path="/services/brand-identity-design" element={<BrandIdentity />} />
                        <Route path="/services/brand-strategy-positioning" element={<BrandStrategy />} />
                        <Route path="/services/motion-design" element={<MotionDesign />} />
                        <Route path="/services/visual-communication-design" element={<VisualCommunication />} />
                        <Route path="/services/rebranding-evolution" element={<Rebranding />} />


                        <Route path="/services/webflow-development" element={<Webflow />} />
                        <Route path="/services/framer-development" element={<FramerDevelopment />} />
                        <Route path="/services/bubble-app-development" element={<BubbleApp />} />
                        <Route path="/services/figma-sites" element={<FigmaSites />} />
                        <Route path="/services/plateform-maintenance-support" element={<PlateformMaintenance />} />

                        <Route path="/services/ux-ui-design" element={<UiUxdesign />} />
                        <Route path="/services/product-revamp" element={<ProductRevamp />} />
                        <Route path="/services/brand-design" element={<BrandDesign />} />
                        <Route path="/services/no-code-development" element={<NoCodeDevelopment />} />
                        <Route path="/services/mvp-design" element={<MvpDesign />} />
                        <Route path="/services/team-extension" element={<TeamExtension />} />

                        <Route path="/contact" element={<ContactPage />} />
                    </Route>
                    <Route path="/auth" element={<AuthLayout />} >
                        <Route path="/auth/login" element={<Login />} />
                    </Route>
                </Routes>

            </BrowserRouter>
        </>
    )
}