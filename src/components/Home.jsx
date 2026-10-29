import { useRef, useEffect, useState } from "react"
import { FaWhatsappSquare } from "react-icons/fa"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { Clock } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"
import video1 from "../assets/cab4.mp4"
import car from "../assets/car.jpg"
import cars from "../assets/cars.webp"
import { NavLink } from "react-router-dom"

const Home = () => {
  const [activeTab, setActiveTab] = useState("transfer") // 'transfer' or 'hourly'
  const videoRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

 
  const [formData, setFormData] = useState({
    pickup: "",
    drop: "",
    hours: "",
    time: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Generate WhatsApp message and open link
  const handleWhatsAppClick = () => {
    
    if (!formData.pickup || !formData.drop) {
      alert("Please fill in the required fields.");
      return;
    }

    let message = "";
  
    // Transfer Booking Message
    const transferMessage = `🚗 *Transfer Booking*\n📍 *Pick-up Location:* ${formData.pickup}\n📍 *Drop Location:* ${formData.drop}`;
  
    // Hourly Booking Message
    const hourlyMessage = `⏰ *Hourly Booking*\n📍 *Pick-up Location:* ${formData.pickup}\n⏳ *Hours:* ${formData.hours}\n🕒 *Time:* ${formData.time}`;
  
    // Dono tabs ka data ek saath bhejna
    message = `${transferMessage}\n\n\n${hourlyMessage}`;
  
    const phoneNumber = "919265647942"; // Replace with your WhatsApp number
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
    window.open(whatsappURL, "_blank");

    setFormData({
      pickup: "",
      drop: "",
      hours: "",
      time: "",
    });
  };

  // const handleWhatsAppClick = () => {
  //   if (!formData.pickup || !formData.drop) {
  //     alert("Please fill in the required fields.");
  //     return;
  //   }
  
  //   // 🟢 Transfer Booking Message (Properly Formatted)
  //   const transferMessage = 
  //     `🚗 *Transfer Booking* 🚗\n` +
  //     `📍 *Pick-up Location:* ${formData.pickup}\n` +
  //     `📍 *Drop Location:* ${formData.drop}`;
  
  //   // 🟢 Hourly Booking Message (Properly Formatted)
  //   const hourlyMessage = 
  //     `⏰ *Hourly Booking* ⏰\n` +
  //     `📍 *Pick-up Location:* ${formData.pickup}\n` +
  //     `⏳ *Total Hours:* ${formData.hours}\n` +
  //     `🕒 *Time:* ${formData.time}`;
  
  //   // 🟢 Merge Both Messages with a Separator
  //   const message = 
  //     `📢 *Booking Details* 📢\n\n` + 
  //     `${transferMessage}\n\n🔹🔹🔹🔹🔹🔹\n\n` + 
  //     `${hourlyMessage}`;
  
  //   // WhatsApp URL Generation
  //   const phoneNumber = "1234567890"; // Replace with actual WhatsApp number
  //   const encodedMessage = encodeURIComponent(message);
  //   const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  //   window.open(whatsappURL, "_blank");
  
  //   // 🟢 Reset form after submission
  //   setFormData({
  //     pickup: "",
  //     drop: "",
  //     hours: "",
  //     time: "",
  //   });
  // };
  
// };

  

  // Sample banner images for mobile slider
  const bannerImages = [
    {
      image: cars,
      alt: "Man portrait",
    },
    {
      image:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
      alt: "car",
    },
    {
      image: car,
      alt: "Man portrait",
    },
  ]

  // Check device size
  useEffect(() => {
    const checkDeviceSize = () => {
      const width = window.innerWidth
      setIsMobile(width < 640) // Mobile breakpoint
      setIsTablet(width >= 640 && width < 1024) // Tablet breakpoint
    }

    // Check on initial load
    checkDeviceSize()

    // Add event listener for window resize
    window.addEventListener("resize", checkDeviceSize)

    // Cleanup
    return () => window.removeEventListener("resize", checkDeviceSize)
  }, [])

  // Initialize AOS animation library
  useEffect(() => {
    AOS.init({
      duration: 200,
      once: true,
      disable: "mobile", // Disable on mobile for better performance
    })

    // Auto-play video when component mounts (only if not mobile)
    if (videoRef.current && !isMobile) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error)
      })
    }
  }, [isMobile])

  // Auto-rotate slider
  useEffect(() => {
    if (isMobile || isTablet) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % bannerImages.length)
      }, 5000)

      return () => clearInterval(interval)
    }
  }, [isMobile, isTablet, bannerImages.length])

  // Slider navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length)
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section with Video or Image Slider */}
      <div className="relative h-screen w-full overflow-hidden bg-gradient-to-r from-blue-200 to-indigo-200">
        <div className="absolute inset-0">
          {/* Video for large screens */}
          {!isMobile && !isTablet && (
            <video
              ref={videoRef}
              className="object-cover w-full h-full"
              autoPlay
              muted
              playsInline
              loop
              src={video1}
              poster={car} // Fallback image while video loads
            />
          )}

          {/* Image Slider for mobile and tablet */}
          {(isMobile || isTablet) && (
            <div className="relative w-full h-full">
              {/* Slider images */}
              {bannerImages.map((banner, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={banner.image || "/placeholder.svg"}
                    alt={banner.alt}
                    className="object-cover w-full h-full"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
              ))}

              {/* Slider controls */}
              <button
                onClick={prevSlide}
                className="absolute z-10 p-2 text-white transform -translate-y-1/2 bg-black bg-opacity-25 rounded-full left-4 top-1/2 hover:bg-opacity-40 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Previous slide"
              >
                <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute z-10 p-2 text-white transform -translate-y-1/2 bg-black bg-opacity-25 rounded-full right-4 top-1/2 hover:bg-opacity-40 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Next slide"
              >
                <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Dots indicator */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {bannerImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                      index === currentSlide ? "bg-white scale-110" : "bg-white/50 hover:bg-white/70"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Overlay with responsive adjustments */}
          <div
            className={`absolute inset-0 flex flex-col items-center px-4 sm:px-6 md:px-8 
              ${
                isMobile
                  ? "bg-black bg-opacity-40 pt-20 justify-start" // Increased top padding for mobile
                  : isTablet
                    ? "bg-black bg-opacity-50 pt-16 justify-start"
                    : "bg-black bg-opacity-65 justify-center lg:flex-row lg:gap-8 xl:gap-12"
              }`}
          >
            {/* Left side content */}
            <div
              data-aos="fade-up"
              className={`text-center text-white ${
                isMobile ? "w-full mt-10" : isTablet ? "w-full mt-8" : "lg:w-1/2 lg:text-left mt-0"
              }`}
            >
              <div className="inline-block px-3 py-1 mb-4 sm:mb-4 text-xs font-semibold tracking-wider text-black uppercase bg-amber-400 rounded-full sm:px-4 sm:py-1 md:text-sm">
                Premium Transportation
              </div>
              {/* <h1
                className="mb-3 sm:mb-2 text-3xl font-bold text-amber-400 sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-shadow"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Premium Cab <span className="text-white">Service</span>
              </h1> */}

               <h1
                className="mb-2 text-4xl font-bold text-amber-400 sm:text-4xl md:text-6xl lg:text-5xl xl:text-5xl text-shadow"
                data-aos="fade-up"
              >
               Premium Cab <span className="text-white">Service</span>
              </h1>
              <p
                className={`mb-6 sm:mb-4 text-white text-shadow ${
                  isMobile ? "text-sm" : "text-base sm:text-lg md:text-xl lg:text-2xl"
                }`}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Experience luxury and comfort with our premium transportation services
              </p>

              <div className={`flex justify-center lg:justify-start flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-6`}>
                <NavLink to="/services">
                  <button
                    className="px-4 py-2 text-sm font-semibold text-white transition-all duration-300
                      border-2 border-white rounded-xl hover:bg-white hover:text-black hover:shadow-lg transform hover:scale-105
                      sm:px-5 sm:py-2.5 md:px-6 md:py-3 md:text-base"
                  >
                    Explore Our Services
                  </button>
                </NavLink>
              </div>
            </div>

            {/* Right side booking form - More transparent on mobile */}
            <div className={`w-full max-w-md lg:w-auto ${isMobile ? "mt-8" : isTablet ? "mt-6" : "mt-8 lg:mt-0"}`}>
              <div
                className={`p-4 sm:p-5 md:p-6 lg:p-8 transition-all duration-500 transform shadow-xl rounded-2xl 
                  hover:shadow-2xl border border-white/20 ${
                    isMobile
                      ? "bg-gradient-to-br from-black/40 via-gray-100/30 to-black/10 backdrop-blur-sm"
                      : isTablet
                        ? "bg-gradient-to-br from-black/45 via-gray-300/35 to-black/15 backdrop-blur-sm"
                        : "bg-gradient-to-br from-black/50 via-gray-600/60 to-black/0 backdrop-blur-sm"
                  }`}
              >
                {/* Tab buttons */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4">
                  <button
                    onClick={() => setActiveTab("transfer")}
                    className={`flex items-center justify-center gap-1 p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 ${
                      activeTab === "transfer"
                        ? "bg-white text-black shadow-lg scale-[1.02] border-2 border-amber-400"
                        : "bg-black/40 text-white hover:bg-black/60"
                    }`}
                  >
                    <span role="img" aria-label="car" className="text-sm sm:text-base">
                      🚗
                    </span>
                    <span className="text-xs sm:text-sm md:text-base">TRANSFER</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("hourly")}
                    className={`flex items-center justify-center gap-1 p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 ${
                      activeTab === "hourly"
                        ? "bg-white text-black shadow-lg scale-[1.02] border-2 border-amber-400"
                        : "bg-black/40 text-white hover:bg-black/60"
                    }`}
                  >
                    <span role="img" aria-label="clock" className="text-sm sm:text-base">
                      ⏰
                    </span>
                    <span className="text-xs sm:text-sm md:text-base">HOURLY BOOKING</span>
                  </button>
                </div>

                {/* Transfer tab content */}
                <div
                  className={`space-y-3 sm:space-y-4 transition-all duration-500 ${activeTab === "transfer" ? "block" : "hidden"}`}
                >
                  <h2 className="mb-2 text-base sm:text-lg md:text-xl font-bold text-center text-white sm:mb-3 sm:mt-2">
                    INSTANT TRANSFER QUOTE
                  </h2>
                  <div className="space-y-3">
                    <div className="relative transition-all duration-300 transform hover:scale-[1.02]">
                      <span className="absolute text-base sm:text-lg -translate-y-1/2 left-3 top-1/2">📍</span>
                      <input
                       type="text"
                       name="pickup"
                       placeholder="Pick me from"
                       value={formData.pickup}
                       onChange={handleChange}
                        className="w-full py-2 pl-10 pr-3 text-white transition-all duration-300 border-2 
                          sm:py-2.5 md:py-3 rounded-xl border-white/30 bg-black/20 
                          focus:border-white/50 focus:outline-none placeholder-white/70
                          text-sm sm:text-base"
                      />
                    </div>
                    <div className="relative transition-all duration-300 transform hover:scale-[1.02]">
                      <span className="absolute text-base sm:text-lg -translate-y-1/2 left-3 top-1/2">📍</span>
                      <input
                       type="text"
                       name="drop"
                       placeholder="Drop me at"
                       value={formData.drop}
                       onChange={handleChange}
                        className="w-full py-2 pl-10 pr-3 text-white transition-all duration-300 border-2 
                          sm:py-2.5 md:py-3 rounded-xl border-white/30 bg-black/20 
                          focus:border-white/50 focus:outline-none placeholder-white/70
                          text-sm sm:text-base"
                      />
                    </div>
                  </div>
                </div>

                {/* Hourly Booking Content */}
                <div
                  className={`space-y-3 sm:space-y-4 transition-all duration-500 ${activeTab === "hourly" ? "block" : "hidden"}`}
                >
                  <h2 className="mb-2 text-base sm:text-lg md:text-xl font-bold text-center text-white sm:mb-3 sm:mt-2">
                    HOURLY BOOKING QUOTE
                  </h2>
                  <div className="space-y-3">
                    <div className="relative transition-all duration-300 transform hover:scale-[1.02]">
                      <span className="absolute text-base sm:text-lg -translate-y-1/2 left-3 top-1/2">📍</span>
                      <input
                        type="text"
                        name="pickup"
                        placeholder="Pick-up location"
                        value={formData.pickup}
                        onChange={handleChange}
                        className="w-full py-2 pl-10 pr-3 text-white transition-all duration-300 border-2 
                          sm:py-2.5 md:py-3 rounded-xl border-white/30 bg-black/20 
                          focus:border-white/50 focus:outline-none placeholder-white/70
                          text-sm sm:text-base"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      <div className="relative transition-all duration-300 transform hover:scale-[1.02]">
                        <input
                         type="number"
                         name="hours"
                         placeholder="Hours"
                         min="1"
                         value={formData.hours}
                         onChange={handleChange}
                
                          className="w-full py-2 px-3 text-white transition-all duration-300 border-2 
                            sm:py-2.5 md:py-3 rounded-xl border-white/30 bg-black/20 
                            focus:border-white/50 focus:outline-none placeholder-white/70
                            text-sm sm:text-base"
                        />
                      </div>
                      <div className="relative transition-all duration-300 transform hover:scale-[1.02]">
                        <input
                          type="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full py-2 px-3 text-white transition-all duration-300 border-2 
                            sm:py-2.5 md:py-3 rounded-xl border-white/30 bg-black/20 
                            focus:border-white/50 focus:outline-none placeholder-white/70
                            text-sm sm:text-base"
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                          <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Button - Common for both tabs */}
                <button   onClick={handleWhatsAppClick}
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-2 mt-4 font-semibold text-white 
                    transition-all duration-300 transform bg-green-500 w-full
                    sm:py-2.5 md:py-3 md:px-4 rounded-xl sm:rounded-2xl 
                    hover:scale-[1.02] hover:bg-green-600 hover:shadow-lg 
                    border-2 border-green-400 text-sm sm:text-base"
                >
                  <FaWhatsappSquare className="text-base sm:text-lg md:text-xl" />
                  <span>Connect With WhatsApp</span>
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home





// import { useRef, useEffect, useState } from "react"
// import { FaWhatsappSquare } from "react-icons/fa"
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
// import { Clock } from "lucide-react"
// import AOS from "aos"
// import "aos/dist/aos.css"
// import video1 from "../assets/cab4.mp4"
// import car from "../assets/car.jpg"
// import cars from "../assets/cars.webp"
// import { NavLink } from "react-router-dom"

// const Home = () => {
//   const [activeTab, setActiveTab] = useState("transfer") // 'transfer' or 'hourly'
//   const videoRef = useRef(null)
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [isMobile, setIsMobile] = useState(false)

//   // Sample banner images for mobile slider
//   const bannerImages = [
//     {
//       image: cars,
//       alt: "Man portrait",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
//       alt: "car",
//     },

//     {
//       image: car,
//       alt: "Man portrait",
//     },
//     // {
//     //   image: dubai,
//     //   alt: "Dubai skyline",
//     // },
//     // {
//     //   image: slider2,
//     //   alt: "Man portrait",
//     // },
//   ]

//   // Check if device is mobile
//   useEffect(() => {
//     const checkIfMobile = () => {
//       setIsMobile(window.innerWidth <= 768) // Changed from 1024 to 768 to better target mobile devices
//     }

//     // Check on initial load
//     checkIfMobile()

//     // Add event listener for window resize
//     window.addEventListener("resize", checkIfMobile)

//     // Cleanup
//     return () => window.removeEventListener("resize", checkIfMobile)
//   }, [])

//   // Initialize AOS animation library
//   useEffect(() => {
//     AOS.init({
//       duration: 200,
//       once: true,
//     })

//     // Auto-play video when component mounts (only if not mobile)
//     if (videoRef.current && !isMobile) {
//       videoRef.current.play()
//     }
//   }, [isMobile])

//   // Auto-rotate slider
//   useEffect(() => {
//     if (isMobile) {
//       const interval = setInterval(() => {
//         setCurrentSlide((prev) => (prev + 1) % bannerImages.length)
//       }, 5000)

//       return () => clearInterval(interval)
//     }
//   }, [isMobile, bannerImages.length])

//   // Slider navigation
//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % bannerImages.length)
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length)
//   }

