import SunshineImage from "../images/FullSunshine.png"
import "../styles/pages.css"
import Propertycards from "../components/Cards";
import AboutSection from "../components/AboutSection";
import RealEstateSection from "../components/RealEstateSection";
import LeasingSection from "../components/Leasing_Sect";
import TestimonialSlider from "../components/TestimonialSlider";
import Contact from "../components/Contact";
import Footer from "../components/Footer"
import HomeComponent from "../components/HomeSection"
import AboutUs from "../components/AboutUs"
import Missions from "../components/MissionVision"
export default function Home() {
    return (
      <div>
      <section className="my-home">
          <HomeComponent />
      </section>

      <section>
        <AboutUs />
      </section>

      <section>
        <div className="container">
        <Missions />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="cont-merge">
          <h1>Expert Management for Properties, Tenants, and Real <br /> Estate Investments</h1>
          </div>
          <Propertycards />
        </div>
      </section>

      <section className="About-Sect">
        <AboutSection/>
      </section>

      <section>
        <RealEstateSection/>
      </section>

      <section>
        <LeasingSection/>
      </section>

      <section>
      <TestimonialSlider/>
      </section>

      <section>
        <Contact/>
      </section>

      <section>
        <img src={SunshineImage} alt="" className="sunshine-image" />
      </section>

      <section>
        <Footer />
      </section>
      </div>

      
    );
  }