import { FaTaxi, FaPlane, FaShuttleVan, FaCar, FaWhatsappSquare } from "react-icons/fa"
import corporatelimo2 from "../assets/corporatelimo2-1.jpg"
import woman from "../assets/woman-traveling.webp"
import weddingcab1 from "../assets/wedding-cab1.jpg"
import Banner from "../assets/slider3.jpg"
import AOS from "aos"
import "aos/dist/aos.css" // Import AOS CSS
import { useEffect } from "react"
import { CheckCircle } from "lucide-react"
import CountValue from "./CountValue"

const services = [
  {
    icon: <FaTaxi className="h-10 w-10" />,
    title: "City Taxi",
    description: "Quick and reliable rides within the city.",
  },
  {
    icon: <FaPlane className="h-10 w-10" />,
    title: "Airport Transfer",
    description: "Comfortable rides to and from the airport.",
  },
  {
    icon: <FaShuttleVan className="h-10 w-10" />,
    title: "Group Travel",
    description: "Spacious vans for group outings and events.",
  },
  {
    icon: <FaCar className="h-10 w-10" />,
    title: "Luxury Rides",
    description: "Premium vehicles for special occasions.",
  },
]

const services1 = [
  {
    title: "Airport Transfer Services",
    description:
      "Experience hassle-free airport transfers with our premium service. Our professional drivers ensure timely pickups and drop-offs, helping you start or end your journey stress-free. Enjoy comfortable vehicles, flight tracking, and 24/7 support.",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
  },
  {
    title: "Corporate Transportation",
    description:
      "Elevate your business travel with our corporate transportation solutions. We provide reliable, professional service for executives and teams. From meetings to events, we ensure punctuality and comfort with our premium fleet.",
    image: corporatelimo2,
  },
  {
    title: "Wedding & Special Events",
    description:
      "Make your special day even more memorable with our luxury transportation services. We offer elegant vehicles and professional chauffeurs to ensure your wedding or special event transportation is perfect in every way.",
    image: weddingcab1,
  },
  {
    title: "Group Service",
    description:
      "Enjoy the flexibility of our hourly chauffeur service for business meetings, shopping trips, or city tours. Our experienced drivers are at your disposal, providing professional and personalized service for as long as you need.",
    image: woman,
  },
]

const corporateServices = [
  {
    title: "Corporate Accounts",
    description: "Special accounts for businesses with customized billing options",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80",
  },
  {
    title: "Event Transportation",
    description: "Organized transport solutions for corporate events",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80",
  },
  {
    title: "Airport Transfers",
    description: "Reliable airport pickup and drop-off services",
    image: "https://images.unsplash.com/photo-1543785734-4b6e564642f8?auto=format&fit=crop&q=80",
  },
]