//   return (
//     <div>
//       {/* Hero Section with Video or Image Slider */}
//       <div className="relative h-screen transform bg-gradient-to-r from-blue-200 to-indigo-200  overflow-hidden">
//         <div className="absolute inset-0">
//           {/* Video for large screens */}
//           {!isMobile && (
//             <video ref={videoRef} className="object-cover w-full h-full" autoPlay muted playsInline loop src={video1} />
//           )}

//           {/* Image Slider for mobile */}
//           {isMobile && (
//             <div className="relative w-full h-full">
//               {/* Slider images */}
//               {bannerImages.map((banner, index) => (
//                 <div
//                   key={index}
//                   className={`absolute inset-0 transition-opacity duration-1000 ${
//                     index === currentSlide ? "opacity-100" : "opacity-0"
//                   }`}
//                 >
//                   <img
//                     src={banner.image || "/placeholder.svg"}
//                     alt={banner.alt}
//                     className="object-cover w-full h-full"
//                   />
//                 </div>
//               ))}

//               {/* Slider controls */}
//               <button
//                 onClick={prevSlide}
//                 className="absolute z-10 p-2 text-white transform -translate-y-1/2 bg-black bg-opacity-25 rounded-full left-4 top-1/2"
//                 aria-label="Previous slide"
//               >
//                 <FaChevronLeft />
//               </button>
//               <button
//                 onClick={nextSlide}
//                 className="absolute z-10 p-2 text-white transform -translate-y-1/2 bg-black bg-opacity-25 rounded-full right-4 top-1/2"
//                 aria-label="Next slide"
//               >
//                 <FaChevronRight />
//               </button>

