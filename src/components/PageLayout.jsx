import Navbar from "./Navbar"

const PageLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* This div adds margin to push content below the navbar on mobile */}
        <div className="container px-4 mx-auto mt-8 sm:px-6 lg:px-8 md:mt-0">{children}</div>
      </main>
    </div>
  )
}

export default PageLayout

