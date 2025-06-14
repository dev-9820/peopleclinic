import { useState } from 'react';
import { motion } from 'framer-motion';
import doctorImage from "./assets/image.png";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { TbRulerMeasure } from "react-icons/tb";
import { GiHealthNormal } from "react-icons/gi";
import { RiMentalHealthFill } from "react-icons/ri";
import { FaUserMd, FaChartLine, FaAppleAlt, FaLaptopMedical } from "react-icons/fa";
import { FaPlus, FaTimes } from "react-icons/fa";
import icon1 from "./assets/icon1.png"
import icon2 from "./assets/icon2.png"
import icon3 from "./assets/icon3.png"
import icon4 from "./assets/icon4.png"
import icon5 from "./assets/icon5.png"
import icon6 from "./assets/icon6.png"
import icon7 from "./assets/icon7.png"
import icon8 from "./assets/icon8.png"
import React from 'react';
import axios from "axios"
import {useNavigate} from "react-router-dom"
import option1 from "./assets/tick.png"
import option2 from "./assets/ogphoto2-removebg.png"
import option3 from "./assets/ogphoto3-removebg.png"
import option4 from "./assets/ogphoto4-removebg.png"
import option5 from "./assets/photo.png"
import option6 from "./assets/Frame.png"
import option7 from "./assets/design.png"
import option8 from "./assets/newdoctor.png"
import logo from "./assets/logo.png"
import logo2 from "./assets/logo2.png"
import { useRef, useEffect } from 'react';

import { Helmet } from 'react-helmet-async';
import { option } from 'framer-motion/client';
const faqs = [
  {
    question: "How is this different from other diabetes treatments I’ve tried?",
    answer: "Unlike one-size-fits-all approaches, our Simple Diabetes Care Plan is personalized, rooted in your lifestyle, and designed to help you manage diabetes without drastic changes or confusion.",
  },
  {
    question: "Can I really reduce my HbA1c without taking more medicines?",
    answer: "Yes! Many of our patients have successfully reduced their HbA1c with a balanced mix of diet, lifestyle changes, and proper guidance—sometimes even reducing their medication load under medical supervision.",
  },
  {
    question: "Will I have to give up my favorite foods like rice or dosa?",
    answer: "Not at all. We help you enjoy South Indian staples like dosa, rice, and idli—smartly and in moderation—without guilt or spikes in blood sugar.",
  },
  {
    question: "What happens during the first consultation?",
    answer: " We’ll understand your medical history, current sugar levels, lifestyle, and goals. Based on that, we’ll create a plan that’s clear, achievable, and designed for YOU.",
  },
  {
    question: "Is this consultation available online?",
    answer: "Yes! We offer online consultations and follow-ups, so you can access care from the comfort of your home—no travel or waiting rooms needed.",
  },
  {
    question: "Can pregnant women with diabetes join this program?",
    answer: "Absolutely. We provide safe, guided care for pregnant women diagnosed with gestational or pre-existing diabetes."
  }
];


function LandingPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('home');
  const [openIndex, setOpenIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    place: "",
    duration: "",
    email : ""
  });
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [isAppLoading, setIsAppLoading] = useState(false);
  
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const handleClose = () => {
    setShowPopup(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Reset message
    

    // Contact number length validation (minimum 10 digits)
    if (!/^\d{10}$/.test(formData.contact)) {
      setMessage("Contact number must be exactly 10 digits. ❌");
      return;
    }

  setIsAppLoading(true)

    try {
      const res = await axios.post("https://diabetesbackend-goy1.onrender.com/api/consultations", formData);
      
      setIsAppLoading(false)
      setShowPopup(true)
      setFormData({ name: "", contact: "", place: "", duration: "", email: "" });


    } catch (error) {
      console.error("Error submitting form", error);
      
      
    }
  };


  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="font-sans bg-[#ffffff] text-gray-100 min-h-screen">

      
{isAppLoading && (
  <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
    <div className="bg-white rounded-2xl shadow-xl p-6 max-w-xs w-full flex flex-col items-center justify-center">
      <div className="loader mb-4 w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin" />
      <p className="text-gray-700 font-medium text-center">
        Booking your appointment...
      </p>
    </div>
  </div>
)}

      {showPopup && (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-xl p-6 max-w-xs w-full text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Appointment booked successfully!
          </h2>
          <p className="text-gray-600 mb-6">
            You will receive a call from our team shortly.
          </p>
          <button
            onClick={handleClose}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-full transition duration-200"
          >
            Ok
          </button>
        </div>
      </div>
      )}
    
          {/* About Doctor Section */}
<section className="flex flex-col bg-[#ffffff] h-screen md:pt-10 text-center md:px-0">
  <img src={logo} alt="Doctor" className="absolute z-10 ml-5 w-60 pt-10 md:pt-0 md:w-96 md:ml-40" />
  <motion.div 
    initial={{ opacity: 0, y: 50 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.8 }}
    className="bg-[#FDEFFF] w-full md:p-6 h-180 my-auto"
  >
    
    <div className="md:flex flex-col text-black md:flex-row items-center md:justify-between">
      <div className="text-center md:text-left md:w-2/3">
      <div className='mt-20'>
        <h2 className="text-3xl md:text-6xl md:ml-24">Welcome to</h2>
      </div>
        <p className="md:ml-24 text-4xl md:text-8xl font-bold mt-2">
          Parvathy Peoples <p> <span className='text-[#5A2F88]'> Clinic </span> & <span className='text-[#D62164]'> Pharmacy </span> </p>
        </p>

        <div className='border-black border-1 mx-auto md:ml-24 w-60 md:my-20 my-10'></div>

        <p className="md:ml-24 text-xl md:text-4xl mt-5">
          Bringing Affordable, Quality <p> Healthcare to Your Community </p>
        </p>

      </div>
        
      <img src={option6} alt="Doctor" className="absolute md:right-0 mt-42 w-100 z-10 h-100 md:w-200 -z-10  md:h-200 object-cover " />
      <img src={option7} alt="Doctor"  className="w-88 z-20 h-88 md:w-210  md:h-96 translate-x-5 object-cover object-top " />
      <img src={option5} alt="Doctor" style={{ filter: 'drop-shadow(0 5px 10px rgba(0, 0, 0, 0.3))' }} className="absolute ml-5 md:right-2 bottom-23 md:mt-32 w-82 z-20 h-82 md:w-240 md:h-240 object-cover object-top " />
    </div>
  </motion.div>


</section>
      
     {/* Hero Section */}
<section className="px-6 flex items-center mb-20 text-center">
  <motion.div 
    initial={{ opacity: 0, y: -50 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.8 }}
    className="bg-[#fffffff] rounded-xl text-black text-centerw-full mx-auto"
  >
    <h1 className="text-4xl md:text-6xl  font-semibold">
        Get Started with a Personal Consultation
    </h1>
    <p className="text-lg md:text-2xl my-8 font-semibold">
      Fill the Form Below
    </p>
    <form onSubmit={handleSubmit}>
    <div className="mt-6 md:mx-2 flex flex-col  gap-5">
   
    
      <input 
      required
      type="text"
      name="name"
      placeholder="Name"
      value={formData.name}
      onChange={handleChange}
     
      className="p-4 rounded-2xl bg-[#FDEFFF] text-black border border-[#D62164] h-20 text-2xl" />

{/* <input 
      required
      type="email"
      name="email"
      placeholder="Enter Email"
      value={formData.email}
      onChange={handleChange}
     
      className="p-3 rounded-md bg-[#D62164]/20 text-black border border-[#D62164] w-full" /> */}

      
      <input required
      type="number"
            name="contact"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleChange} className="p-4 rounded-2xl bg-[#FDEFFF] text-black border border-[#D62164] w-full h-20 text-2xl" />


      <input 
      required
            type="text"
            name="place"
            placeholder="Place"
            value={formData.place}
            onChange={handleChange}
            className="p-4 rounded-2xl bg-[#FDEFFF] text-black border border-[#D62164] w-full h-20 text-2xl" />

            <input 
      required
            type="text"
            name="age"
            placeholder="Age"
            value={formData.place}
            onChange={handleChange}
            className="p-4 rounded-2xl bg-[#FDEFFF] text-black border border-[#D62164] w-full h-20 text-2xl" />

            <input 
      required
            type="text"
            name="gender"
            placeholder="Gender"
            value={formData.place}
            onChange={handleChange}
            className="p-4 rounded-2xl bg-[#FDEFFF] text-black border border-[#D62164] w-full h-20 text-2xl" />

            <input 
      required
            type="text"
            name="service"
            placeholder="Service Required"
            value={formData.place}
            onChange={handleChange}
            className="p-4 rounded-2xl bg-[#FDEFFF] text-black border border-[#D62164] w-full h-20 text-2xl" />

        <input 
      required
            type="text"
            name="place"
            placeholder="Health Concern"
            value={formData.place}
            onChange={handleChange}
            className="p-4 rounded-2xl bg-[#FDEFFF] text-black border border-[#D62164]  w-full h-50 text-2xl" />

