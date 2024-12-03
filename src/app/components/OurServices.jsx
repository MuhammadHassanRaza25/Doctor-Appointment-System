import { LuEar } from "react-icons/lu";
import { BiHeart } from "react-icons/bi";
import { RiStethoscopeLine } from "react-icons/ri";
import { BiBone } from "react-icons/bi";
import { LiaBrainSolid } from "react-icons/lia";
import { BsVirus } from "react-icons/bs";
import Image from 'next/image';
import logo from '../images/logo.png';

export default function OurServices(){
    return(
        <div className="serviceParentDiv mt-36">

            <div>
              <h1 className="servicesSmallHeading flex justify-center items-center gap-1 mb-1 text-lg"><span className="logoImg w-[20px]"><Image src={logo} /></span>QuickHealth</h1>
              <h1 className="servicesHeading text-4xl text-center font-bold">Our Medical Services</h1>
            </div>

            <div className="seviceDiv1 flex flex-wrap justify-between px-24 mt-10">
                <div className="serviceBox flex flex-col gap-4 justify-center items-center border rounded-xl w-44 h-36">
                   <p className="bg-blue-50 text-blue-500 text-4xl p-3 rounded-lg"><RiStethoscopeLine /></p>
                   <p className="font-bold">Dentistry</p>
                </div>
                <div className="serviceBox flex flex-col gap-4 justify-center items-center border rounded-xl w-44 h-36">
                   <p className="bg-blue-50 text-blue-500 text-4xl p-3 rounded-lg"><BiHeart /> </p>
                   <p className="font-bold">Cardiology</p>
                </div>
               <div className="serviceBox flex flex-col gap-4 justify-center items-center border rounded-xl w-44 h-36">
                   <p className="bg-blue-50 text-blue-500 font-bold text-4xl p-3 rounded-lg"><LuEar /></p>
                   <p className="font-bold">ENT Specialists</p>
                </div>
                <div className="serviceBox flex flex-col gap-4 justify-center items-center border rounded-xl w-44 h-36">
                   <p className="bg-blue-50 text-blue-500 font-bold text-4xl p-3 rounded-lg"><BiBone /></p>
                   <p className="font-bold">Astrology</p>
                </div>
                <div className="serviceBox flex flex-col gap-4 justify-center items-center border rounded-xl w-44 h-36">
                   <p className="bg-blue-50 text-blue-500 font-bold text-4xl p-3 rounded-lg"><LiaBrainSolid /></p>
                   <p className="font-bold">Neuroanatomy</p>
                </div>
                <div className="serviceBox flex flex-col gap-4 justify-center items-center border rounded-xl w-44 h-36">
                   <p className="bg-blue-50 text-blue-500 font-bold text-4xl p-3 rounded-lg"><BsVirus /></p>
                   <p className="font-bold">Blood Screening</p>
                </div>
            </div>

            <div className="seviceDiv2 flex flex-wrap justify-between px-24 mt-6">
                <div className="serviceBox flex flex-col gap-4 justify-center items-center border rounded-xl w-44 h-36">
                   <p className="bg-blue-50 text-blue-500 text-4xl p-3 rounded-lg"><RiStethoscopeLine /></p>
                   <p className="font-bold">Dentistry</p>
                </div>
                <div className="serviceBox flex flex-col gap-4 justify-center items-center border rounded-xl w-44 h-36">
                   <p className="bg-blue-50 text-blue-500 text-4xl p-3 rounded-lg"><BiHeart /> </p>
                   <p className="font-bold">Cardiology</p>
                </div>
               <div className="serviceBox flex flex-col gap-4 justify-center items-center border rounded-xl w-44 h-36">
                   <p className="bg-blue-50 text-blue-500 font-bold text-4xl p-3 rounded-lg"><LuEar /></p>
                   <p className="font-bold">ENT Specialists</p>
                </div>
                <div className="serviceBox flex flex-col gap-4 justify-center items-center border rounded-xl w-44 h-36">
                   <p className="bg-blue-50 text-blue-500 font-bold text-4xl p-3 rounded-lg"><BiBone /></p>
                   <p className="font-bold">Astrology</p>
                </div>
                <div className="serviceBox flex flex-col gap-4 justify-center items-center border rounded-xl w-44 h-36">
                   <p className="bg-blue-50 text-blue-500 font-bold text-4xl p-3 rounded-lg"><LiaBrainSolid /></p>
                   <p className="font-bold">Neuroanatomy</p>
                </div>
                <div className="serviceBox flex flex-col gap-4 justify-center items-center border rounded-xl w-44 h-36">
                   <p className="bg-blue-50 text-blue-500 font-bold text-4xl p-3 rounded-lg"><BsVirus /></p>
                   <p className="font-bold">Blood Screening</p>
                </div>
            </div>

        </div>
    )
}