//               {/* Dots indicator */}
//               <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
//                 {bannerImages.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentSlide(index)}
//                     className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
//                     aria-label={`Go to slide ${index + 1}`}
//                   />
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Overlay - Less opacity on mobile to show more of the background image */}
//           <div
//             className={`absolute inset-0 flex flex-col items-center px-4 ${
//               isMobile
//                 ? "bg-black bg-opacity-40 pt-12 justify-start" // Reduced top padding for mobile
//                 : "bg-black bg-opacity-65 justify-center lg:flex-row lg:gap-8" // Desktop: Original styling
//             }`}
//           >
//             {/* Left side content */}
//             <div data-aos="fade-up" className="text-center text-white lg:w-1/2 lg:text-left mt-10">
//               <div className="inline-block px-4 py-1 mb-4 text-xs font-semibold tracking-wider text-black uppercase bg-amber-400 rounded-full">
//                 Premium Transportation
//               </div>
//               <h1
//                 className="mb-2 text-4xl font-bold text-amber-400 sm:text-4xl md:text-6xl lg:text-5xl xl:text-5xl text-shadow"
//                 data-aos="fade-up"
//               >
//                 Premium Cab <span className="text-white">Service</span>
//               </h1>
//               <p className="hidden mb-4 text-xl text-white md:block md:text-2xl text-shadow" data-aos="fade-up">
//                 Experience luxury and comfort with our premium transportation services
//               </p>

