import Link from "next/link"
import Image from "next/image"

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 z-10 lg:pr-12">
          <h1 className="hero-heading text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Empowering the Future
            <br />
            Through Innovation
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-700">
            At Tarida, we invest in visionaries driving emerging technologies that redefine industries.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 inline-block"
          >
            Get in Touch
          </Link>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative h-[50vh] lg:h-[80vh] mt-8 lg:mt-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bZ50280cfgFGHJbimkSkhPDwN4SwBv.png"
            alt="Modern artistic interpretation of a Tarida boat - a historical vessel reimagined with futuristic elements"
            fill
            className="object-cover rounded-lg"
            quality={100}
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection

