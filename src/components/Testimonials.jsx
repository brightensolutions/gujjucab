import { useEffect } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { TestimonialData } from "./Data/Data"
import AOS from "aos"
import "aos/dist/aos.css"

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <div className="w-full overflow-hidden bg-white">
      <div className="w-full px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="w-full max-w-[500px] mx-auto text-center mb-8 sm:mb-12 px-4">
          <p className="text-sm font-semibold text-primary">What Our Customers Are Saying</p>
          <h1 data-aos="fade-up" className="mt-2 text-3xl font-bold sm:text-4xl">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="mt-4 text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quasi expedita magnam.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div data-aos="zoom-in" className="w-full">
          <div className="mx-auto max-w-full">
            <Slider {...settings}>
              {TestimonialData.map((data) => (
                <div key={data.id} className="w-full px-2">
                  <div className="relative w-full h-full p-4 bg-orange-100 shadow-lg sm:p-6 rounded-3xl">
                    <div className="flex flex-col items-center">
                      <div className="flex justify-center mb-4 sm:mb-6">
                        <img
                          src={data.img || "/placeholder.svg"}
                          alt={data.name}
                          className="object-cover w-20 h-20 rounded-full sm:w-28 sm:h-28 border-4 border-primary"
                        />
                      </div>
                      <div className="text-center">
                        <p className="px-2 mb-4 text-sm italic text-gray-600 sm:text-base">"{data.text}"</p>
                        <h2 className="text-lg font-bold text-gray-800 sm:text-xl">{data.name}</h2>
                      </div>
                    </div>
                    <p className="absolute top-0 right-0 font-serif text-6xl text-amber-300 opacity-50 sm:text-9xl -z-10">
                      ,,
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* Custom styles to fix slider responsiveness */}
      <style jsx global>{`
                .slick-slide {
                    padding: 0;
                    box-sizing: border-box;
                }
                .slick-list {
                    margin: 0 -8px;
                }
                @media (max-width: 640px) {
                    .slick-slide > div {
                        padding: 0;
                    }
                    .slick-list {
                        margin: 0;
                    }
                }
            `}</style>
    </div>
  )
}

export default Testimonials



// import Slider from "react-slick"
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const testimonials = [
//   {
//     id: 1,
//     name: "John Doe",
//     text: "BookHaven has an amazing collection. I always find what I'm looking for!",
//     img: "/user1.jpg",
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     text: "The book booking feature is so convenient. I love it!",
//     img: "/user2.jpg",
//   },
//   {
//     id: 3,
//     name: "Mike Johnson",
//     text: "Great service and a wonderful community of book lovers.",
//     img: "/user3.jpg",
//   },
// ]

// const Testimonials = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     cssEase: "linear",
//     pauseOnHover: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   }

//   return (
//     <div className="py-16 bg-gray-100">
//       <div className="container px-4 mx-auto">
//         <h2 className="mb-8 text-3xl font-bold text-center">What Our Customers Say</h2>
//         <Slider {...settings}>
//           {testimonials.map((testimonial) => (
//             <div key={testimonial.id} className="px-4">
//               <div className="p-6 transition-all duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl">
//                 <img
//                   src={testimonial.img || "/placeholder.svg"}
//                   alt={testimonial.name}
//                   className="w-20 h-20 mx-auto mb-4 transition-transform duration-300 transform rounded-full hover:scale-110"
//                 />
//                 <p className="mb-4 italic text-gray-600">{testimonial.text}</p>
//                 <p className="font-semibold text-center">{testimonial.name}</p>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   )
// }

// export default Testimonials

