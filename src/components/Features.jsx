"use client"

import { useEffect } from "react"
import { Trophy, Diamond, MapPin, Settings } from "lucide-react"
import Featurescab from "../assets/Featurescab.jpg"

const Features = () => {
  useEffect(() => {
    const animateElements = document.querySelectorAll(".animate-on-scroll")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-show")
          }
        })
      },
      { threshold: 0.1 },
    )

    animateElements.forEach((element) => {
      observer.observe(element)
    })

    return () => {
      animateElements.forEach((element) => {
        observer.unobserve(element)
      })
    }
  }, [])

  const FeatureItem = ({ icon: Icon, title, description }) => (
    <div className="flex flex-col items-center text-center animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-10">
      <div className="bg-amber-400 rounded-full p-4 flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex-shrink-0 mb-4">
        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
      </div>
      <div>
        <h3 className="text-lg sm:text-xl font-bold text-navy-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm sm:text-base max-w-sm">{description}</p>
      </div>
    </div>
  )

  return (
    <div className="bg-gradient-to-b from-gray-0 to-gray-00 min-h-screen py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-10">
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Our Features
            <span className="text-gray-900 dark:text-white"></span>
          </h2>
          
          <p className="max-w-3xl mx-auto text-gray-600 text-sm sm:text-base lg:text-lg">
            Experience premium transportation with our luxury cab service. We offer comfort, reliability, and
            exceptional service for all your travel needs.
          </p>
        </div>

        {/* Features Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* Top Features (mobile only) */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 lg:hidden">
            <FeatureItem
              icon={Trophy}
              title="First Class Services"
              description="Experience luxury travel with our premium fleet of vehicles and professional chauffeurs dedicated to your comfort."
            />
            <FeatureItem
              icon={Settings}
              title="24/7 Road Assistance"
              description="Our support team is available around the clock to ensure your journey is smooth and worry-free."
            />
          </div>

          {/* Left Features (desktop only) */}
          <div className="w-full lg:w-[30%] space-y-8 sm:space-y-12 hidden lg:block">
            <FeatureItem
              icon={Trophy}
              title="First Class Services"
              description="Experience luxury travel with our premium fleet of vehicles and professional chauffeurs dedicated to your comfort."
            />
            <FeatureItem
              icon={Settings}
              title="24/7 Road Assistance"
              description="Our support team is available around the clock to ensure your journey is smooth and worry-free."
            />
          </div>

          {/* Center Image */}
          <div className="w-full lg:w-2/5 px-4 py-6 relative animate-on-scroll opacity-0 transition-all duration-1000 transform scale-95 mb-8 lg:mb-0">
            <div className="relative w-full max-w-sm sm:max-w-md mx-auto group">
              {/* Default glow effect */}
              <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-3xl transition-all duration-300"></div>
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-amber-400/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="p-3 sm:p-4 relative">
                <img
                  src={Featurescab || "/placeholder.svg"}
                  alt="Luxury Car"
                  className="relative z-10 w-full h-auto object-contain rounded-xl shadow-2xl transition-all duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Right Features */}
          <div className="w-full lg:w-[30%] space-y-8">
            <div className="hidden lg:block">
              <FeatureItem
                icon={Diamond}
                title="Quality at Minimum"
                description="We deliver premium service at competitive rates, ensuring you get the best value for your money."
              />
              <FeatureItem
                icon={MapPin}
                title="Free Pick-Up & Drop-Off"
                description="Enjoy the convenience of complimentary pick-up and drop-off services at your preferred locations."
              />
            </div>
            {/* Bottom Features (mobile only) */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 lg:hidden">
              <FeatureItem
                icon={Diamond}
                title="Quality at Minimum"
                description="We deliver premium service at competitive rates, ensuring you get the best value for your money."
              />
              <FeatureItem
                icon={MapPin}
                title="Free Pick-Up & Drop-Off"
                description="Enjoy the convenience of complimentary pick-up and drop-off services at your preferred locations."
              />
            </div>
          </div>
        </div>

        {/* CSS for animations */}
        <style jsx>{`
          .animate-show {
            opacity: 1;
            transform: translate(0, 0) scale(1);
          }
        `}</style>
      </div>
    </div>
  )
}

export default Features

