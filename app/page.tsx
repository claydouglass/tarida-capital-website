import Header from "./components/Header"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import AboutOverview from "./components/AboutOverview"
import FocusAreasOverview from "./components/FocusAreasOverview"
import ContactSection from "./components/ContactSection"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutOverview />
        <FocusAreasOverview />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

