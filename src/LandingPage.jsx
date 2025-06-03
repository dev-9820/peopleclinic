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
import option1 from "./assets/ogphoto-removebg.png"
import option2 from "./assets/ogphoto2-removebg.png"
import option3 from "./assets/ogphoto3-removebg.png"
import option4 from "./assets/ogphoto4-removebg.png"
import option5 from "./assets/ogphoto5-removebg.png"
import option6 from "./assets/Frame.png"
import option7 from "./assets/design.png"
import option8 from "./assets/newdoctor.png"
import logo from "./assets/logo.png"
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
      <img src={option8} alt="Doctor" style={{ filter: 'drop-shadow(0 5px 10px rgba(0, 0, 0, 0.3))' }} className="absolute ml-5 md:right-2 bottom-28 md:mt-32 w-82 z-20 h-82 md:w-175 md:h-170 object-cover object-top " />
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
    <h1 className="text-4xl md:text-4xl  font-semibold">
        Get Started with a Personal Consultation
    </h1>
    <p className="text-lg md:text-2xl my-8 ">
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
     
      className="p-4 rounded-md bg-[#D62164]/20 text-black border border-[#D62164] w-full" />

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
            onChange={handleChange} className="p-4 rounded-md bg-[#D62164]/20 text-black border border-[#D62164] w-full" />


      <input 
      required
            type="text"
            name="place"
            placeholder="Place"
            value={formData.place}
            onChange={handleChange}
            className="p-4 rounded-md bg-[#D62164]/20 text-black border border-[#D62164] w-full" />

        <input 
      required
            type="text"
            name="place"
            placeholder="Health Concern"
            value={formData.place}
            onChange={handleChange}
            className="p-4 rounded-md bg-[#D62164]/20 text-black border border-[#D62164] w-full" />

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
    <button type='submit' className="mt-6 bg-[#5A2F88] text-white px-6 py-3 rounded-md font-bold hover:scale-105 transition-all">
      Request A Callback
    </button>
    </form>
    {message && <p className="mt-4 text-lg font-semibold text-gray-300">{message}</p>}
  </motion.div>
</section>
      



    
      {/* Benefits Section */}
      <section className="py-24 bg-[url('/public/bg2.jpg')] custom-bg opacity-90 h-screen bg-cover bg-bottom ">
      
        <div className="md:max-w-7xl md:mx-auto md:px-6">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="md:text-3xl my-5 text-2xl font-semibold text-center text-transparent bg-clip-text bg-white mb-20"
          >
              <p className='my-5 text-lg md:text-2xl text-black'>Since 1992, Parvathy Hospital has been a trusted name in healthcare, having treated over</p>
            <p 
  className="text-8xl md:text-[175px] font-bold text-[#582E86] tracking-tighter " 
  style={{ textShadow: '4px 4px 10px rgba(88, 46, 134, 0.7)' }}
>
  50,000+ 

</p>
<span className="block font-semibold md:tracking-[30px] tracking-[15px] text-4xl md:text-6xl mt-5 drop-shadow- text-black uppercase">
    patients
  </span>

            <p className='md:text-2xl text-xl  mt-10 font-normal text-black'>Now, we’re bringing the same compassionate, affordable care closer to you—right in your neighborhood, with branches in <span className='font-bold'>Madambakkam, Pammal, and Guduvanchery. </span> </p>
            <button type='submit' className="mt-6 bg-[#D62164] text-lg text-white px-6 py-3 rounded-xs mt-20 hover:scale-105 transition-all">
      Get Treated Today
    </button>
          </motion.h2>

          
          
         
        </div>
      </section>

     

      {/* Questionnaire Section */}
      {/* <section className="py-24 bg-[#08081b]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-4xl mb-3">But First...</h2>
            <h3 className="text-3xl md:text-6xl font-semibold text-white mb-16">I Want to Ask You a <p className=' text-transparent bg-clip-text bg-yellow-500'> Few Questions </p></h3>
            
            <div className="text-left space-y-8 mb-16">
              {[
                "Do you feel like you'll need to take medicines for the rest of your life just to manage your diabetes?",
                "Do you constantly fear that your diabetes might lead to other complications, like kidney damage or vision problems?",
                "Are you afraid of the long-term effects of diabetes and wondering if you'll ever be able to live without constant worry?",
                "Do you feel like you're at risk of developing serious conditions, and it's becoming hard to stay positive about your future health?",
                "Are you scared that diabetes could eventually take a toll on your life regretdrug or cause an untimely death?",
                "Do you feel like diabetes is taking control of your life, leaving little time for other things?",
                "Are you struggling to maintain your health while juggling your job, home, and other responsibilities?"
              ].map((question, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeIn}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start bg-[#15243b] p-6 "
                >
                  <div className="bg-[#EEB600] rounded-md w-12 h-12 text-5xl flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white font-semibold">?</span>
                  </div>
                  <p className="text-xl text-white">{question}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.button
  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(156, 241, 99, 0.08)" }}
  whileTap={{ scale: 0.95 }}
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  className="bg-[#eeb600] text-black px-6 md:px-24 py-3 md:py-4 rounded-sm font-bold text-lg md:text-xl shadow-xl hover:shadow-2xl transition-all whitespace-nowrap"
>
  Book an Appointment
</motion.button>
          </motion.div>
        </div>
      </section> */}

      

    {/* <div className='flex justify-center'>
      <motion.button
  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(156, 241, 99, 0.08)" }}
  whileTap={{ scale: 0.95 }}
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  className="bg-[#eeb600] text-black mb-6 -mt-12 px-6 md:px-24 py-3 md:py-4 rounded-sm font-bold text-lg md:text-xl shadow-xl hover:shadow-2xl transition-all whitespace-nowrap"
>
  Book an Appointment
</motion.button>
      </div> */}
     
    </div>
  );
}

