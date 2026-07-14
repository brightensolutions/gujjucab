import Features1 from "../components/Features1"
import Home from "../components/Home"
import Services1 from "../components/Services1"
import Testimonials from "../components/Testimonials"
import CountValue from "../components/CountValue"
import AnimatedBanner from "../components/AnimatedBanner"

const HomePage = () => {
  return (
    <div id="home" className="page-container">     
       <Home />
      
      <Features1 />
      <AnimatedBanner />
      <Services1 />
      <CountValue />
      {/* <Features /> */}
      <Testimonials />
    </div>
  )
}

export default HomePage