// Update the ServiceCard component to be more mobile-friendly
const ServiceCard = ({ title, description, image, isReversed }) => {
  return (
    <div
      id="services"
      className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-3 p-2 sm:p-4 md:p-6 rounded-xl`}
    >
      {/* Image Section */}
      <div className="w-full md:w-1/2 overflow-hidden rounded-lg relative group">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-40 sm:h-48 md:h-64 lg:h-96 object-cover rounded-lg shadow-lg transform transition-all duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-yellow-400/0 group-hover:bg-yellow-400/30 transition-all duration-300 rounded-lg"></div>
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 mt-3 md:mt-0">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4">{title}</h3>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  )
}

// Update the FeatureBox component for better mobile display
const FeatureBox = ({ icon, title, description }) => {
  return (
    <div
      className="flex flex-col items-center text-center p-3 sm:p-4 md:p-6 rounded-lg bg-black/90 border
       border-amber-400/30 shadow-lg transform transition-all duration-500 hover:shadow-amber-200 hover:translate-y-[-8px]"
    >
      <div
        className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-amber-400 rounded-full flex items-center 
      justify-center shadow-md mb-3 md:mb-4 transform transition-all duration-500 hover:rotate-12"
      >
        {icon}
      </div>
      <h3 className="text-amber-400 font-bold text-base sm:text-lg mb-2 sm:mb-3">{title}</h3>
      <p className="text-white/80 text-xs sm:text-sm">{description}</p>
    </div>
  )
}

// Update the Services component for better mobile responsiveness
const Services = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-in-out",
      delay: 100,
    })
  }, [])

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen overflow-hidden">
      {/* Enhanced Banner Section */}
      <div className="relative w-full overflow-hidden h-[60vh] sm:h-[60vh] md:h-[70vh] lg:h-[90vh]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={Banner || "/placeholder.svg"}
            alt="Premium transportation services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90"></div>
        </div>

        {/* Content Container - Moved lower by adding more top padding */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 pb-16 sm:pb-24 pt-20 sm:pt-24 md:pt-28 lg:pt-32 max-w-7xl mx-auto">
          {/* Main Heading with animated underline */}
          <div className="text-center" data-aos="fade-up">
            <div className="inline-block">
              <span className="inline-block text-white text-sm sm:text-lg font-medium tracking-wider mb-2 uppercase">
                Premium Transportation
              </span>
              <div className="h-1 w-16 sm:w-24 bg-amber-400 mx-auto rounded-full animate-pulse"></div>
            </div>
            <h2 className="text-amber-400 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl mt-3 sm:mt-4 drop-shadow-lg">
              Our Services
            </h2>
            <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-xl text-white/90 mt-2 sm:mt-4 px-2">
              Experience luxury and reliability with our comprehensive transportation solutions tailored to your needs.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/5 to-transparent"></div>
      </div>

      {/* Feature Boxes Section */}
      <div className="py-8 sm:py-10 md:py-12 relative">
        {/* Add decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-amber-400"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-amber-00"></div>
        <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-amber-400/20 hidden sm:block"></div>
        <div className="absolute -right-10 top-1/3 -translate-y-1/2 w-32 h-32 rounded-full bg-amber-400/10 hidden sm:block"></div>

        <div className="max-w-6xl mx-auto px-3 sm:px-4 relative z-10">
          <h2
            className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-12 text-gray-900"
            data-aos="fade-up"
          >
            Our Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            <FeatureBox
              icon={<CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-black" />}
              title="FAST BOOKING"
              description="Quick and easy booking process for your convenience."
            />
            <FeatureBox
              icon={<CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-black" />}
              title="SAFE RIDES"
              description="Professional drivers ensuring your safety at all times."
            />
            <FeatureBox
              icon={<CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-black" />}
              title="24/7 SUPPORT"
              description="Round-the-clock customer service for your peace of mind."
            />
            <FeatureBox
              icon={<CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-black" />}
              title="ONE WAY TRIP RENTAL"
              description="Flexible one-way trip options for your convenience."
            />
            <FeatureBox
              icon={<CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-black" />}
              title="AFFORDABLE PRICES"
              description="Competitive rates without compromising on quality."
            />
            <FeatureBox
              icon={<CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-black" />}
              title="LUXURY FLEET"
              description="Premium vehicles for a comfortable travel experience."
            />
          </div>
        </div>
      </div>

      {/* Rest of the Services Component */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-3">
        {/* Service Cards */}
        <div className="py-8 sm:py-12 md:py-16 px-3 sm:px-4 max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-12 text-gray-900">
            Our Transportation Services
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative bg-white rounded-xl shadow-xl 
             transition-all duration-500 hover:shadow-2xl hover:translate-y-[-8px] group overflow-hidden"
              >
                {/* Yellow accent at the top - now with rounded corners */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-amber-400 rounded-t-xl"></div>

                <div className="p-4 sm:p-6 md:p-8">
                  {/* Icon with enhanced styling */}
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <div className="relative">
                      <div
                        className="absolute inset-0 bg-amber-400 rounded-full 
                  opacity-20 scale-125 group-hover:scale-150 transition-all duration-500"
                      ></div>
                      <div
                        className="relative bg-amber-400 rounded-full p-3 sm:p-4 md:p-5 transform transition-all 
                  duration-500 group-hover:rotate-12"
                      >
                        {service.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content with improved typography */}
                  <div className="text-center">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 group-hover:text-amber-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{service.description}</p>
                  </div>

                  {/* Decorative element */}
                  <div className="mt-4 sm:mt-6 flex justify-center">
                    <div className="h-1 w-12 bg-gray-200 rounded group-hover:w-24 group-hover:bg-amber-400 transition-all duration-300"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services List Section */}
        <div className="mt-10 sm:mt-16 md:mt-20 space-y-10 sm:space-y-16 md:space-y-20">
          {services1.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>

        {/* Corporate Services Section */}
        <div className="mt-10 sm:mt-16 md:mt-20">
          <h2 className="mb-6 sm:mb-8 md:mb-12 text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white">
            Corporate Services
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 md:grid-cols-3">
            {corporateServices.map((service, index) => (
              <div
                key={index}
                className="overflow-hidden transition-all duration-300 transform bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:scale-105"
                data-aos="fade-up"
                data-aos-delay={index * 100} // Staggered delay for each card
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="object-cover w-full h-40 sm:h-48 transition-all duration-300 transform group-hover:scale-110"
                  />
                  {/* Yellow overlay on hover */}
                  <div className="absolute inset-0 transition-opacity duration-300 bg-yellow-500 opacity-0 group-hover:opacity-40"></div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="mb-2 text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{service.description}</p>
                  <button className="px-4 sm:px-6 py-1.5 sm:py-2 mt-3 sm:mt-4 text-white transition-colors duration-300 bg-yellow-500 rounded hover:bg-yellow-600 text-sm sm:text-base">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-10 sm:mt-16 md:mt-20 mb-8 sm:mb-12 md:mb-16">
          <div
            className="relative max-w-4xl mx-auto transform transition-all duration-700 hover:scale-105 px-3 sm:px-0"
            data-aos="fade-up"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 rounded-2xl sm:rounded-3xl transform "></div>
            <div className="relative bg-white border-2 border-amber-400 p-3 sm:p-6 md:p-12 rounded-2xl sm:rounded-3xl shadow-2xl ">
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 text-black">
                  Ready for Your Premium Ride?
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-black/90 mb-4 sm:mb-6 md:mb-8">
                  Join thousands of satisfied customers experiencing the future of transportation.
                </p>
                <button>
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1 mt-2 sm:mt-4 md:mt-8 bg-green-500
                     text-white py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded-xl 
                    font-semibold transform transition-all duration-300 hover:scale-105 hover:bg-green-600 hover:shadow-lg"
                  >
                    <FaWhatsappSquare className="text-xl sm:text-2xl md:text-4xl" />
                    <span className="text-xs sm:text-sm md:text-lg">Connect With WhatsApp</span>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CountValue />
    </div>
  )
}

export default Services








// import { FaTaxi, FaPlane, FaShuttleVan, FaCar, FaWhatsappSquare } from "react-icons/fa"
// import corporatelimo2 from "../assets/corporatelimo2-1.jpg"
// import woman from "../assets/woman-traveling.webp"
// import weddingcab1 from "../assets/wedding-cab1.jpg"
// import Banner from "../assets/slider3.jpg"
// import AOS from "aos"
// import "aos/dist/aos.css" // Import AOS CSS
// import { useEffect } from "react"
// import { CheckCircle } from "lucide-react"
// import CountValue from "./CountValue"

// const services = [
//   {
//     icon: <FaTaxi className="h-10 w-10" />,
//     title: "City Taxi",
//     description: "Quick and reliable rides within the city.",
//   },
//   {
//     icon: <FaPlane className="h-10 w-10" />,
//     title: "Airport Transfer",
//     description: "Comfortable rides to and from the airport.",
//   },
//   {
//     icon: <FaShuttleVan className="h-10 w-10" />,
//     title: "Group Travel",
//     description: "Spacious vans for group outings and events.",
//   },
//   {
//     icon: <FaCar className="h-10 w-10" />,
//     title: "Luxury Rides",
//     description: "Premium vehicles for special occasions.",
//   },
// ]

// const services1 = [
//   {
//     title: "Airport Transfer Services",
//     description:
//       "Experience hassle-free airport transfers with our premium service. Our professional drivers ensure timely pickups and drop-offs, helping you start or end your journey stress-free. Enjoy comfortable vehicles, flight tracking, and 24/7 support.",
//     image:
//       "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
//   },
//   {
//     title: "Corporate Transportation",
//     description:
//       "Elevate your business travel with our corporate transportation solutions. We provide reliable, professional service for executives and teams. From meetings to events, we ensure punctuality and comfort with our premium fleet.",
//     image: corporatelimo2,
//   },
//   {
//     title: "Wedding & Special Events",
//     description:
//       "Make your special day even more memorable with our luxury transportation services. We offer elegant vehicles and professional chauffeurs to ensure your wedding or special event transportation is perfect in every way.",
//     image: weddingcab1,
//   },
//   {
//     title: "Group Service",
//     description:
//       "Enjoy the flexibility of our hourly chauffeur service for business meetings, shopping trips, or city tours. Our experienced drivers are at your disposal, providing professional and personalized service for as long as you need.",
//     image: woman,
//   },
// ]

// const corporateServices = [
//   {
//     title: "Corporate Accounts",
//     description: "Special accounts for businesses with customized billing options",
//     image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80",
//   },
//   {
//     title: "Event Transportation",
//     description: "Organized transport solutions for corporate events",
//     image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80",
//   },
//   {
//     title: "Airport Transfers",
//     description: "Reliable airport pickup and drop-off services",
//     image: "https://images.unsplash.com/photo-1543785734-4b6e564642f8?auto=format&fit=crop&q=80",
//   },
// ]

// // ServiceCard Component
// const ServiceCard = ({ title, description, image, isReversed }) => {
//   return (
//     <div
//       id="services"
//       className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-4 sm:gap-6 md:gap-8 p-3 sm:p-4 md:p-6 rounded-xl`}
//     >
//       {/* Image Section */}
//       <div className="w-full md:w-1/2 overflow-hidden rounded-lg relative group">
//         <img
//           src={image || "/placeholder.svg"}
//           alt={title}
//           className="w-full h-48 sm:h-56 md:h-64 lg:h-96 object-cover rounded-lg shadow-lg transform transition-all duration-300 group-hover:scale-105"
//         />
//         <div className="absolute inset-0 bg-yellow-400/0 group-hover:bg-yellow-400/30 transition-all duration-300 rounded-lg"></div>
//       </div>

//       {/* Content Section */}
//       <div className="w-full md:w-1/2">
//         <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
//         <p className="text-gray-600 dark:text-gray-300">{description}</p>
//       </div>
//     </div>
//   )
// }

// // FeatureBox Component - Enhanced version
// const FeatureBox = ({ icon, title, description }) => {
//   return (
//     <div
//       className="flex flex-col items-center text-center p-6 rounded-lg bg-black/90 border
//        border-amber-400/30 shadow-lg transform transition-all duration-500 hover:shadow-amber-200 hover:translate-y-[-8px]"
//       // data-aos="fade-up"
//       // data-aos-duration="1000"
//     >
//       <div
//         className="flex-shrink-0 w-16 h-16 bg-amber-400 rounded-full flex items-center 
//       justify-center shadow-md mb-4 transform transition-all duration-500 hover:rotate-12"
//       >
//         {icon}
//       </div>
//       <h3 className="text-amber-400 font-bold text-lg mb-3">{title}</h3>
//       <p className="text-white/80 text-sm">{description}</p>
//       {/* <div className="w-10 h-1 bg-white/20 hover:bg-amber-400 mt-4"></div> */}
//       {/* <div className="h-1 w-24 mt-5 bg-amber-100 mx-auto rounded-full animate-pulse"></div> */}
//     </div>
//   )
// }

// const Services = () => {
//   // Initialize AOS
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: false,
//       mirror: true,
//       easing: "ease-in-out",
//       delay: 100,
//     })
//   }, [])

//   return (
//     <div className="bg-white dark:bg-gray-900 min-h-screen">
//       {/* Enhanced Banner Section */}
//       <div className="relative w-full overflow-hidden h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[90vh]">
//         {/* Background Image with Overlay */}
//         <div className="absolute inset-0 z-0">
//           <img
//             src={Banner || "/placeholder.svg"}
//             alt="Premium transportation services"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90"></div>
//         </div>

//         {/* Content Container */}
//         <div className="relative mt-28 z-10 flex flex-col items-center justify-center h-full px-4 pb-32 sm:pb-24 max-w-7xl mx-auto">
//           {/* Main Heading with animated underline */}
//           <div className="text-center" data-aos="fade-up">
//             <div className="inline-block">
//               <span className="inline-block text-white text-lg font-medium tracking-wider mb-2 uppercase">
//                 Premium Transportation
//               </span>
//               <div className="h-1 w-24 bg-amber-400 mx-auto rounded-full animate-pulse"></div>
//             </div>
//             <h2 className="text-amber-400 font-bold text-5xl md:text-6xl lg:text-7xl mt-4 drop-shadow-lg">
//               Our Services
//             </h2>
//             <p className="max-w-2xl mx-auto text-base md:text-xl text-white/90 mt-4">
//               Experience luxury and reliability with our comprehensive transportation solutions tailored to your needs.
//             </p>

//             {/* <button className="mt-8 bg-amber-400 hover:bg-amber-500 text-black font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
//               Book Now
//             </button> */}
//           </div>
//         </div>

//         {/* Decorative Elements */}
//         <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/5 to-transparent"></div>
//       </div>

//       {/* Feature Boxes Section */}
//       <div className=" py-12 relative ">
//         {/* Add decorative elements */}
//         <div className="absolute top-0 left-0 w-full h-1 bg-amber-400"></div>
//         <div className="absolute bottom-0 left-0 w-full h-1 bg-amber-00"></div>
//         <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-amber-400/20"></div>
//         <div className="absolute -right-10 top-1/3 -translate-y-1/2 w-32 h-32 rounded-full bg-amber-400/10"></div>

//         <div className="max-w-6xl mx-auto px-4 relative z-10">
//           <h2 className="text-3xl font-bold text-center mb-12 text-gray-900" data-aos="fade-up">
//             Our Features
//           </h2>
//           <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
//             <FeatureBox
//               icon={<CheckCircle className="w-6 h-6 text-black " />}
//               title="FAST BOOKING"
//               description="Quick and easy booking process for your convenience."
//             />
//             <FeatureBox
//               icon={<CheckCircle className="w-6 h-6 text-black " />}
//               title="SAFE RIDES"
//               description="Professional drivers ensuring your safety at all times."
//             />
//             <FeatureBox
//               icon={<CheckCircle className="w-6 h-6 text-black" />}
//               title="24/7 SUPPORT"
//               description="Round-the-clock customer service for your peace of mind."
//             />
//             <FeatureBox
//               icon={<CheckCircle className="w-6 h-6 text-black" />}
//               title="ONE WAY TRIP RENTAL"
//               description="Flexible one-way trip options for your convenience."
//             />
//             <FeatureBox
//               icon={<CheckCircle className="w-6 h-6 text-black" />}
//               title="AFFORDABLE PRICES"
//               description="Competitive rates without compromising on quality."
//             />
//             <FeatureBox
//               icon={<CheckCircle className="w-6 h-6 text-black" />}
//               title="LUXURY FLEET"
//               description="Premium vehicles for a comfortable travel experience."
//             />
//           </div>
//         </div>
//       </div>

//       {/* Rest of the Services Component */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
//         {/* Service Cards */}

//         <div className="py-16 px-4 max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-12 text-gray-900" data-aos="">
//             Our Transportation Services
//           </h2>
//           <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className="relative bg-white rounded-xl shadow-xl 
//              transition-all duration-500 hover:shadow-2xl hover:translate-y-[-8px] group overflow-hidden"
//               >
//                 {/* Yellow accent at the top - now with rounded corners */}
//                 <div className="absolute top-0 left-0 right-0 h-2 bg-amber-400 rounded-t-xl"></div>

//                 <div className="p-8">
//                   {/* Icon with enhanced styling */}
//                   <div className="flex justify-center mb-6">
//                     <div className="relative">
//                       <div
//                         className="absolute inset-0 bg-amber-400 rounded-full 
//                   opacity-20 scale-125 group-hover:scale-150 transition-all duration-500"
//                       ></div>
//                       <div
//                         className="relative bg-amber-400 rounded-full p-5 transform transition-all 
//                   duration-500 group-hover:rotate-12"
//                       >
//                         {service.icon}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Content with improved typography */}
//                   <div className="text-center">
//                     <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-amber-400 transition-colors duration-300">
//                       {service.title}
//                     </h3>
//                     <p className="text-gray-600 leading-relaxed">{service.description}</p>
//                   </div>

//                   {/* Decorative element */}
//                   <div className="mt-6 flex justify-center">
//                     <div className="h-1 w-12 bg-gray-200 rounded group-hover:w-24 group-hover:bg-amber-400 transition-all duration-300"></div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         {/* <div className="mt-20">
//           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-200 dark:bg-gray-800 overflow-hidden rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:opacity-90"
//                 data-aos="fade-up"
//               >
//                 <div className="px-4 py-5 sm:p-6 bg-gradient-to-r from-blue-600/5 to-indigo-600/5 rounded-2xl">
//                   <div className="flex items-center justify-center">
//                     <div className="flex-shrink-0 bg-yellow-500 rounded-full p-3 transform transition-all duration-300 hover:scale-110">
//                       {service.icon}
//                     </div>
//                   </div>
//                   <div className="mt-5 text-center">
//                     <h3 className="text-lg font-medium text-gray-900 dark:text-white">{service.title}</h3>
//                     <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{service.description}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div> */}

//         {/* Services List Section */}
//         <div className="mt-20 space-y-20">
//           {services1.map((service, index) => (
//             <ServiceCard
//               key={index}
//               title={service.title}
//               description={service.description}
//               image={service.image}
//               isReversed={index % 2 !== 0}
//             />
//           ))}
//         </div>

//         {/* Corporate Services Section */}
//         <div className="mt-20">
//           <h2 className="mb-12 text-3xl font-bold text-center text-gray-900 dark:text-white" data-aos="fade-up">
//             Corporate Services
//           </h2>
//           <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 xs:grid-cols-2 md:grid-cols-3">
//             {corporateServices.map((service, index) => (
//               <div
//                 key={index}
//                 className="overflow-hidden transition-all duration-300 transform bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:scale-105"
//                 data-aos="fade-up"
//                 data-aos-delay={index * 100} // Staggered delay for each card
//               >
//                 <div className="relative overflow-hidden group">
//                   <img
//                     src={service.image || "/placeholder.svg"}
//                     alt={service.title}
//                     className="object-cover w-full h-48 transition-all duration-300 transform group-hover:scale-110"
//                   />
//                   {/* Yellow overlay on hover */}
//                   <div className="absolute inset-0 transition-opacity duration-300 bg-yellow-500 opacity-0 group-hover:opacity-40"></div>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{service.title}</h3>
//                   <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
//                   <button className="px-6 py-2 mt-4 text-white transition-colors duration-300 bg-yellow-500 rounded hover:bg-yellow-600">
//                     Learn More
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Corporate Services Section 
//         // <div className="mt-20 py-16 bg-white rounded-3xl">
//         //   <h2 className="text-3xl font-bold text-center mb-12 text-gray-900" data-aos="fade-up">
//         //     Corporate Services
//         //   </h2>
//         //   <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
//         //     {corporateServices.map((service, index) => (
//         //       <div
//         //         key={index}
//         //         className="bg-white  overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:translate-y-[-8px]"
//         //         data-aos="fade-up"
//         //         data-aos-delay={index * 150}
//         //       >
//         //         <div className="relative group h-56 overflow-hidden">
//         //           <img
//         //             src={service.image || "/placeholder.svg"}
//         //             alt={service.title}
//         //             className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
//         //           />
//         //           <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
//         //         </div>
//         //         <div className="p-6">
//         //           <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
//         //           <p className="text-gray-600 mb-5">{service.description}</p>
//         //           <button className="w-full bg-amber-400 hover:bg-amber-500 text-black font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-md">
//         //             Learn More
//         //           </button>
//         //         </div>
//         //       </div>
//         //     ))}
//         //   </div>
//         // </div>*/}

//         {/* CTA Section */}
//         <div className="mt-20 mb-16">
//           <div
//             className="relative max-w-4xl mx-auto transform transition-all duration-700 hover:scale-105"
//             data-aos="fade-up"
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 rounded-3xl transform -rotate-2"></div>
//             <div className="relative bg-white border-2 border-amber-400 p-4 sm:p-8 md:p-12 rounded-3xl shadow-2xl -rotate-3">
//               <div className="text-center">
//                 <h2 className="text-4xl font-bold mb-6 text-black">Ready for Your Premium Ride?</h2>
//                 <p className="text-xl text-black/90 mb-8">
//                   Join thousands of satisfied customers experiencing the future of transportation.
//                 </p>
//                 <button>
//                   <a
//                     href="https://wa.me/1234567890"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center justify-center gap-1 mt-4 sm:mt-6 md:mt-8 bg-green-500 text-white py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded-xl 
//                     font-semibold transform transition-all duration-300 hover:scale-105 hover:bg-green-600 hover:shadow-lg"
//                   >
//                     <FaWhatsappSquare className="text-2xl sm:text-3xl md:text-4xl" />
//                     <span className="text-sm sm:text-base md:text-lg">Connect With WhatsApp</span>
//                   </a>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <CountValue />
//     </div>
//   )
// }

// export default Services






// 2nd example====================================================================================================================================

// import { FaTaxi, FaPlane, FaShuttleVan, FaCar, FaWhatsappSquare } from "react-icons/fa"
// import corporatelimo2 from "../assets/corporatelimo2-1.jpg"
// import woman from "../assets/woman-traveling.webp"
// import weddingcab1 from "../assets/wedding-cab1.jpg"
// import Banner from "../assets/slider3.jpg"
// import AOS from "aos"
// import "aos/dist/aos.css" // Import AOS CSS
// import { useEffect } from "react"
// import { CheckCircle } from "lucide-react"

// const services = [
//   {
//     icon: <FaTaxi className="h-10 w-10" />,
//     title: "City Taxi",
//     description: "Quick and reliable rides within the city.",
//   },
//   {
//     icon: <FaPlane className="h-10 w-10" />,
//     title: "Airport Transfer",
//     description: "Comfortable rides to and from the airport.",
//   },
//   {
//     icon: <FaShuttleVan className="h-10 w-10" />,
//     title: "Group Travel",
//     description: "Spacious vans for group outings and events.",
//   },
//   {
//     icon: <FaCar className="h-10 w-10" />,
//     title: "Luxury Rides",
//     description: "Premium vehicles for special occasions.",
//   },
// ]

// const services1 = [
//   {
//     title: "Airport Transfer Services",
//     description:
//       "Experience hassle-free airport transfers with our premium service. Our professional drivers ensure timely pickups and drop-offs, helping you start or end your journey stress-free. Enjoy comfortable vehicles, flight tracking, and 24/7 support.",
//     image:
//       "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
//   },
//   {
//     title: "Corporate Transportation",
//     description:
//       "Elevate your business travel with our corporate transportation solutions. We provide reliable, professional service for executives and teams. From meetings to events, we ensure punctuality and comfort with our premium fleet.",
//     image: corporatelimo2,
//   },
//   {
//     title: "Wedding & Special Events",
//     description:
//       "Make your special day even more memorable with our luxury transportation services. We offer elegant vehicles and professional chauffeurs to ensure your wedding or special event transportation is perfect in every way.",
//     image: weddingcab1,
//   },
//   {
//     title: "Group Service",
//     description:
//       "Enjoy the flexibility of our hourly chauffeur service for business meetings, shopping trips, or city tours. Our experienced drivers are at your disposal, providing professional and personalized service for as long as you need.",
//     image: woman,
//   },
// ]

// const corporateServices = [
//   {
//     title: "Corporate Accounts",
//     description: "Special accounts for businesses with customized billing options",
//     image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80",
//   },
//   {
//     title: "Event Transportation",
//     description: "Organized transport solutions for corporate events",
//     image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80",
//   },
//   {
//     title: "Airport Transfers",
//     description: "Reliable airport pickup and drop-off services",
//     image: "https://images.unsplash.com/photo-1543785734-4b6e564642f8?auto=format&fit=crop&q=80",
//   },
// ]

// // ServiceCard Component
// const ServiceCard = ({ title, description, image, isReversed }) => {
//   return (
//     <div
//       id="services"
//       className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 p-6 rounded-xl`}
//       data-aos={isReversed ? "fade-left" : "fade-right"}
//     >
//       {/* Image Section */}
//       <div className="w-full md:w-1/2 overflow-hidden rounded-lg relative group">
//         <img
//           src={image || "/placeholder.svg"}
//           alt={title}
//           className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg transform transition-all duration-300 group-hover:scale-105"
//         />
//         <div className="absolute inset-0 bg-yellow-400/0 group-hover:bg-yellow-400/30 transition-all duration-300 rounded-lg"></div>
//       </div>

//       {/* Content Section */}
//       <div className="w-full md:w-1/2">
//         <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
//         <p className="text-gray-600 dark:text-gray-300">{description}</p>
//       </div>
//     </div>
//   )
// }

// // FeatureBox Component - Enhanced version
// const FeatureBox = ({ icon, title, description }) => {
//   return (
//     <div
//       className="flex items-start space-x-4 bg-black/30 backdrop-blur-sm p-4 rounded-lg border-l-4 border-amber-400 transform transition-all duration-300 hover:translate-x-1 hover:shadow-lg"
//       data-aos="fade-up"
//     >
//       <div className="flex-shrink-0 w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center shadow-md md:">
//         {icon}
//       </div>
//       <div>
//         <h3 className="text-amber-400 font-bold text-xl">{title}</h3>
//         <p className="text-white mt-1">{description}</p>
//       </div>
//     </div>
//   )
// }

// const Services = () => {
//   // Initialize AOS
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//     })
//   }, [])

//   return (
//     <div className="bg-gray-00 dark:bg-gray-900 min-h-screen">
//       {/* Enhanced Banner Section */}
//       <div className="relative w-full overflow-hidden h-[70vh] md:h-[80vh] lg:h-[90vh]">
//         {/* Background Image with Overlay */}
//         <div className="absolute inset-0 z-0">
//           <img
//             src={Banner || "/placeholder.svg"}
//             alt="Premium transportation services"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>
//         </div>

//         {/* Content Container */}
//         <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 max-w-7xl mx-auto">
//           {/* Main Heading with animated underline */}
//           <div className="text-center mb-12" data-aos="fade-down">
//             <div className="inline-block">
//               <span className="inline-block text-white text-lg font-medium tracking-wider mb-2 uppercase">
//                 Premium Transportation
//               </span>
//               <div className="h-1 w-24 bg-amber-400 mx-auto rounded-full animate-pulse"></div>
//             </div>
//             <h2 className="text-amber-400 font-bold text-4xl md:text-5xl lg:text-6xl mt-4 ">Our Services</h2>
//             <p className="max-w-2xl mx-auto text-sm  md:text-xl text-white/90">
//               Experience luxury and reliability with our comprehensive transportation solutions tailored to your needs.
//             </p>
//           </div>                                                                                                  

//           {/* Feature Boxes in a more attractive grid */}
//           <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             <FeatureBox
//               icon={<CheckCircle className="w-6 h-6 text-black" />}
//               title="FAST BOOKING"
//               description="Quick and easy booking process for your convenience."
//             />
//             <FeatureBox
//               icon={<CheckCircle className="w-6 h-6 text-black" />}
//               title="SAFE RIDES"
//               description="Professional drivers ensuring your safety at all times."
//             />
//             <FeatureBox
//               icon={<CheckCircle className="w-6 h-6 text-black" />}
//               title="24/7 SUPPORT"
//               description="Round-the-clock customer service for your peace of mind."
//             />
//             <FeatureBox
//               icon={<CheckCircle className="w-6 h-6 text-black" />}
//               title="ONE WAY TRIP RENTAL"
//               description="Flexible one-way trip options for your convenience."
//             />
//             <FeatureBox
//               icon={<CheckCircle className="w-6 h-6 text-black" />}
//               title="AFFORDABLE PRICES"
//               description="Competitive rates without compromising on quality."
//             />
//             <FeatureBox
//               icon={<CheckCircle className="w-6 h-6 text-black" />}
//               title="LUXURY FLEET"
//               description="Premium vehicles for a comfortable travel experience."
//             />
//           </div>

//           {/* CTA Button */}
//           {/* <div className="mt-12" data-aos="fade-up">
//               <a
//                 href="#services"
//                 className="group inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-black font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
//               >
//                 Explore Our Services
//                 <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </a>
//             </div> */}
//         </div>

//         {/* Decorative Elements */}
//         <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent"></div>
//         <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black to-transparent"></div>
//       </div>

//       {/* Rest of the Services Component */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
//         {/* Service Cards */}

//         <div className="py-12 px-4 max-w-7xl mx-auto">
//       <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] group"
//           >
//             {/* Yellow line at the top */}
//             <div className="absolute top-0 left-0 right-0 h-1 bg-yellow-500"></div>

//             <div className="p-6">
//               {/* Icon in separate div with improved styling */}
//               <div className="flex justify-center mb-5">
//                 <div className="relative">
//                   <div className="absolute inset-0 bg-yellow-400 rounded-full opacity-20 scale-125 group-hover:scale-150 transition-all duration-300"></div>
//                   <div className="relative bg-yellow-500 rounded-full p-4 transform transition-all duration-300 group-hover:rotate-6">
//                     {service.icon}
//                   </div>
//                 </div>
//               </div>

//               {/* Content with improved typography */}
//               <div className="text-center">
//                 <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-yellow-500 transition-colors duration-300">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">{service.description}</p>
//               </div>

//               {/* Subtle decorative element */}
//               <div className="mt-4 flex justify-center">
//                 <div className="h-1 w-12 bg-gray-200 rounded group-hover:w-24 group-hover:bg-yellow-300 transition-all duration-300"></div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//         {/* <div className="mt-20">
//           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-200 dark:bg-gray-800 overflow-hidden rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:opacity-90"
//                 data-aos="fade-up"
//               >
//                 <div className="px-4 py-5 sm:p-6 bg-gradient-to-r from-blue-600/5 to-indigo-600/5 rounded-2xl">
//                   <div className="flex items-center justify-center">
//                     <div className="flex-shrink-0 bg-yellow-500 rounded-full p-3 transform transition-all duration-300 hover:scale-110">
//                       {service.icon}
//                     </div>
//                   </div>
//                   <div className="mt-5 text-center">
//                     <h3 className="text-lg font-medium text-gray-900 dark:text-white">{service.title}</h3>
//                     <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{service.description}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div> */}

//         {/* Services List Section */}
//         <div className="mt-20 space-y-20">
//           {services1.map((service, index) => (
//             <ServiceCard
//               key={index}
//               title={service.title}
//               description={service.description}
//               image={service.image}
//               isReversed={index % 2 !== 0}
//             />
//           ))}
//         </div>

//         {/* Corporate Services Section */}
//         <div className="mt-20">
//           <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white" data-aos="fade-up">
//             Corporate Services
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {corporateServices.map((service, index) => (
//               <div
//                 key={index}
//                 className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl"
//                 data-aos="fade-up"
//               >
//                 <div className="relative group">
//                   <img
//                     src={service.image || "/placeholder.svg"}
//                     alt={service.title}
//                     className="w-full h-48 object-cover transform transition-all duration-300 group-hover:scale-105"
//                   />
//                   <div className="absolute inset-0 bg-yellow-400/0 group-hover:bg-yellow-400/30 transition-all duration-300"></div>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
//                   <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
//                   <button className="mt-4 bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 transition-colors">
//                     Learn More
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="mt-20 mb-8">
//           <div
//             className="relative max-w-4xl mx-auto transform transition-all duration-700 hover:scale-105"
//             data-aos="fade-up"
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-400 rounded-3xl transform -rotate-3"></div>
//             <div className="relative bg-white border-2 border-yellow-500 p-12 rounded-3xl shadow-xl -rotate-1">
//               <div className="text-center">
//                 <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-black to-black bg-clip-text text-transparent">
//                   Ready for Your Premium Ride?
//                 </h2>
//                 <p className="text-xl text-gray-700 mb-8">
//                   Join thousands of satisfied customers experiencing the future of transportation.
//                 </p>
//                 <button>
//                   <a
//                     href="https://wa.me/1234567890"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center justify-center gap-3 mt-8 bg-green-500 text-white py-3 lg:py-4 px-6 rounded-xl font-semibold transform transition-all duration-300 hover:scale-105 hover:bg-green-600 hover:shadow-lg"
//                   >
//                     <FaWhatsappSquare className="text-2xl" />
//                     <span className="text-lg">Connect With WhatsApp</span>
//                   </a>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Services



 {/* Book a Ride Section */}
        {/* <div className="mt-20">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Book a Ride</h3>
              <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                <div>
                  <label htmlFor="pickup" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Pickup Location
                  </label>
                  <input
                    type="text"
                    name="pickup"
                    id="pickup"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Enter pickup location"
                  />
                </div>
                <div>
                  <label htmlFor="dropoff" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Drop-off Location
                  </label>
                  <input
                    type="text"
                    name="dropoff"
                    id="dropoff"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Enter drop-off location"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Service Type
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  >
                    <option>City Taxi</option>
                    <option>Airport Transfer</option>
                    <option>Group Travel</option>
                    <option>Luxury Ride</option>
                  </select>
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div> */}