//               <div className="hidden md:flex flex-wrap gap-4 mt-6">
//                 {/* <button className="px-6 py-3 font-semibold text-black transition-all duration-300 bg-amber-400 rounded-xl
//                  hover:bg-amber-500 hover:shadow-lg transform hover:scale-105">
//                   Service
//                 </button> */}
//                 <NavLink to="/services" mobile scrolled={true}>
//                   <button
//                     className="px-6 py-3 font-semibold text-white transition-all duration-300
//                  border-2 border-white rounded-xl hover:bg-white hover:text-black hover:shadow-lg transform hover:scale-105"
//                   >
//                     Explore Our Services
//                   </button>
//                 </NavLink>
//               </div>
//             </div>

//             {/* Right side booking form - More transparent on mobile */}
//             <div className="w-full max-w-md lg:w-auto mt-6 lg:mt-0 ">
//               <div
//                 className={`p-6 transition-all duration-500 transform shadow-2xl rounded-2xl lg:p-8 hover:scale-102 border-white/55 ${
//                   isMobile
//                     ? "bg-gradient-to-br from-black/30 via-gray-100/40 to-black/0 backdrop-blur-sm" // More transparent on mobile
//                     : "bg-gradient-to-br from-black/50 via-gray-600/60 to-black/0 backdrop-blur-sm" // Original styling
//                 }`}
//               >
//                 {/* Tab buttons */}
//                 <div className="grid grid-cols-2 gap-4 mb-4">
//                   <button
//                     onClick={() => setActiveTab("transfer")}
//                     className={`flex items-center justify-center gap-1 p-2 lg:p-4 rounded-2xl font-semibold transition-all duration-300 ${
//                       activeTab === "transfer"
//                         ? "bg-white text-black shadow-lg scale-105 border-2 border-amber-400"
//                         : "bg-black/40 text-white hover:bg-black/60"
//                     }`}
//                   >
//                     <span role="img" aria-label="car" className="text-sm lg:text-base">
//                       🚗
//                     </span>
//                     <span className="text-xs lg:text-base">TRANSFER</span>
//                   </button>
//                   <button
//                     onClick={() => setActiveTab("hourly")}
//                     className={`flex items-center justify-center gap-1 p-2 lg:p-4 rounded-2xl font-semibold transition-all duration-300 ${
//                       activeTab === "hourly"
//                         ? "bg-white text-black shadow-lg scale-105 border-2 border-amber-400"
//                         : "bg-black/40 text-white hover:bg-black/60"
//                     }`}
//                   >
//                     <span role="img" aria-label="clock" className="text-sm lg:text-base">
//                       ⏰
//                     </span>
//                     <span className="text-xs lg:text-base">HOURLY BOOKING</span>
//                   </button>
//                 </div>

