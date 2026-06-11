import { FaTaxi, FaPlane, FaShuttleVan, FaCar } from "react-icons/fa"
import AOS from "aos"
import "aos/dist/aos.css" // Import AOS CSS
import { useEffect } from "react"

const services = [
  {
    icon: <FaTaxi className="w-10 h-10" />,
    title: "City Taxi",
    description: "Quick and reliable rides within the city.",
  },
  {
    icon: <FaPlane className="w-10 h-10" />,
    title: "Airport Transfer",
    description: "Comfortable rides to and from the airport.",
  },
  {
    icon: <FaShuttleVan className="w-10 h-10" />,
    title: "Group Travel",
    description: "Spacious vans for group outings and events.",
  },
  {
    icon: <FaCar className="w-10 h-10" />,
    title: "Luxury Rides",
    description: "Premium vehicles for special occasions.",
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

const Services = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
      easing: "ease-in-out", // Smooth easing
      delay: 200, // Delay between animations
    })
  }, [])

  return (
    <div className="min-h-screen py-12 bg-gray-0 dark:bg-gray-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Services Section */}
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            We offer a range of services to meet your transportation needs.
          </p>
        </div>

        {/* Service Cards */}
        <div className="py-12 px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4" data-aos="fade-up">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] group"
                data-aos="fade-up"
                data-aos-delay={index * 100} // Staggered delay for each card
              >
                {/* Yellow line at the top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-yellow-500"></div>

                <div className="p-6">
                  {/* Icon in separate div with improved styling */}
                  <div className="flex justify-center mb-5">
                    <div className="relative">
                      <div className="absolute inset-0 bg-yellow-400 rounded-full opacity-20 scale-125 group-hover:scale-150 transition-all duration-300"></div>
                      <div className="relative bg-yellow-500 rounded-full p-4 transform transition-all duration-300 group-hover:rotate-6">
                        {service.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content with improved typography */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-amber-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>

                  {/* Subtle decorative element */}
                  <div className="mt-4 flex justify-center">
                    <div className="h-1 w-12 bg-gray-200 rounded group-hover:w-24 group-hover:bg-yellow-300 transition-all duration-300"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* <div className="mt-20 ">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 ">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 transition-all duration-300 transform bg-gray-100 shadow-xl dark:bg-gray-800 rounded-2xl hover:scale-105 hover:shadow-2xl focus:opacity-75"
                data-aos="fade-up" // Add animation
              >
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center justify-center">
                    <div className="flex-shrink-0 p-3 transition-all duration-300 transform bg-yellow-500 rounded-full hover:scale-110">
                      {service.icon}
                    </div>
                  </div>
                  <div className="mt-5 text-center">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">{service.title}</h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}



        {/* Corporate Services Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900"  data-aos="fade-up">
            Corporate Services
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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
                    className="object-cover w-full h-48 transition-all duration-300 transform group-hover:scale-110"
                  />
                  {/* Yellow overlay on hover */}
                  <div className="absolute inset-0 transition-opacity duration-300 bg-yellow-500 opacity-0 group-hover:opacity-40"></div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                  <button className="px-6 py-2 mt-4 text-white transition-colors duration-300 bg-yellow-500 rounded hover:bg-yellow-600">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services

 {/* <div className="mt-20 ">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 ">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 transition-all duration-300 transform bg-gray-100 shadow-xl dark:bg-gray-800 rounded-2xl hover:scale-105 hover:shadow-2xl focus:opacity-75"
                data-aos="fade-up" // Add animation
              >
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center justify-center">
                    <div className="flex-shrink-0 p-3 transition-all duration-300 transform bg-yellow-500 rounded-full hover:scale-110">
                      {service.icon}
                    </div>
                  </div>
                  <div className="mt-5 text-center">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">{service.title}</h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