{/* <select
  required
  name="duration"
  value={formData.duration}
  onChange={handleChange}
  className="p-3 rounded-md bg-[#D62164]/20 text-black border border-[#D62164] w-full"
>
  <option value="">Select Duration</option>
  <option value="0 - 6 months" className='text-black'>0 - 6 months</option>
  <option value="6 months - 1 year" className='text-black'>6 months - 1 year</option>
  <option value="1-3 years" className='text-black'>1-3 years</option>
  <option value="3-5 years" className='text-black'>3-5 years</option>
  <option value="Above 5 years" className='text-black'>Above 5 years</option>
</select> */}


    </div>
    <button type='submit' className="mt-6 bg-[#5A2F88] text-2xl text-white px-12 py-4 rounded-md  hover:scale-105 transition-all">
      Request A Callback
    </button>
    </form>
    {message && <p className="mt-4 text-lg font-semibold text-gray-300">{message}</p>}
  </motion.div>
</section>
      



    
      {/* Benefits Section */}
      <section className="py-24 bg-[url('/public/bgimage.png')] custom-bg opacity-90 h-screen bg-cover bg-top ">
      <div className="flex justify-end">
  <img src={logo2} alt="Doctor" className="md:pt-0 md:w-116 mr-30" />
</div>
        <div className="md:max-w-7xl md:mx-auto md:px-6">
          
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="md:text-3xl my-5 text-2xl font-semibold text-center text-transparent bg-clip-text bg-white mb-20"
          >
              <p className='my-5 text-lg md:text-3xl text-black'><span className='font-bold'>Since 1992, Parvathy Hospital</span> has been a trusted name in healthcare, having treated over</p>
           <p 
  className="text-8xl md:text-[250px] font-sans font-bold text-[#582E86] tracking-tighter"
>
  50,000+
</p>
<span className="block font-bold md:tracking-[40px] tracking-[15px] text-4xl md:text-6xl mt-10 text-black uppercase">
    patients
  </span>

            <p className='md:text-3xl text-xl  mt-10 font-semibold text-black'>Now, we’re bringing the same compassionate, affordable care closer to you—right in your neighborhood, with branches in <span className='font-bold'>Madambakkam, Pammal, and Guduvanchery. </span> </p>
            <button type='submit' className="mt-6 bg-[#D62164] font-normal text-3xl text-white px-10 py-3 rounded-md mt-20 hover:scale-105 transition-all">
      Get Treated Today
    </button>
          </motion.h2>
        </div>
      </section>

     
      {/* What We Offer Section */}
