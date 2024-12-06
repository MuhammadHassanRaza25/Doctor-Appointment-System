import DoctorCard from "./components/DoctorCard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import OurServices from "./components/OurServices";

export default function Home() {
  return (
    <>
       <Header/>
       <HeroSection/>
       <OurServices/>

        {/* Doctors Section Start */}
         <div className="bg-gray-50 pt-10 pb-10 mt-36">

          <div className="docHeadingBtnParent flex items-center justify-between px-24">
            <h1 className="ourDoctorsHeading text-3xl font-bold">Our Expert Doctors For Your Care</h1>
            <button className="seeAllBtn bg-blue-500 text-white hover:bg-blue-600 hover:text-white px-4 py-1.5 rounded-md">See All</button>
          </div>

          <div className="docCardsParent px-24 mt-10">
            <DoctorCard/>
          </div>

         </div>
        {/* Doctors Section End */}
        
       <Footer/>
    </>
  )
}
