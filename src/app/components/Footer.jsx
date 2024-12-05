import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Footer(){
    return(
        <div className="footerConatiner bg-gray-50 border-t px-24 mt-24 pt-5 pb-5">
            
            <div className="flex flex-wrap justify-between items-baseline">

                <div className="fDiv1 flex flex-col mt-5 w-[20vw]">
                   <h1 className="font-bold text-2xl">QuickHealth</h1>
                   <p className="mt-5">QuickHealth your fast, easy, and reliable solution for seamless doctor appointments and better healthcare access.</p>
                    <p className="flex gap-4 mt-3">
                      <FaFacebook className="cursor-pointer text-4xl p-1.5 bg-black text-white hover:text-blue-300 rounded-full"/>
                      <FaInstagram className="cursor-pointer text-4xl p-1.5 bg-black text-white hover:text-blue-300 rounded-full"/>
                      <FaTwitter className="cursor-pointer text-4xl p-1.5 bg-black text-white hover:text-blue-300 rounded-full"/>
                    </p>
               </div>

               <div className="fDiv2 flex flex-col mt-5 w-[25vw]">
                   <h1 className="font-bold text-2xl">About Us</h1>
                   <p className="mt-5">QuickHealth is an efficient doctor appointment system designed to streamline the process of booking, managing, and tracking appointments. It aims to enhance patient convenience and improve healthcare accessibility through its user-friendly platform.</p>
               </div>
   
               <div className="fDiv3 flex flex-col mt-5 w-[15vw]">
                   <h1 className="font-bold text-2xl">Our Services</h1>
                   <p className='mt-5'>24/7 Emergency Care</p>
                   <p className='mt-2'>Instant Online Consultations</p>
                   <p className='mt-2'>Dental Care & Hygiene</p>
                   <p className='mt-2'>Expert Doctors</p>
                   <p className='mt-2'>Easy Doctor Appointments</p>
               </div>
               
               <div className="fDiv4 flex flex-col mt-5">
                   <h1 className="font-bold text-2xl">Contact Us</h1>
                   <p className='flex items-center gap-2 mt-5'><IoMdCall /> +1 321 123-4567</p>
                   <p className='flex items-center gap-2 mt-2'><MdEmail />  contact@quickhealth.com</p>
                   <p className='flex items-center gap-2 mt-2'><FaGlobe /> +1 321 123-4567</p>
               </div>
           </div>

           <div className='mt-10 border-t-2'>
              <div className="copyRightDiv mt-5 flex flex-wrap justify-between">
                <h2 className='copyRightTxt flex justify-center text-sm items-center gap-1'>CopyRight <FaRegCopyright className="cIcon" /> 2025 All rights reserved | This project is made by Muhammad Hassan Raza</h2>
                <Link href={"https://github.com/MuhammadHassanRaza25"} target="_blank"><FaGithub className="text-xl hover:text-blue-300 rounded-full"/></Link>
              </div>
           </div>

        </div>
    )
}