<section className="py-20 bg-white text-black px-6">
  <div className="max-w-6xl mx-auto">
    <motion.h2 
      initial="hidden"
      whileInView="visible"
      variants={fadeIn}
      viewport={{ once: true }}
      className="text-2xl md:text-6xl font-semibold text-center mb-16"
    >
      What We Offer
    </motion.h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
      {/* Service 1 */}
      <motion.div 
        whileHover={{ y: -10 }}
        className="bg-[#E6D2FF]/70 p-8 max-w-lg shadow-xl shadow-black/25 rounded-lg shadow-md text-center"
      >
        <div className="h-84 flex justify-center">
  {/* square wrapper so the circle can never distort */}
  <div className="mt-10 flex items-center justify-center
                  w-40 h-40 rounded-full bg-[#582E86]
                  ring-2 ring-[#582E98]
                  ring-offset-15 ring-offset-[#E6D2FF]"> 
    <img
      src={icon1}
      alt="Service Icon"
      className="max-w-full max-h-full object-contain"
    />
  </div>
</div>
        <h3 className="text-3xl -mt-15 font-bold mx-15 mb-4">Honest, Affordable Consultations</h3>
        <p className="text-black mx-15 text-lg">
          Low consultation fees for common ailments. No hidden charges, no unnecessary tests - just honest healthcare you can afford.
        </p>
      </motion.div>

      {/* Service 2 */}
      <motion.div 
        whileHover={{ y: -10 }}
        className="max-w-lg bg-[#E6D2FF]/70 p-8 shadow-xl shadow-black/25 rounded-lg shadow-md text-center"
      >
        <div className="h-84 flex  justify-center">
          {/* Space for icon */}
          <div className="mt-10 flex items-center justify-center
                  w-40 h-40 rounded-full bg-[#582E86]
                  ring-2 ring-[#582E98]
                  ring-offset-15 ring-offset-[#E6D2FF]"> 
    <img
      src={icon2}
      alt="Service Icon"
      className="max-w-full max-h-full object-contain "
    />
  </div>
        </div>
        <h3 className="text-3xl mx-15 -mt-15 font-bold mb-4">Generic Medicines That Actually Work</h3>
        <p className="text-black mx-15 text-lg">
          Same effectiveness as expensive brands at 50-70% lower cost. Our pharmacist explains exactly why generic works just as well.
        </p>
      </motion.div>

      {/* Service 3 */}
      <motion.div 
        whileHover={{ y: -10 }}
        className="max-w-lg bg-[#E6D2FF]/70 p-8 shadow-xl shadow-black/25 rounded-lg shadow-md text-center"
      >
        <div className="h-84 flex justify-center">
          {/* Space for icon */}
          <div className="mt-10 flex items-center justify-center
                  w-40 h-40 rounded-full bg-[#582E86]
                  ring-2 ring-[#582E98]
                  ring-offset-15 ring-offset-[#E6D2FF]"> 
    <img
      src={icon3}
      alt="Service Icon"
      className="max-w-full max-h-full object-contain"
    />
  </div>
        </div>
        <h3 className="text-3xl mx-15 -mt-15 font-bold mb-4">Home Healthcare Services at Budget Prices</h3>
        <p className="text-black mx-15 text-lg">
          Home physiotherapy visits for back pain, joint pain, and mobility issues at affordable prices.
        </p>
      </motion.div>

      {/* Service 4 */}
      <motion.div 
        whileHover={{ y: -10 }}
        className="max-w-lg bg-[#E6D2FF]/70 p-8 shadow-xl shadow-black/25 rounded-lg shadow-md text-center"
      >
        <div className="h-84 flex justify-center">
          {/* Space for icon */}
          <div className="mt-10 flex items-center justify-center
                  w-40 h-40 rounded-full bg-[#582E86]
                  ring-2 ring-[#582E98]
                  ring-offset-15 ring-offset-[#E6D2FF]"> 
    <img
      src={icon4}
      alt="Service Icon"
      className="max-w-full max-h-full object-contain"
    />
  </div>
        </div>
        <h3 className="text-3xl mx-15 -mt-15 font-bold mb-4">Complete Family Care Under One Roof</h3>
        <p className="text-black mx-15 text-lg">
          From newborn care to elderly health management, plus your pet's basic needs - everything your family needs.
        </p>
      </motion.div>
    </div>

    <div className="mt-20 text-center">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#D62164] text-white px-8 py-4 rounded-md  text-3xl  transition-colors"
      >
        Book Your Affordable Consultation
      </motion.button>
    </div>
  </div>
</section>

{/* Common Problems Section */}
<section className="py-20 bg-[#F7F0FF] px-6">
  <div className=" mx-auto">
    <motion.h2 
      initial="hidden"
      whileInView="visible"
      variants={fadeIn}
      viewport={{ once: true }}
      className="text-3xl text-black md:text-5xl font-bold text-center mb-12"
    >
      Are You Facing These Common Healthcare Problems?
    </motion.h2>

    <motion.p 
      initial="hidden"
      whileInView="visible"
      variants={fadeIn}
      viewport={{ once: true }}
      className="text-3xl text-black text-center mb-16 "
    >
      If any of these sound familiar, you're not alone...
    </motion.p>

    <div className="space-y-5 max-w-6xl  flex flex-col justify-self-center">
      

      {/* Problem 2 */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true }}
        className="flex bg-[#582E86] p-6 rounded-2xl items-start"
      >
        <div className="min-w-[60px] my-auto mr-4 flex justify-center">
          <img src={option1} className="h-12 bg-[#D62164] p-2 rounded-md object-contain" alt="Tick icon"/>
        </div>
        <p className="text-white text-lg md:text-2xl ml-5">
          Are you tired of spending $500-800 every time someone in your family catches a simple cold or fever?
        </p>
      </motion.div>

      {/* Problem 3 */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true }}
        className="flex bg-[#582E86] p-6 rounded-2xl items-start"
      >
        <div className="min-w-[60px] my-auto mr-4 flex justify-center">
          <img src={option1} className="h-12 bg-[#D62164] p-2 rounded-md object-contain" alt="Tick icon"/>
        </div>
        <p className="text-white text-lg md:text-2xl ml-5">
          Do you feel helpless when your child has fever at night, your back is aching, or you need blood tests but all the expensive clinics are closed?
        </p>
      </motion.div>

      {/* Problem 4 */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true }}
        className="flex bg-[#582E86] p-6 rounded-2xl items-start"
      >
        <div className="min-w-[60px] my-auto mr-4 flex justify-center">
          <img src={option1} className="h-12 bg-[#D62164] p-2 rounded-md object-contain" alt="Tick icon"/>
        </div>
        <p className="text-white text-lg md:text-2xl ml-5">
          Are you frustrated with clinics that order unnecessary tests, charge $500+ for physiotherapy sessions, and make you travel to different places for consultation, medicines, and lab tests?
        </p>
      </motion.div>

      {/* Problem 5 */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true }}
        className="flex bg-[#582E86] p-6 rounded-2xl items-start"
      >
        <div className="min-w-[60px] my-auto mr-4 flex justify-center">
          <img src={option1} className="h-12 bg-[#D62164] p-2 rounded-md object-contain" alt="Tick icon"/>
        </div>
        <p className="text-white text-lg md:text-2xl ml-5">
          Do you worry about your elderly parents' health - their joint pain, regular blood tests, and mobility issues - but hesitate due to the high cost of home visits and multiple clinic trips?
        </p>
      </motion.div>

      {/* Problem 6 */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true }}
        className="flex bg-[#582E86] p-6 rounded-2xl items-start"
      >
        <div className="min-w-[60px] my-auto mr-4 flex justify-center">
          <img src={option1} className="h-12 bg-[#D62164] p-2 rounded-md object-contain" alt="Tick icon"/>
        </div>
        <p className="text-white text-lg md:text-2xl ml-5">
          Are you stressed about managing diabetes blood tests, blood pressure check-ups, and physiotherapy for back pain on your tight budget?
        </p>
      </motion.div>

      {/* Problem 7 */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true }}
        className="flex bg-[#582E86] p-6 rounded-2xl items-start"
      >
        <div className="min-w-[60px] my-auto mr-4 flex justify-center">
          <img src={option1} className="h-12 bg-[#D62164] p-2 rounded-md object-contain" alt="Tick icon"/>
        </div>
        <p className="text-white text-lg md:text-2xl ml-5">
          Do you wish there was one trusted place that handles everything - doctor consultation, medicines, physiotherapy, and blood tests - without breaking your budget?
        </p>
      </motion.div>
    </div>
  </div>
</section>

{/* Why Choose Us Section - Table Layout */}
<section className="py-20 bg-white px-6">
  <div className="max-w-6xl mx-auto">
    <motion.h2 
      initial="hidden"
      whileInView="visible"
      variants={fadeIn}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-bold text-center mb-16 text-black"
    >
      Why Families Choose Us Over Expensive Clinics
    </motion.h2>

    {/* Table Container */}
    <div className="border-2 border-[#5A2F88] rounded-2xl overflow-hidden">
      {/* Table Header */}
      <div className="grid grid-cols-2 border-b-2 border-white">
        <div className="bg-[#582E86] p-4 text-center border-r-2 border-white/25">
          <h3 className="text-2xl md:text-3xl font-bold text-white">What You Get Here:</h3>
        </div>
        <div className="bg-black p-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white">What You Avoid</h3>
        </div>
      </div>
      
      {/* Table Rows */}
      <div className="grid grid-cols-2">
        {/* Left Column - What You Get */}
        <div className="bg-[#582E86] p-6 border-r-2 border-white/25">
          <ul className="space-y-4">
            <li className="flex items-start border-b border-[#5A2F88]/30 pb-3">
              <span className="text-white text-xl mr-2">•</span>
              <span className="text-white text-lg">Honest affordable consultations</span>
            </li>
            <li className="flex items-start border-b border-[#5A2F88]/30 pb-3">
              <span className="text-white text-xl mr-2">•</span>
              <span className="text-white text-lg">Home physiotherapy</span>
            </li>
            <li className="flex items-start border-b border-[#5A2F88]/30 pb-3">
              <span className="text-white text-xl mr-2">•</span>
              <span className="text-white text-lg">Home blood test collection</span>
            </li>
            <li className="flex items-start border-b border-[#5A2F88]/30 pb-3">
              <span className="text-white text-xl mr-2">•</span>
              <span className="text-white text-lg">All services under one roof - no multiple clinic visits</span>
            </li>
            <li className="flex items-start border-b border-[#5A2F88]/30 pb-3">
              <span className="text-white text-xl mr-2">•</span>
              <span className="text-white text-lg">No unnecessary tests or procedures</span>
            </li>
            <li className="flex items-start border-b border-[#5A2F88]/30 pb-3">
              <span className="text-white text-xl mr-2">•</span>
              <span className="text-white text-lg">Open from 7AM to 11PM daily</span>
            </li>
            <li className="flex items-start border-b border-[#5A2F88]/30 pb-3">
              <span className="text-white text-xl mr-2">•</span>
              <span className="text-white text-lg">Walk-in appointments welcome</span>
            </li>
            <li className="flex items-start border-b border-[#5A2F88]/30 pb-3">
              <span className="text-white text-xl mr-2">•</span>
              <span className="text-white text-lg">Family-friendly environment</span>
            </li>
            <li className="flex items-start">
              <span className="text-white text-xl mr-2">•</span>
              <span className="text-white text-lg">30+ years of trusted service</span>
            </li>
          </ul>
        </div>
        
        {/* Right Column - What You Avoid */}
        <div className="bg-black p-6">
          <ul className="space-y-4">
            <li className="flex items-start pb-3">
              <span className="text-white text-xl mr-2">•</span>
              <span className="text-white text-lg">Profit-first healthcare approach</span>
            </li>
            <li className="flex items-start pb-3">
              <span className="text-white text-xl mr-2">•</span>
              <span className="text-white text-lg">Expensive consultation fees</span>
            </li>
            <li className="flex items-start pb-3">
              <span className="text-white text-xl mr-2">•</span>
              <span className="text-white text-lg">Expensive physiotherapy session charges</span>
            </li>
            <li className="flex items-start pb-3">
              <span className="text-white text-xl mr-2">•</span>
              <span className="text-white text-lg">Expensive branded medicine pressure</span>
            </li>
            <li className="flex items-start pb-3">
              <span className="text-white text-xl mr-2">•</span>
              <span className="text-white text-lg">Multiple trips to different clinics/labs</span>
            </li>
            <li className="flex items-start pb-3">
              <span className="text-white text-xl mr-2">•</span>
              <span className="text-white text-lg">Unnecessary diagnostic tests</span>
            </li>
            <li className="flex items-start pb-3">
              <span className="text-white text-xl mr-2">•</span>
              <span className="text-white text-lg">Limited working hours</span>
            </li>
            <li className="flex items-start  pb-3">
              <span className="text-white text-xl mr-2">•</span>
              <span className="text-white text-lg">Advance appointment hassles</span>
            </li>
            <li className="flex items-start pb-3">
              <span className="text-white text-xl mr-2">•</span>
              <span className="text-white text-lg">Impersonal corporate clinic feel</span>
            </li>
            <li className="flex items-start">
              <span className="text-white text-xl mr-2">•</span>
              <span className="text-white text-lg">Hidden charges and surprises</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Footer Button */}
    <div className="mt-16 text-center">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#D62164] text-white px-8 py-4 rounded-md text-xl md:text-2xl font-semibold transition-colors"
      >
        Book Your Affordable Consultation
      </motion.button>
    </div>
  </div>
</section>
     
    </div>
  );
}

export default LandingPage;