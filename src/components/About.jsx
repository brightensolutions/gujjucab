"use client"

import { useEffect, useState } from "react"
import { Check, ChevronLeft, ChevronRight } from "lucide-react"
import group from "../assets/group1.jpg"
import BannerImage from "../assets/banner-image.webp"
import AOS from "aos"
import "aos/dist/aos.css" // Import AOS CSS
import about2 from "../assets/women.jpg"
import about3 from "../assets/Safety.jpg"
import about4 from "../assets/about4.webp"

const About = () => {
  const features = [
    "24/7 Customer Support Available",
    "Experienced & Professional Drivers",
    "Multiple Payment Options",
    "Real-time GPS Tracking",
    "Comfortable & Clean Vehicles",
    "Competitive & Transparent Pricing",
  ]

  // Interior images array - replace with your actual interior images
  const interiorImages = [
    group, // Original image
    about2, // Replace with actual interior image
    about3, // Replace with actual interior image
    about4, // Replace with actual interior image
  ]

  // State for image carousel
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Function to go to next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % interiorImages.length)
  }

  // Function to go to previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? interiorImages.length - 1 : prevIndex - 1))
  }

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    })
  }, [])

  return (
    <div className="min-h-screen bg-cab-background dark:bg-cab-background-dark">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
        <img src={BannerImage || "/placeholder.svg"} alt="Luxury Car Service" className="object-cover w-full h-full" />
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black/70 to-black/50">
          <div className="px-4 text-center" data-aos="fade-up">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl text-amber-400">About Cab</h1>
            <p className="max-w-2xl mx-auto text-xl font-bold md:text-2xl text-white/90">
              Your trusted partner for comfortable and safe rides.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* About Section */}
        <div className="overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
          <div className="grid gap-0 md:grid-cols-2">
            {/* Left Side - Image Carousel with yellow top border */}
            <div className="relative h-full group" data-aos="fade-right">
              {/* Yellow line at the top of the image div */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-yellow-500 z-10"></div>

              {/* Image carousel */}
              <div className="relative h-full overflow-hidden">
                {/* Main image that changes */}
                <img
                  className="object-cover w-full h-full transition-all duration-700 transform group-hover:scale-105"
                  src={interiorImages[currentImageIndex] || "/placeholder.svg"}
                  alt={`Cab Interior Design ${currentImageIndex + 1}`}
                />

                {/* Small preview images at the bottom */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 px-4">
                  {interiorImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentImageIndex === index ? "bg-yellow-500 scale-125" : "bg-white/70"
                      }`}
                      aria-label={`View image ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Navigation arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Overlay on hover */}
                <div className="absolute inset-0 transition-opacity duration-300 bg-yellow-500/20 opacity-0 group-hover:opacity-100"></div>
              </div>
            </div>

            {/* Right Side - Content with yellow top border */}
            <div className="relative p-8" data-aos="fade-left">
              {/* Yellow line at the top of the content div */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-yellow-500 z-10"></div>
              <h2 className="mb-6 text-2xl font-bold text-cab-text dark:text-cab-text-dark">
                Your Trusted Cab Service Partner
              </h2>
              <p className="mb-6 text-cab-text dark:text-cab-text-dark">
                Welcome to CabHub, your premier destination for reliable and comfortable transportation. Since our
                inception, we've been dedicated to revolutionizing the way people travel within and between cities. Our
                mission is simple yet powerful: to provide safe, efficient, and affordable cab services that exceed our
                customers' expectations.
              </p>

              <h3 className="mt-8 mb-4 text-xl font-bold text-cab-text dark:text-cab-text-dark">Why Choose Us?</h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-yellow-500" />
                    <span className="text-cab-text dark:text-cab-text-dark">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-16">
          <h2 className="mb-8 text-3xl font-bold text-center text-cab-text dark:text-cab-text-dark" data-aos="fade-up">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: "🛡️",
                title: "Safety First",
                description:
                  "We prioritize the safety of our passengers and drivers above all else, implementing rigorous safety protocols and regular vehicle maintenance.",
              },
              {
                icon: "⭐",
                title: "Customer Satisfaction",
                description:
                  "We strive to exceed our customers' expectations with every ride, ensuring comfort, punctuality, and professional service.",
              },
              {
                icon: "💡",
                title: "Innovation",
                description:
                  "We continuously innovate and adopt new technologies to improve our services and provide a seamless booking experience.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-8 transition-all duration-300 transform bg-white border-2 border-yellow-200 rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl hover:scale-105"
                data-aos="fade-up" // Add animation
              >
                <div className="mb-4 text-4xl text-yellow-500">{value.icon}</div>
                <h3 className="mb-4 text-xl font-semibold text-cab-text dark:text-cab-text-dark">{value.title}</h3>
                <p className="text-cab-text dark:text-cab-text-dark">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* <AnimatedBanner /> */}

        {/* Story Section */}
        <div className="mt-20">
          <div className="lg:text-center" data-aos="fade-up">
            <h2 className="text-base font-semibold tracking-wide text-yellow-500 uppercase">Our Story</h2>
            <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-cab-text dark:text-cab-text-dark sm:text-4xl">
              A Journey of Excellence
            </p>
            <p className="max-w-2xl mt-4 text-xl text-cab-text dark:text-cab-text-dark lg:mx-auto">
              CabBooker started with a simple idea: to provide reliable, comfortable, and affordable transportation to
              everyone. Over the years, we've grown into a trusted name in the industry, always putting our customers
              first.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About






// import { useEffect } from "react"
// import { Check } from "lucide-react"
// import group from "../assets/group1.jpg"
// import BannerImage from "../assets/banner-image.webp"
// import AOS from "aos"
// import "aos/dist/aos.css" // Import AOS CSS
// import AnimatedBanner from "./AnimatedBanner"

// const About = () => {
//   const features = [
//     "24/7 Customer Support Available",
//     "Experienced & Professional Drivers",
//     "Multiple Payment Options",
//     "Real-time GPS Tracking",
//     "Comfortable & Clean Vehicles",
//     "Competitive & Transparent Pricing",
//   ]

//   // Initialize AOS
//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // Animation duration
//       once: true, // Whether animation should happen only once
//     })
//   }, [])

//   return (
//     <div className="min-h-screen bg-cab-background dark:bg-cab-background-dark">
//       {/* Hero Section */}
//       <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
//         <img src={BannerImage || "/placeholder.svg"} alt="Luxury Car Service" className="object-cover w-full h-full" />
//         <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black/70 to-black/50">
//           <div className="px-4 text-center" data-aos="fade-up">
//             <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl text-amber-400">About Cab</h1>
//             <p className="max-w-2xl mx-auto text-xl font-bold md:text-2xl text-white/90">
//               Your trusted partner for comfortable and safe rides.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Main Content Section */}
//       <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
//         {/* About Section */}
//         <div className="overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
//           <div className="grid gap-0 md:grid-cols-2">
//             {/* Left Side - Image with yellow top border */}
//             <div className="relative h-full group" data-aos="fade-right">
//               {/* Yellow line at the top of the image div */}
//               <div className="absolute top-0 left-0 right-0 h-1 bg-yellow-500 z-10"></div>
//               <img
//                 className="object-cover w-full h-full transition-all duration-300 transform group-hover:scale-105 group-hover:border-4 group-hover:border-yellow-500"
//                 src={group || "/placeholder.svg"}
//                 alt="Professional Cab Service"
//               />
//               {/* Overlay on hover */}
//               <div className="absolute inset-0 transition-opacity duration-300 bg-yellow-500/20 opacity-0 group-hover:opacity-100"></div>
//             </div>

//             {/* Right Side - Content with yellow top border */}
//             <div className="relative p-8" data-aos="fade-left">
//               {/* Yellow line at the top of the content div */}
//               <div className="absolute top-0 left-0 right-0 h-1 bg-yellow-500 z-10"></div>
//               <h2 className="mb-6 text-2xl font-bold text-cab-text dark:text-cab-text-dark">
//                 Your Trusted Cab Service Partner
//               </h2>
//               <p className="mb-6 text-cab-text dark:text-cab-text-dark">
//                 Welcome to CabHub, your premier destination for reliable and comfortable transportation. Since our
//                 inception, we've been dedicated to revolutionizing the way people travel within and between cities. Our
//                 mission is simple yet powerful: to provide safe, efficient, and affordable cab services that exceed our
//                 customers' expectations.
//               </p>

//               <h3 className="mt-8 mb-4 text-xl font-bold text-cab-text dark:text-cab-text-dark">Why Choose Us?</h3>
//               <div className="space-y-4">
//                 {features.map((feature, index) => (
//                   <div key={index} className="flex items-center space-x-3">
//                     <Check className="w-5 h-5 text-yellow-500" />
//                     <span className="text-cab-text dark:text-cab-text-dark">{feature}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         Values Section
//         <div className="mt-16">
//           <h2 className="mb-8 text-3xl font-bold text-center text-cab-text dark:text-cab-text-dark" data-aos="fade-up">
//             Our Core Values
//           </h2>
//           <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
//             {[
//               {
//                 icon: "🛡️",
//                 title: "Safety First",
//                 description:
//                   "We prioritize the safety of our passengers and drivers above all else, implementing rigorous safety protocols and regular vehicle maintenance.",
//               },
//               {
//                 icon: "⭐",
//                 title: "Customer Satisfaction",
//                 description:
//                   "We strive to exceed our customers' expectations with every ride, ensuring comfort, punctuality, and professional service.",
//               },
//               {
//                 icon: "💡",
//                 title: "Innovation",
//                 description:
//                   "We continuously innovate and adopt new technologies to improve our services and provide a seamless booking experience.",
//               },
//             ].map((value, index) => (
//               <div
//                 key={index}
//                 className="p-8 transition-all duration-300 transform bg-white border-2 border-yellow-200 rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl hover:scale-105"
//                 data-aos="fade-up" // Add animation
//               >
//                 <div className="mb-4 text-4xl text-yellow-500">{value.icon}</div>
//                 <h3 className="mb-4 text-xl font-semibold text-cab-text dark:text-cab-text-dark">{value.title}</h3>
//                 <p className="text-cab-text dark:text-cab-text-dark">{value.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>


//         {/* <AnimatedBanner /> */}

//         {/* Story Section */}
//         <div className="mt-20">
//           <div className="lg:text-center" data-aos="fade-up">
//             <h2 className="text-base font-semibold tracking-wide text-yellow-500 uppercase">Our Story</h2>
//             <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-cab-text dark:text-cab-text-dark sm:text-4xl">
//               A Journey of Excellence
//             </p>
//             <p className="max-w-2xl mt-4 text-xl text-cab-text dark:text-cab-text-dark lg:mx-auto">
//               CabBooker started with a simple idea: to provide reliable, comfortable, and affordable transportation to
//               everyone. Over the years, we've grown into a trusted name in the industry, always putting our customers
//               first.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default About



// {/* Stats Section */}
//         {/* <div className="mt-20">
//           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
//             {[
//               {
//                 icon: FaCar,
//                 title: "Modern Fleet",
//                 value: "100+ Vehicles"
//               },
//               {
//                 icon: FaUsers,
//                 title: "Satisfied Customers",
//                 value: "10,000+"
//               },
//               {
//                 icon: FaShieldAlt,
//                 title: "Safety First",
//                 value: "100% Commitment"
//               }
//             ].map((stat, index) => (
//               <div key={index} className="overflow-hidden bg-white rounded-lg shadow dark:bg-gray-800">
//                 <div className="px-4 py-5 sm:p-6">
//                   <div className="flex items-center">
//                     <div className="flex-shrink-0 p-3 bg-yellow-500 rounded-md">
//                       <stat.icon className="w-6 h-6 text-white" />
//                     </div>
//                     <div className="flex-1 w-0 ml-5">
//                       <dl>
//                         <dt className="text-sm font-medium truncate text-cab-text dark:text-cab-text-dark">
//                           {stat.title}
//                         </dt>
//                         <dd className="flex items-baseline">
//                           <div className="text-2xl font-semibold text-cab-text dark:text-cab-text-dark">
//                             {stat.value}
//                           </div>
//                         </dd>
//                       </dl>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div> */}

