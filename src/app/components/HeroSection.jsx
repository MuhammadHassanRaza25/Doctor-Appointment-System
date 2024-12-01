import Image from "next/image";
import DoctorImage from "../images/doctor.jpg"

export default function HeroSection(){
    return(
       <>
           <div className="heroSection mt-28 flex px-24 justify-between items-center bg-white">
              
              <div className="heroDetail flex flex-col gap-9">
                 <h1 className="heroHeading font-bold">Welcome to QuickHealth</h1>
                   <p className="heroDesc text-gray-500 w-[35vw]">
                     QuickHealth is an online platform that allows users to find doctors and book appointments effortlessly. It provides a seamless way to connect with healthcare professionals and manage medical consultations, ensuring convenience, reliability, and timely access to quality care. This platform is created to enhance your healthcare experience with ease and efficiency.
                   </p>
                 <div className="heroBtnDiv flex gap-5">
                    <button className="heroBtn bg-blue-600 text-white px-5 py-2.5 font-bold rounded-lg hover:bg-blue-500">Find Doctors</button>
                    <button className="heroBtn border border-green-600 bg-white text-green-600 px-5 py-2.5 font-bold rounded-lg">Apply as Doctor</button>
                 </div>
              </div>

              <div className="heroImgDiv">
                 <Image    
                  className="heroImg object-cover object-center rounded-xl h-[50vh]"
                  width={490} 
                  src={DoctorImage}
                  alt="Doctor Image"/>
              </div>

           </div>
       </>
    )
}