export default LandingPage;


// const TestimonialSlider = () => {
//   const testimonials = [
//     {
//       id: 1,
//       name: "Menagapriya Munuswamy",
//       time: "4 months ago",
//       content: "Dr. Sai vigneshvar is one of the best doctor in Chromepet. He is listening all our queries very patiently and explain the solution very well.So I highly recommend Chromepet medical center for anyone seeking best medical care."
//     },
//     {
//       id: 2,
//       name: "Hema Hema",
//       time: "7 months ago",
//       content: "I had serious stomach upset. That is the first time I checked out with Dr. Sai Vigneshwar Sir, he is so patient in listening to. After I started with the medications referred, I felt so much releaf from pain. Thank you Sir. Let Sai Baba showers his blessings on you. 🙏"
//     },
//     {
//       id: 3,
//       name: "Pradeesh Guna",
//       time: "2 years ago",
//       content: "This review has been posted after the 4th consulting experience with Dr. Sai Vigneshwar. Being in the fitness industry, I have the opportunity to learn some up to date research papers on human health and wellness. Particularly on diabetics and lifestyle disorders. The suggestions, answers and the way of approach is very different from other doctors."
//     },
//     {
//       id: 4,
//       name: "Preethi s",
//       time: "a year ago",
//       content: "Dr Sai Vigneshvar is one of the most trust worthy doctors I have come across. He has a great approach towards his patients and gives us a feeling of comfort. He listens and addresses all our concerns patiently, that too for a person like me who has never ending questions and doubts."
//     },
//     {
//       id: 5,
//       name: "Sindhu Machado",
//       time: "10 months ago",
//       content: "Dr. Sai Vigneshwar is an approachable person he lends ears to all doubts. We a family of 9 including aged diabetic n hypertension patients got treated for Covid. Giving personal attention, he was all throughout suggesting practical lifestyle changes."
//     },
//     {
//       id: 6,
//       name: "Sadam Sadam",
//       time: "11 months ago",
//       content: "Dr Sai was an amazing person to give faithful trust on us💯 when ever we meet Him. I feel like totally curing my diabetes symtm. The pricing is also so reasonable and hence I highly recommend this place."
//     }
//   ];

//   const sliderRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => 
//         prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 5000); // Change slide every 5 seconds

//     return () => clearInterval(interval);
//   }, [testimonials.length]);

//   return (
//     <section className="py-16 bg-[#08081b] relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">
//         <motion.h2 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
//         >
//           Patient <span className="text-yellow-500">Testimonials</span>
//         </motion.h2>

//         <div className="relative h-96 md:h-80">
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={testimonial.id}
//               className={`absolute inset-0 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#1a1ac1] to-[#15243B] border border-gray-600 shadow-xl flex flex-col ${
//                 index === currentIndex ? 'z-10' : 'z-0'
//               }`}
//               initial={{ opacity: 0, x: index === currentIndex ? 0 : (index < currentIndex ? -100 : 100) }}
//               animate={{ 
//                 opacity: index === currentIndex ? 1 : 0.3,
//                 x: index === currentIndex ? 0 : (index < currentIndex ? -50 : 50),
//                 scale: index === currentIndex ? 1 : 0.9
//               }}
//               transition={{ duration: 0.6, ease: "easeInOut" }}
//             >
//               <div className="flex-1 flex flex-col justify-center">
//                 <p className="text-white text-lg md:text-xl mb-6 italic relative">
//                   <span className="absolute top-0 left-0 text-5xl text-yellow-400 opacity-20">"</span>
//                   {testimonial.content}
//                   <span className="absolute bottom-0 right-0 text-5xl text-yellow-400 opacity-20">"</span>
//                 </p>
//                 <div className="mt-6">
//                   <h4 className="text-yellow-400 text-xl font-semibold">{testimonial.name}</h4>
                  
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <div className="flex justify-center mt-8 space-x-2">
//           {testimonials.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentIndex(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 index === currentIndex ? 'bg-yellow-400 w-6' : 'bg-gray-500'
//               }`}
//               aria-label={`Go to testimonial ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Decorative elements */}
//       <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-yellow-400 opacity-10 blur-3xl"></div>
//       <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
//     </section>
//   );
// };