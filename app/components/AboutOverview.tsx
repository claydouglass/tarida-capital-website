import Link from "next/link"
import Image from "next/image"

const AboutOverview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nddEqg6Tnc3H4xOV1Xf7CKp0JWsNTR.png"
              alt="Artistic interpretation of a Tarida boat - a historical vessel reimagined with modern geometric design and futuristic elements"
              width={600}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-4xl font-bold mb-6 text-primary">About Tarida</h2>
            <p className="text-lg mb-6 text-gray-900">
              We're entrepreneurs investing in entrepreneurs. Our mission is to
              foster innovation and collaboration, creating transformative impact across industries.
            </p>
            <Link href="/about" className="text-blue-600 hover:text-blue-800 transition-colors underline font-medium">
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutOverview

