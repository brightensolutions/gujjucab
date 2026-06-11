"use client"

import { useEffect, useState } from "react"
import { MessageCircle, Phone, Car, ChevronRight } from "lucide-react"
import { useNavigate } from "react-router-dom"
import Women from "../assets/women.jpg"

function AnimatedBanner() {
  const [isLoaded, setIsLoaded] = useState(false)
  const navigate = useNavigate()

  const openWhatsApp = () => {
    window.open("https://wa.me/1234567890", "_blank")
  }

  const navigateToContact = () => {
    navigate("/contact")
  }

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden rounded-xl">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={Women || "/placeholder.svg"}
          alt="Vintage Cars"
          className="object-cover w-full h-full scale-110 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-amber-400/30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.3,
            }}
          />
        ))}
      </div>

      {/* Animated Car Silhouette */}
      <div className="absolute bottom-0 left-0 w-full h-12 sm:h-16 md:h-20 opacity-20">
        <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 animate-car-drive">
          <Car className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-amber-400" />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 text-white">
        {/* Top Accent */}
        <div
          className={`absolute top-0 left-0 h-2 sm:h-3 bg-amber-400 transition-all duration-1000 ease-out ${isLoaded ? "w-20 sm:w-32 md:w-40" : "w-0"}`}
        />
        <div
          className={`absolute top-0 right-0 h-2 sm:h-3 bg-amber-400 transition-all duration-1000 ease-out delay-300 ${isLoaded ? "w-10 sm:w-16 md:w-20" : "w-0"}`}
        />

        {/* Car Icon with Animation */}
        <div
          className={`p-3 sm:p-4 mb-4 sm:mb-6 rounded-full bg-amber-400 transition-all duration-500 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
        >
          <Car className="w-6 h-6 sm:w-8 sm:h-8 text-black animate-bounce-slow" />
        </div>

        {/* Heading Section with Animations */}
        <div className="text-center">
          <h2
            className={`text-xl sm:text-2xl md:text-3xl font-bold text-amber-400 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Rent Your Car
          </h2>
          <h1
            className={`mt-2 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight transition-all duration-700 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Interested in <span className="text-amber-400 animate-pulse-slow">Renting?</span>
          </h1>
          <div
            className={`w-16 sm:w-20 h-1 mx-auto mt-4 sm:mt-6 bg-amber-400 transition-all duration-700 delay-400 ${isLoaded ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}
          ></div>
          <p
            className={`max-w-xs sm:max-w-sm md:max-w-2xl mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-200 transition-all duration-700 delay-600 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Don't hesitate and send us a message. We have the perfect car for your needs.
          </p>
        </div>

        {/* Buttons with Animations */}
        <div
          className={`flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 md:mt-10 transition-all duration-700 delay-800 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* <button
            onClick={openWhatsApp}
            className="flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-black transition-all bg-amber-400 rounded-full hover:bg-amber-500 min-w-[180px] sm:min-w-[200px] group hover:shadow-[0_0_15px_rgba(251,191,36,0.7)] hover:-translate-y-1"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 transition-transform group-hover:scale-110 group-hover:rotate-12" />
            <span className="font-bold text-sm sm:text-base">WhatsApp</span>
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-all opacity-0 group-hover:opacity-100 group-hover:translate-x-1" />
          </button> */}
          <button
            onClick={navigateToContact}
            className="flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-black transition-all bg-white rounded-full hover:bg-gray-100 min-w-[180px] sm:min-w-[200px] group hover:shadow-[0_0_15px_rgba(255,255,255,0.7)] hover:-translate-y-1"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 transition-transform group-hover:scale-110 group-hover:rotate-12" />
            <span className="font-bold text-sm sm:text-base">Contact Us</span>
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-all opacity-0 group-hover:opacity-100 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Bottom Accent */}
        <div
          className={`absolute bottom-0 right-0 h-2 sm:h-3 bg-amber-400 transition-all duration-1000 ease-out delay-200 ${isLoaded ? "w-20 sm:w-32 md:w-40" : "w-0"}`}
        />
        <div
          className={`absolute bottom-0 left-0 h-2 sm:h-3 bg-amber-400 transition-all duration-1000 ease-out delay-500 ${isLoaded ? "w-10 sm:w-16 md:w-20" : "w-0"}`}
        />
      </div>

      {/* Decorative Elements with Animations */}
      <div className="absolute top-6 right-6 sm:top-10 sm:right-10 w-16 h-16 sm:w-24 sm:h-24 border-2 sm:border-4 border-amber-400 rounded-full opacity-30 animate-pulse-slow" />
      <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 w-12 h-12 sm:w-16 sm:h-16 border-2 sm:border-4 border-amber-400 rounded-full opacity-30 animate-float" />

      {/* Animated Corner Accents */}
      <div className="absolute top-3 left-3 sm:top-5 sm:left-5 w-6 h-6 sm:w-10 sm:h-10 border-t-2 border-l-2 sm:border-t-4 sm:border-l-4 border-amber-400 opacity-60 animate-spin-slow" />
      <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 w-6 h-6 sm:w-10 sm:h-10 border-b-2 border-r-2 sm:border-b-4 sm:border-r-4 border-amber-400 opacity-60 animate-spin-slow-reverse" />
    </div>
  )
}

export default AnimatedBanner

