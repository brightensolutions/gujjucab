"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Close mobile menu on route change and scroll to top
  useEffect(() => {
    window.scrollTo(0, 0)
    setIsOpen(false)
  }, [location.pathname]) // This ensures it runs when the pathname changes

  return (
   
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center h-16">
              {/* <img src={logo || "/placeholder.svg"} alt="Gujju Cab" className="w-auto h-12" /> */}
            </Link>
            <Link
              to="/"
              className={`text-3xl font-bold transition-all whitespace-nowrap ${
                scrolled ? "text-white" : "text-white"
              }`}
            >
              GUJJU<span className="text-yellow-400">CAB</span>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="flex items-baseline ml-10 space-x-6">
                <NavLink to="/" scrolled={scrolled} onClick={scrollToTop}>
                  Home
                </NavLink>
                <NavLink to="/about" scrolled={scrolled} onClick={scrollToTop}>
                  About
                </NavLink>
                <NavLink to="/services" scrolled={scrolled} onClick={scrollToTop}>
                  Corporate Services
                </NavLink>
                <button
                  className={`${
                    scrolled ? "bg-yellow-500 hover:bg-yellow-400" : "bg-yellow-500 hover:bg-amber-400"
                  } text-white rounded-full px-6 py-2 text-sm font-medium transition-all`}
                >
                  <Link to="/contact" onClick={scrollToTop}>
                    Contact Us
                  </Link>
                </button>
              </div>
            </div>
            <div className="ml-2 md:hidden">
              <button
                onClick={toggleMenu}
                className={`text-white hover:text-yellow-400 p-2 rounded-md transition-all`}
                aria-label="Toggle menu"
              >
                {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute w-full md:hidden bg-black/95 backdrop-blur-sm">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <NavLink to="/" mobile scrolled={true} onClick={scrollToTop}>
              Home
            </NavLink>
            <NavLink to="/about" mobile scrolled={true} onClick={scrollToTop}>
              About
            </NavLink>
            <NavLink to="/services" mobile scrolled={true} onClick={scrollToTop}>
              Services
            </NavLink>
            <NavLink to="/contact" mobile scrolled={true} onClick={scrollToTop}>
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>

  )
}

const NavLink = ({ to, children, mobile, scrolled, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`${mobile ? "block" : "inline-block"} ${
      scrolled ? "text-white hover:text-yellow-400" : "text-white hover:text-yellow-400"
    } px-3 py-2 text-sm font-medium transition-all duration-300 relative group`}
  >
    {children}
    <span
      className={`absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full ${
        mobile ? "hidden" : "block"
      }`}
    ></span>
  </Link>
)

export default Navbar




// import { useState, useEffect } from "react"
// import { Link, useLocation } from "react-router-dom"
// import { FaBars, FaTimes } from "react-icons/fa"
// import logo from "../assets/Gujju Cab.svg"

// const Navbar = ({ darkMode, toggleDarkMode }) => {
//   const [isOpen, setIsOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const location = useLocation()

//   const toggleMenu = () => {
//     setIsOpen(!isOpen)
//   }


//   // Function to scroll to the top of the page
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   // Handle scroll event
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true)
//       } else {
//         setScrolled(false)
//       }
//     }

//     window.addEventListener("scroll", handleScroll)

//     // Cleanup
//     return () => {
//       window.removeEventListener("scroll", handleScroll)
//     }
//   }, [])

//   // Scroll to top whenever the route changes
//   useEffect(() => {
//     window.scrollTo(0, 0)
//     setIsOpen(false) // Close mobile menu on route change
//   }, [])

