import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Phone, Mail, MapPin } from "lucide-react";
import { NavLink } from "react-router-dom";
// import logo from "../assets/Gujju Cab.svg";

const Footer = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white mt-0">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        {/* Grid Layout for Footer Content */}
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-3 xl:gap-16">
          {/* Left Section: Brand Info and Social Media */}
          <div className="space-y-8">
            <div className="flex items-center">
              {/* <Link to="/" className="flex items-center">
                <img src={logo || "/placeholder.svg"} alt="Gujju Cab" className="h-12 w-auto" />
              </Link> */}
              <h2 className="text-3xl font-bold">
                GUJJU<span className="text-yellow-400 dark:text-white">CAB</span>
              </h2>
            </div>

            <p className="text-gray-400 text-base">
              Your trusted partner for comfortable and safe rides. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Necessitatibus minima et omnis provident quod vitae
              dolorem fuga rem? Corporis.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-6">
              {/* Facebook */}
              <a href="#" className="text-yellow-500 hover:text-[#1877F2] transition-colors duration-300">
                <span className="sr-only">Facebook</span>
                <FaFacebook className="h-6 w-6" />
              </a>

              {/* Instagram with Linear Gradient */}
              <a
                href="#"
                className="text-yellow-500 transition-colors duration-300 hover:scale-110"
                style={{
                  background:
                    "linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4, #405DE6, #C13584)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                <span className="sr-only">Instagram</span>
                <FaInstagram className="h-6 w-6" />
              </a>

              {/* Twitter */}
              <a href="#" className="text-yellow-500 hover:text-[#1DA1F2] transition-colors duration-300">
                <span className="sr-only">Twitter</span>
                <FaTwitter className="h-6 w-6" />
              </a>

              {/* LinkedIn */}
              <a href="#" className="text-yellow-500 hover:text-[#0077B5] transition-colors duration-300">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Right Section: Quick Links and Legal */}
          <div className="grid grid-cols-1 gap-8 mt-12 xl:mt-0 xl:col-span-2 md:grid-cols-2">
            {/* Services and Quick Links */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
              {/* Services Section */}
              <div>
                <h3 className="text-sm font-semibold text-gray-100 tracking-wider uppercase">
                  Services
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-white transition-colors duration-300">
                      City Taxi
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-white transition-colors duration-300">
                      Airport Transfer
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-white transition-colors duration-300">
                      Group Travel
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-white transition-colors duration-300">
                      Luxury Rides
                    </a>
                  </li>
                </ul>
              </div>

              {/* Quick Links Section */}
              <div>
                <h3 className="text-sm font-semibold text-gray-100 tracking-wider uppercase">
                  Quick Links
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <NavLink
                      to="/"
                      className="text-base text-gray-400 hover:text-white transition-colors duration-300"
                      onClick={scrollToTop}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className="text-base text-gray-400 hover:text-white transition-colors duration-300"
                      onClick={scrollToTop}
                    >
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services"
                      className="text-base text-gray-400 hover:text-white transition-colors duration-300"
                      onClick={scrollToTop}
                    >
                      Corporate Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact"
                      className="text-base text-gray-400 hover:text-white transition-colors duration-300"
                      onClick={scrollToTop}
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Us Section */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
              <div>
                <h3 className="text-sm font-semibold text-gray-100 tracking-wider uppercase">
                  Contact Us
                </h3>
                <ul className="mt-4 space-y-4">
                  {/* Email */}
                  <li className="flex items-center gap-2 text-gray-400">
                    <Mail className="h-5 w-5 shrink-0 text-yellow-500" />
                    <a
                      href="mailto:info@gujjucabs.com"
                      className="hover:text-white transition-colors duration-300"
                    >
                      info@gujjucabs.com
                    </a>
                  </li>

                  {/* Phone Number */}
                  <li className="flex items-center gap-2 text-gray-400">
                    <Phone className="h-5 w-5 shrink-0 text-yellow-500" />
                    <a
                      href="tel:+919265647942"
                      className="hover:text-white transition-colors duration-300"
                    >
                      +91 92656 47942
                    </a>
                  </li>

                  {/* Address */}
                  <li className="flex items-start gap-2 text-gray-400">
                    <MapPin className="h-5 w-5 shrink-0 mt-1 text-yellow-500" />
                    <span className="hover:text-white transition-colors duration-300">
                      B tower -104, Pragati Nagar, Piplod, Surat, Gujarat 395007
                    </span>
                  </li>
                </ul>
              </div>

              {/* Legal Section */}
              <div>
                <h3 className="text-sm font-semibold text-gray-100 tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-white transition-colors duration-300">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-white transition-colors duration-300">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom: Copyright */}
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; 2025 GujjuCab, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;