//                 {/* Transfer tab content */}
//                 <div
//                   className={`space-y-4 transition-all duration-500 ${activeTab === "transfer" ? "block" : "hidden"}`}
//                 >
//                   <h2 className="mb-2 text-lg lg:text-xl font-bold text-center text-white sm:mb-4 sm:mt-4">
//                     INSTANT TRANSFER QUOTE
//                   </h2>
//                   <div className="space-y-3">
//                     <div className="relative transition-all duration-300 transform hover:scale-102">
//                       <span className="absolute text-lg -translate-y-1/2 left-3 top-1/2">📍</span>
//                       <input
//                         placeholder="Pick me from"
//                         className="w-full py-2 pl-10 pr-3 text-white transition-all duration-300 border-2 lg:py-3 rounded-xl border-white/30 bg-black/20 focus:border-white/50 focus:outline-none placeholder-white/70"
//                       />
//                     </div>
//                     <div className="relative transition-all duration-300 transform hover:scale-102">
//                       <span className="absolute text-lg -translate-y-1/2 left-3 top-1/2">📍</span>
//                       <input
//                         placeholder="Drop me at"
//                         className="w-full py-2 pl-10 pr-3 text-white transition-all duration-300 border-2 lg:py-3 rounded-xl border-white/30 bg-black/20 focus:border-white/50 focus:outline-none placeholder-white/70"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Hourly Booking Content */}
//                 <div className={`space-y-4 transition-all duration-500 ${activeTab === "hourly" ? "block" : "hidden"}`}>
//                   <h2 className="mb-2 text-lg lg:text-xl font-bold text-center text-white sm:mb-4 sm:mt-4">
//                     HOURLY BOOKING QUOTE
//                   </h2>
//                   <div className="space-y-3">
//                     <div className="relative transition-all duration-300 transform hover:scale-102">
//                       <span className="absolute text-lg -translate-y-1/2 left-3 top-1/2">📍</span>
//                       <input
//                         placeholder="Pick up location"
//                         className="w-full py-2 pl-10 pr-3 text-white transition-all duration-300 border-2 lg:py-3 rounded-xl border-white/30 bg-black/20 focus:border-white/50 focus:outline-none placeholder-white/70"
//                       />
//                     </div>
//                     <div className="grid grid-cols-2 gap-3">
//                       <div className="relative transition-all duration-300 transform hover:scale-102">
//                         <input
//                           type="number"
//                           placeholder="Hours"
//                           min="1"
//                           className="w-full py-2 px-3 text-white transition-all duration-300 border-2 lg:py-3
//                            rounded-xl border-white/30 bg-black/20 focus:border-white/50 focus:outline-none placeholder-white/70"
//                         />
//                       </div>
//                       {/* <div className="relative transition-all duration-300 transform hover:scale-102">
//                         <input
//                           type="time"
//                           className="w-full py-2 px-3 text-white transition-all duration-300 border-2 lg:py-3 
//                           rounded-xl border-white/30 bg-black/20 focus:border-white/50 focus:outline-none placeholder-white/70"
//                         />

//                       </div> */}