//   return (
//     <nav
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//         scrolled ? "bg-black hover:text-white shadow-lg py-2" : "bg-transparent py-4 "
//       }`}
//     >
//       <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center">
//             <Link to="/" className="flex items-center h-16">
//               {/* <img src={logo || "/placeholder.svg"} alt="Gujju Cab" className="w-auto h-12" /> */}
//             </Link>
//             <Link
//               to="/"
//               className={`text-3xl font-display font-bold transition-all whitespace-nowrap ${
//                 scrolled ? "text-white" : "text-white"
//               }`}
//             >
//               GUJJU<span className="text-yellow-400">CAB</span>
//             </Link>
//           </div>
//           <div className="flex items-center">
//             <div className="hidden md:block">
//               <div className="flex items-baseline ml-10 space-x-6">
//                 <NavLink to="/" scrolled={scrolled} onClick={scrollToTop} 
//                 // Scroll to top when clicked
//                 >
//                   Home
//                 </NavLink>
//                 <NavLink to="/about" scrolled={scrolled}  onClick={scrollToTop} >
//                   About
//                 </NavLink>
//                 <NavLink to="/services" scrolled={scrolled}  onClick={scrollToTop} >
//                   Corporate Services
//                 </NavLink>
//                 <button
//                   className={`${
//                     scrolled ? "bg-yellow-500 hover:bg-yellow-400" : "bg-yellow-500 hover:bg-amber-400"
//                   } text-white rounded-full px-6 py-2 text-sm font-medium transition-all`}
//                 >
//                   <Link to="/contact"  onClick={scrollToTop} >Contact Us</Link>
//                 </button>
//               </div>
//             </div>
//             <div className="ml-2 md:hidden">
//               <button
//                 onClick={toggleMenu}
//                 className={`text-white hover:text-yellow-400 p-2 rounded-md transition-all`}
//                 aria-label="Toggle menu"
//               >
//                 {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {isOpen && (
//         <div className="absolute w-full md:hidden bg-black/95 backdrop-blur-sm">
//           <div className="px-4 pt-2 pb-3 space-y-1">
//             <NavLink to="/" mobile scrolled={true}>
//               Home
//             </NavLink>
//             <NavLink to="/about" mobile scrolled={true}>
//               About
//             </NavLink>
//             <NavLink to="/services" mobile scrolled={true}>
//               Services
//             </NavLink>
//             <NavLink to="/contact" mobile scrolled={true}>
//               Contact
//             </NavLink>
//           </div>
//         </div>
//       )}
//     </nav>
//   )
// }

// const NavLink = ({ to, children, mobile, scrolled }) => (
//   <Link
//     to={to}
//     className={`${mobile ? "block" : "inline-block"} ${
//       scrolled ? "text-white hover:text-yellow-400" : "text-white hover:text-yellow-400" // Changed this line
//     } px-3 py-2 text-sm font-medium transition-all duration-300 relative group`}
//   >
//     {children}
//     <span
//       className={`absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full ${
//         mobile ? "hidden" : "block"
//       }`}
//     ></span>
//   </Link>
// )

// export default Navbar



// "use client"

// import { useState, useEffect } from "react"
// import { Link, useLocation } from "react-router-dom"
// import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa"
// import logo from "../assets/Gujju Cab.svg";

// const Navbar = ({ darkMode, toggleDarkMode }) => {
//   const [isOpen, setIsOpen] = useState(false)
//   const location = useLocation()

//   const toggleMenu = () => {
//     setIsOpen(!isOpen)
//   }

//   // Scroll to top whenever the route changes
//   useEffect(() => {
//     window.scrollTo(0, 0)
//   }, [location])

//   return (
//     <nav className={`bg-cab-background dark:bg-cab-background-dark shadow-lg sticky top-0 z-50 transition-all`}>
//       <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <Link to="/" className="flex items-center">
//               <img
//                 src={logo}
//                 alt="Gujju Cab"
//                 className="w-auto h-12"
//               />
//             </Link>
//             <Link to="/" className="text-3xl font-bold text-black transition-all font-display whitespace-nowrap">
//               GUJJU<span className="text-yellow-400 dark:text-white">CAB</span>
//             </Link>
//           </div>
//           <div className="flex items-center">
//             <div className="hidden md:block">
//               <div className="flex items-baseline ml-10 space-x-4 rounded hover:rounded-md">
//                 <NavLink to="/">Home</NavLink>
//                 <NavLink to="/about">About</NavLink>
//                 <NavLink to="/services">Corporate Services</NavLink>
//                 <button className="text-sm font-medium text-white transition-all bg-yellow-500 rounded hover:bg-amber-400">
//                   <NavLink to="/contact">Contact</NavLink>
//                 </button>
//               </div>
//             </div>
//             <div className="ml-2 md:hidden">
//               <button
//                 onClick={toggleMenu}
//                 className="p-2 transition-all rounded-md text-cab-text dark:text-cab-text-dark hover:text-cab-hover"
//               >
//                 {isOpen ? <FaTimes /> : <FaBars />}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {isOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             <NavLink to="/" mobile>
//               Home
//             </NavLink>
//             <NavLink to="/about" mobile>
//               About
//             </NavLink>
//             <NavLink to="/services" mobile>
//               Services
//             </NavLink>
//             <NavLink to="/contact" mobile>
//               Contact
//             </NavLink>
//           </div>
//         </div>
//       )}  
//     </nav>
//   )
// }

// const NavLink = ({ to, children, mobile }) => (
//   <Link
//     to={to}
//     className={`${
//       mobile ? "block" : "inline-block"
//     } text-cab-text dark:text-cab-text-dark hover:bg-yellow-500 hover:text-white px-3 py-2
//      border-indigo-100 rounded text-sm font-medium transition-all`}
//   >
//     {children}
//   </Link>
// )

// export default Navbar