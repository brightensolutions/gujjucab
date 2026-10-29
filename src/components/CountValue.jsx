"use client"

import { useEffect, useState, useRef } from "react"
import { ThumbsUp, Car, Building2, Clock } from "lucide-react"

const CountUp = ({ end, duration = 2000, label }) => {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)
  const observer = useRef(null)

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          let startTime
          let animationFrameId

          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp
            const progress = timestamp - startTime
            const percentage = Math.min(progress / duration, 1)
            const currentCount = Math.floor(percentage * end)

            setCount(currentCount)

            if (percentage < 1) {
              animationFrameId = requestAnimationFrame(animate)
            }
          }

          animationFrameId = requestAnimationFrame(animate)

          return () => {
            cancelAnimationFrame(animationFrameId)
          }
        }
      },
      { threshold: 0.1 },
    )

    if (countRef.current) {
      observer.current.observe(countRef.current)
    }

    return () => {
      if (observer.current && countRef.current) {
        observer.current.unobserve(countRef.current)
      }
    }
  }, [end, duration])

  return (
    <div ref={countRef} className="flex flex-col items-center">
      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
        {count}
        <span className="text-white">+</span>
      </div>
      <div className="text-white text-xs sm:text-sm md:text-base lg:text-lg text-center">{label}</div>
    </div>
  )
}

const CountValue = () => {
  const stats = [
    {
      icon: <ThumbsUp className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />,
      count: 829,
      label: "Happy Clients",
    },
    {
      icon: <Car className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />,
      count: 56,
      label: "Number of Cars",
    },
    {
      icon: <Building2 className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />,
      count: 127,
      label: "Car Center",
    },
    {
      icon: <Clock className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />,
      count: 589,
      label: "Total kilometers",
    },
  ]

  return (
    <div className="relative w-full py-8 sm:py-10 md:py-12 lg:py-16 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/car-road-with-motion-blur-background_1112-3210.jpg')",
        }}
      ></div>

      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center transform transition-transform duration-500 hover:scale-105 py-4"
            >
              <div className="relative mb-2 sm:mb-3 md:mb-4 lg:mb-6 group">
                {/* Pulsing effect for the background */}
                <div className="absolute inset-0 rounded-full bg-amber-400 opacity-20 animate-ping group-hover:opacity-30"></div>

                {/* Icon background */}
                <div className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-amber-400 text-white transform transition-all duration-300 group-hover:rotate-6">
                  {stat.icon}
                </div>
              </div>

              <CountUp end={stat.count} label={stat.label} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CountValue