//                       <div className="relative transition-all duration-300 transform hover:scale-102">
//                         <input
//                           type="time"
//                           className="w-full py-2 px-3 text-white transition-all duration-300 border-2 lg:py-3 
//              rounded-xl border-white/30 bg-black/20 focus:border-white/50 focus:outline-none placeholder-white/70"
//                         />
//                         <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
//                           <Clock className="h-5 w-5 text-white" />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* WhatsApp Button - Common for both tabs */}
//                 <a
//                   href="https://wa.me/1234567890"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center justify-center gap-2 px-3 py-2 mt-4 font-semibold text-white transition-all duration-300 transform bg-green-500 lg:py-3 lg:px-4 rounded-2xl hover:scale-105 hover:bg-green-600 hover:shadow-lg border-2 border-green-400"
//                 >
//                   <FaWhatsappSquare className="text-lg lg:text-xl" />
//                   <span className="text-sm lg:text-base">Connect With WhatsApp</span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Home







// only cab video==================================================================================================================================

// "use client"

// import { useRef, useEffect, useState } from "react"
// import { FaWhatsappSquare } from "react-icons/fa"
// import AOS from "aos"
// import "aos/dist/aos.css"
// import video1 from "../assets/cab4.mp4"

// const Home = () => {
//   const [activeTab, setActiveTab] = useState("transfer") // 'transfer' or 'hourly'
//   const videoRef = useRef(null)

//   // Initialize AOS animation library
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//     })

//     // Auto-play video when component mounts
//     if (videoRef.current) {
//       videoRef.current.play()
//     }
//   }, [])

//   return (
//     <div>
//       {/* Hero Section with Video */}
//       <div className="relative h-screen transform bg-gradient-to-r from-blue-200 to-indigo-200 rounded-3xl">
//         <div className="absolute inset-0">
//           <video ref={videoRef} className="object-cover w-full h-full" autoPlay muted playsInline loop src={video1} />

//           <div className="absolute inset-0 flex flex-col items-center justify-center px-4 bg-black bg-opacity-65 lg:flex-row lg:gap-8">
//             {/* Left side content */}
//             <div data-aos="fade-up" className="text-center text-white lg:w-1/2 lg:text-left">
//               <h1
//                 className="mb-2  text-2xl font-bold text-amber-400 sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl text-shadow"
//                 data-aos="fade-up"
//               >
//                 Premium Cab <span className="text-white">Service</span> 
//               </h1>
//               <p className="hidden mb-8 text-xl text-white md:block md:text-2xl text-shadow" data-aos="fade-up">
//                 Experience luxury and comfort with our premium transportation services
//               </p>
//             </div>

//             {/* Right side booking form */}
//             <div className="w-full max-w-md lg:w-auto">
//               <div className="p-6 transition-all duration-500 transform shadow-2xl
//                bg-gradient-to-br from-black/50 via-gray-700/60 to-black/80 backdrop-blur-sm rounded-2xl lg:p-8 hover:scale-102 border-white/55">
//                 {/* Tab buttons */}
//                 <div className="grid grid-cols-2 gap-4 mb-8">
//                   <button
//                     onClick={() => setActiveTab("transfer")}
//                     className={`flex items-center justify-center gap-2 p-3 lg:p-4 rounded-xl font-semibold transition-all duration-300 ${
//                       activeTab === "transfer"
//                         ? "bg-white text-black shadow-lg scale-105"
//                         : "bg-black/40 text-white hover:bg-black/60"
//                     }`}
//                   >
//                     <span role="img" aria-label="car">
//                       🚗
//                     </span>
//                     TRANSFER
//                   </button>
//                   <button
//                     onClick={() => setActiveTab("hourly")}
//                     className={`flex items-center justify-center gap-2 p-3 lg:p-4 rounded-xl font-semibold transition-all duration-300 ${
//                       activeTab === "hourly"
//                         ? "bg-white text-black shadow-lg scale-105"
//                         : "bg-black/40 text-white hover:bg-black/60"
//                     }`}
//                   >
//                     <span role="img" aria-label="clock">
//                       ⏰
//                     </span>
//                     HOURLY BOOKING
//                   </button>
//                 </div>

