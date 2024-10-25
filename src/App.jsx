import "./App.css";
import AboutUs from "./components/AboutUs";
import Achivement from "./components/Achivement";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Inquiry from "./components/Inquiry";
import Nav from "./components/Nav";
import Newsletter from "./components/Newsletter";
import Projects from "./components/Projects";
import Review from "./components/Review";
import Services from "./components/Services";
import Work from "./components/Work";

function App() {
  return (
    <>
      <div className="">
        <div className="relative  ">
          <video
            className="absolute inset-0 object-cover w-full h-full"
            autoPlay
            muted
            loop
          >
            <source
              src="https://s3-figma-videos-production-sig.figma.com/video/907900026577014002/TEAM/2e15/b653/-bba7-4454-a5cc-3ca982ed3987?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TVw9soNo9XQ0-SkoJE~7OyIzqkvFT~bzz6lrnIq38U-IEDo41GJ54p4tZj21MXytDQcrRGJGcB18VXlQMNo-COasLzjVCntETBXo03QuPbPkh7SJ-x~mb5~Ydk~E6-evOKQ67GdxpawwJB8h3F9d5Qzob6FwpWe1TFFClczTbYuUJcSp3ShuMSC2xaSx4izKEX8MCrUC6VXVrh85-wU5ADve6Ctdgin6Kq8AbXPs3NeGObWmoRFPyWfRRUdudwZrrvQal1zKhseUg9dPKpvIqE61GW5sf7l1CW497OrStTl6ogoWuGoF0YMc9zV0-MOdbThyWCo4YmosRl7Omhvu9A__"
              type="video/mp4"
            />
          </video>
         <Nav />
         <Hero />
         </div>
          <Services />
          <AboutUs />
          <Work />
          <Review />
          <Projects />
          <Achivement />
          <Newsletter />
          <Inquiry />
          <Footer />

        
      
      </div>
    </>
  );
}

export default App;
