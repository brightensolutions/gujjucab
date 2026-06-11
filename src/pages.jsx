
// import { useState, useEffect } from "react"
// import Image from "next/image"
// import { Car, Clock, MapPin, PhoneIcon as WhatsappIcon } from "lucide-react"
// import { Card } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// const slides = [
//   {
//     image: "/placeholder.svg?height=600&width=1200",
//     title: "Ride in Style",
//     description: "Experience luxury with our premium cab service",
//   },
//   {
//     image: "/placeholder.svg?height=600&width=1200",
//     title: "Safe and Reliable",
//     description: "Your safety is our top priority",
//   },
//   {
//     image: "/placeholder.svg?height=600&width=1200",
//     title: "Affordable Rates",
//     description: "Quality service that won't break the bank",
//   },
// ]

// export default function Home() {
//   const [currentSlide, setCurrentSlide] = useState(0)

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
//     }, 5000)

//     return () => clearInterval(timer)
//   }, [])

//   return (
//     <div className="relative h-screen">
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 transition-opacity duration-1000 ${
//             index === currentSlide ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           <div className="relative w-full h-full">
//             <Image
//               src={slide.image || "/placeholder.svg"}
//               alt={slide.title}
//               fill
//               priority={index === 0}
//               className="object-cover"
//               sizes="100vw"
//             />
//             <div className="absolute inset-0 bg-black/50">
//               <div className="max-w-7xl mx-auto h-full px-4">
//                 <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full items-center">
//                   {/* Left side content */}
//                   <div className="md:col-span-7 text-white">
//                     <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-white text-shadow">
//                       {slide.title}
//                     </h1>
//                     <p className="text-xl md:text-2xl mb-8 text-white text-shadow">{slide.description}</p>
//                   </div>

//                   {/* Right side booking form */}
//                   <div className="md:col-span-5">
//                     <Card className="p-6 backdrop-blur-md bg-white/95">
//                       <Tabs defaultValue="transfer" className="w-full">
//                         <TabsList className="grid w-full grid-cols-2 mb-4">
//                           <TabsTrigger value="transfer" className="gap-2">
//                             <Car className="h-4 w-4" />
//                             TRANSFER
//                           </TabsTrigger>
//                           <TabsTrigger value="hourly" className="gap-2">
//                             <Clock className="h-4 w-4" />
//                             HOURLY BOOKING
//                           </TabsTrigger>
//                         </TabsList>

//                         <TabsContent value="transfer">
//                           <div className="space-y-4">
//                             <h2 className="text-lg font-semibold text-center text-primary">INSTANT ONLINE QUOTE</h2>

//                             <div className="relative">
//                               <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
//                               <Input placeholder="Pick me from" className="pl-10" />
//                             </div>

//                             <div className="relative">
//                               <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
//                               <Input placeholder="Drop me at" className="pl-10" />
//                             </div>

//                             <Button className="w-full">Get Quote</Button>

//                             <a
//                               href="https://wa.me/your-number"
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="flex items-center justify-center gap-2 mt-4 text-green-600 hover:text-green-700 transition-colors"
//                             >
//                               <WhatsappIcon className="h-5 w-5 fill-current" />
//                               <span>Connect with WhatsApp</span>
//                             </a>
//                           </div>
//                         </TabsContent>

//                         <TabsContent value="hourly">
//                           <div className="space-y-4">
//                             <h2 className="text-lg font-semibold text-center text-primary">INSTANT ONLINE QUOTE</h2>

//                             <div className="relative">
//                               <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
//                               <Input placeholder="Pick up location" className="pl-10" />
//                             </div>

//                             <div className="grid grid-cols-2 gap-4">
//                               <Input type="number" placeholder="Hours" min="1" />
//                               <Input type="time" placeholder="Pick up time" />
//                             </div>

//                             <Button className="w-full">Get Quote</Button>

//                             <a
//                               href="https://wa.me/your-number"
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="flex items-center justify-center gap-2 mt-4 text-green-600 hover:text-green-700 transition-colors"
//                             >
//                               <WhatsappIcon className="h-5 w-5 fill-current" />
//                               <span>Connect with WhatsApp</span>
//                             </a>
//                           </div>
//                         </TabsContent>
//                       </Tabs>
//                     </Card>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