//                 {/* Transfer tab content */}
//                 <div
//                   className={`space-y-6 transition-all duration-500 ${activeTab === "transfer" ? "block" : "hidden"}`}
//                 >
//                   <h2 className="mb-4 text-2xl font-bold text-center text-white sm:mb-6 sm:mt-8">
//                     INSTANT TRANSFER QUOTE
//                   </h2>
//                   <div className="space-y-4">
//                     <div className="relative transition-all duration-300 transform hover:scale-102">
//                       <span className="absolute text-xl -translate-y-1/2 left-4 top-1/2">📍</span>
//                       <input
//                         placeholder="Pick me from"
//                         className="w-full py-3 pl-12 pr-4 text-white transition-all duration-300 border-2 lg:py-4 rounded-xl border-white/30 bg-black/20 focus:border-white/50 focus:outline-none placeholder-white/70"
//                       />
//                     </div>
//                     <div className="relative transition-all duration-300 transform hover:scale-102">
//                       <span className="absolute text-xl -translate-y-1/2 left-4 top-1/2">📍</span>
//                       <input
//                         placeholder="Drop me at"
//                         className="w-full py-3 pl-12 pr-4 text-white transition-all duration-300 border-2 lg:py-4 rounded-xl border-white/30 bg-black/20 focus:border-white/50 focus:outline-none placeholder-white/70"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Hourly Booking Content */}
//                 <div className={`space-y-6 transition-all duration-500 ${activeTab === "hourly" ? "block" : "hidden"}`}>
//                   <h2 className="mb-4 text-2xl font-bold text-center text-white sm:mb-6 sm:mt-8">
//                     HOURLY BOOKING QUOTE
//                   </h2>
//                   <div className="space-y-4">
//                     <div className="relative transition-all duration-300 transform hover:scale-102">
//                       <span className="absolute text-xl -translate-y-1/2 left-4 top-1/2">📍</span>
//                       <input
//                         placeholder="Pick up location"
//                         className="w-full py-3 pl-12 pr-4 text-white transition-all duration-300 border-2 lg:py-4 rounded-xl border-white/30 bg-black/20 focus:border-white/50 focus:outline-none placeholder-white/70"
//                       />
//                     </div>
//                     <div className="grid grid-cols-2 gap-4">
//                       <div className="relative transition-all duration-300 transform hover:scale-102">
//                         <input
//                           type="number"
//                           placeholder="Hours"
//                           min="1"
//                           className="w-full px-4 py-3 text-white transition-all duration-300 border-2 lg:py-4 rounded-xl border-white/30 bg-black/20 focus:border-white/50 focus:outline-none placeholder-white/70"
//                         />
//                       </div>
//                       <div className="relative transition-all duration-300 transform hover:scale-102">
//                         <input
//                           type="time"
//                           className="w-full px-4 py-3 text-white transition-all duration-300 border-2 lg:py-4 rounded-xl border-white/30 bg-black/20 focus:border-white/50 focus:outline-none placeholder-white/70"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* WhatsApp Button - Common for both tabs */}
//                 <a
//                   href="https://wa.me/1234567890"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center justify-center gap-3 px-6 py-3 mt-8 font-semibold text-white transition-all duration-300 transform bg-green-500 lg:py-4 rounded-xl hover:scale-105 hover:bg-green-600 hover:shadow-lg"
//                 >
//                   <FaWhatsappSquare className="text-2xl" />
//                   <span className="text-lg">Connect With WhatsApp</span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Home

// with video========================================================================================================================================


// import { useState, useEffect } from "react"
// import { FaWhatsappSquare } from "react-icons/fa"
// import slider2 from "../assets/man.webp"
// import dubai from "../assets/dubai.webp"
// import AOS from "aos"
// import "aos/dist/aos.css"

// const slides = [
//   {
//     image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
//     title: "Ride in Style",
//     description: "Experience luxury with our premium cab service",
//   },
//   {
//     image: dubai,
//     title: "Safe and Reliable",
//     description: "Your safety is our top priority",
//   },
//   {
//     image: slider2,
//     title: "Affordable Rates",
//     description: "Quality service that won't break the bank",
//   },
// ]

// const Home = () => {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [activeTab, setActiveTab] = useState("transfer") // 'transfer' or 'hourly'

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
//     }, 2000)
//     return () => clearInterval(timer)
//   }, [])

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//     })
//   }, [])

//   return (
//     <div>
//       {/* Hero Section */}
//       <div className="relative h-screen transform bg-gradient-to-r from-blue-200 to-indigo-200 rounded-3xl">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-1000 ${
//               index === currentSlide ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="object-cover w-full h-full" />
//             <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4 bg-black bg-opacity-65 lg:flex-row lg:gap-8">
//               {/* Left side content */}
//               <div
//                 data-aos="fade-up"
//                 className="px-6 py-2 text-center text-white lg:w-1/2 lg:px-12 lg:text-left sm:mt-8"
//               >
//                 <h1 className="mb-4 text-4xl font-bold text-amber-400 md:text-6xl text-shadow" data-aos="fade-up">
//                   {slide.title}
//                 </h1>
//                 <p className="mb-8 text-xl text-white md:text-2xl text-shadow" data-aos="fade-up">
//                   {slide.description}
//                 </p>
//               </div>

//               {/* Right side booking form */}
//               <div className="w-full max-w-md lg:w-auto">
//                 <div className="p-6 transition-all duration-500 transform shadow-2xl bg-gradient-to-br from-black/50 via-gray-900/60 to-black/50 backdrop-blur-sm rounded-2xl lg:p-8 hover:scale-102 border-white/55">
//                   {/* Tab buttons */}
//                   <div className="grid grid-cols-2 gap-4 mb-8">
//                     <button
//                       onClick={() => setActiveTab("transfer")}
//                       className={`flex items-center justify-center gap-2 p-3 lg:p-4 rounded-xl font-semibold transition-all duration-300 ${
//                         activeTab === "transfer"
//                           ? "bg-white text-black shadow-lg scale-105"
//                           : "bg-black/40 text-white hover:bg-black/60"
//                       }`}
//                     >
//                       <span role="img" aria-label="car">
//                         🚗
//                       </span>
//                       TRANSFER
//                     </button>
//                     <button
//                       onClick={() => setActiveTab("hourly")}
//                       className={`flex items-center justify-center gap-2 p-3 lg:p-4 rounded-xl font-semibold transition-all duration-300 ${
//                         activeTab === "hourly"
//                           ? "bg-white text-black shadow-lg scale-105"
//                           : "bg-black/40 text-white hover:bg-black/60"
//                       }`}
//                     >
//                       <span role="img" aria-label="clock">
//                         ⏰
//                       </span>
//                       HOURLY BOOKING
//                     </button>
//                   </div>

