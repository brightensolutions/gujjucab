"use client"

import { useEffect } from "react"
import { Trophy, Diamond, RouteIcon as Road, MapPin } from "lucide-react"
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

  const FeatureItem = ({ icon: Icon, title, description, delay = "" }) => (
    <div
      className={`flex flex-col sm:flex-row items-center sm:items-start 
        gap-4 animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-10 ${delay}`}
    >
      <div className="bg-amber-400 rounded-full p-4 flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex-shrink-0">
        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
      </div>
      <div className="text-center sm:text-left">
        <h3 className="text-lg sm:text-xl font-bold text-navy-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm sm:text-base">{description}</p>
      </div>
    </div>
  )

  return (
    <div className="bg-gradient-to-b from-gray-0 to-gray-00 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10 animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-10">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl mb-4">Our Features</h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-sm sm:text-base lg:text-lg">
            Experience premium transportation with our luxury cab service. We offer comfort, reliability, and
            exceptional service for all your travel needs.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Left Features */}
          <div className="space-y-8">
            <FeatureItem
              icon={Trophy}
              title="First Class Services"
              description="Experience luxury travel with our premium fleet of vehicles and professional chauffeurs dedicated to your comfort."
            />
            <FeatureItem
              icon={Road}
              title="24/7 Road Assistance"
              description="Our support team is available around the clock to ensure your journey is smooth and worry-free."
              delay="delay-200"
            />
          </div>

          {/* Center Image */}
          <div className="relative animate-on-scroll opacity-0 transition-all duration-1000 transform scale-95 mx-auto mb-8 md:mb-0">
            <div className="absolute inset-0 bg-amber-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="p-3 sm:p-4 relative">
              <img
                src={Featurescab || "/placeholder.svg"}
                alt="Luxury Car"
                className="relative z-10 w-full h-auto object-contain rounded-xl shadow-2xl hover:shadow-amber-200 transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Features */}
          <div className="space-y-8">
            <FeatureItem
              icon={Diamond}
              title="Quality at Minimum"
              description="We deliver premium service at competitive rates, ensuring you get the best value for your money."
            />
            <FeatureItem
              icon={MapPin}
              title="Free Pick-Up & Drop-Off"
              description="Enjoy the convenience of complimentary pick-up and drop-off services at your preferred locations."
              delay="delay-200"
            />
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