//                   {/* Transfer tab content */}
//                   <div
//                     className={`space-y-6 transition-all duration-500 ${activeTab === "transfer" ? "block" : "hidden"}`}
//                   >
//                     <h2 className="mb-4 text-2xl font-bold text-center text-white sm:mb-6 sm:mt-8">INSTANT TRANSFER QUOTE</h2>
//                     <div className="space-y-4">
//                       <div className="relative transition-all duration-300 transform hover:scale-102">
//                         <span className="absolute text-xl -translate-y-1/2 left-4 top-1/2">📍</span>
//                         <input
//                           placeholder="Pick me from"
//                           className="w-full py-3 pl-12 pr-4 text-white transition-all duration-300 border-2 lg:py-4 rounded-xl border-white/30 bg-black/20 focus:border-white/50 focus:outline-none placeholder-white/70"
//                         />
//                       </div>
//                       <div className="relative transition-all duration-300 transform hover:scale-102">
//                         <span className="absolute text-xl -translate-y-1/2 left-4 top-1/2">📍</span>
//                         <input
//                           placeholder="Drop me at"
//                           className="w-full py-3 pl-12 pr-4 text-white transition-all duration-300 border-2 lg:py-4 rounded-xl border-white/30 bg-black/20 focus:border-white/50 focus:outline-none placeholder-white/70"
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   {/* Hourly Booking Content */}
//                   <div
//                     className={`space-y-6 transition-all duration-500 ${activeTab === "hourly" ? "block" : "hidden"}`}
//                   >
//                     <h2 className="mb-4 text-2xl font-bold text-center text-white sm:mb-6 sm:mt-8">HOURLY BOOKING QUOTE</h2>
//                     <div className="space-y-4">
//                       <div className="relative transition-all duration-300 transform hover:scale-102">
//                         <span className="absolute text-xl -translate-y-1/2 left-4 top-1/2">📍</span>
//                         <input
//                           placeholder="Pick up location"
//                           className="w-full py-3 pl-12 pr-4 text-white transition-all duration-300 border-2 lg:py-4 rounded-xl border-white/30 bg-black/20 focus:border-white/50 focus:outline-none placeholder-white/70"
//                         />
//                       </div>
//                       <div className="grid grid-cols-2 gap-4">
//                         <div className="relative transition-all duration-300 transform hover:scale-102">
//                           <input
//                             type="number"
//                             placeholder="Hours"
//                             min="1"
//                             className="w-full px-4 py-3 text-white transition-all duration-300 border-2 lg:py-4 rounded-xl border-white/30 bg-black/20 focus:border-white/50 focus:outline-none placeholder-white/70"
//                           />
//                         </div>
//                         <div className="relative transition-all duration-300 transform hover:scale-102">
//                           <input
//                             type="time"
//                             className="w-full px-4 py-3 text-white transition-all duration-300 border-2 lg:py-4 rounded-xl border-white/30 bg-black/20 focus:border-white/50 focus:outline-none placeholder-white/70"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* WhatsApp Button - Common for both tabs */}
//                   <a
//                     href="https://wa.me/1234567890"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center justify-center gap-3 px-6 py-3 mt-8 font-semibold text-white transition-all duration-300 transform bg-green-500 lg:py-4 rounded-xl hover:scale-105 hover:bg-green-600 hover:shadow-lg"
//                   >
//                     <FaWhatsappSquare className="text-2xl" />
//                     <span className="text-lg">Connect With WhatsApp</span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}

//         {/* Navigation Dots */}
//         <div className="absolute flex space-x-2 transform -translate-x-1/2 bottom-6 left-1/2">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 index === currentSlide ? "bg-yellow-500 scale-125" : "bg-white/50"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Home






{
  /* Stats Section */
}
{
  /* <div className="bg-white dark:bg-gray-900">
      <div className="relative z-10 px-4 mx-auto -mt-24 max-w-7xl sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: FaCar, title: "Modern Fleet", value: "100+ Vehicles" },
            { icon: FaUsers, title: "Satisfied Customers", value: "10,000+" },
            { icon: FaShieldAlt, title: "Safety First", value: "100% Commitment" },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 transition-all duration-500 transform bg-white shadow-xl dark:bg-gray-900 rounded-2xl hover:scale-105"
            >
              <div className="flex items-center">
                <div className="flex-shrink-0 p-4 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl">
                  <stat.icon className="w-8 h-8 text-white " />
                </div>
                <div className="flex-1 w-0 ml-5 ">
                  <dl className="">
                    <dt className="text-sm font-medium text-gray-500 truncate ">
                      {stat.title}
                    </dt>
                    <dd className="text-2xl font-bold text-gray-900">{stat.value}</dd>
                  </dl>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div> */
}
{
  /* End Stats Section */
}

