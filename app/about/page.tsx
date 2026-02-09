import Header from "../components/Header"
import Footer from "../components/Footer"
import Image from "next/image"
import Link from "next/link"

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-8 text-center text-primary">About Tarida</h1>
            <div className="flex flex-col md:flex-row items-center mb-16">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bKaOlUHP7IusVxOzF40oEhZ08wm6vg.png"
                  alt="Artistic interpretation of a Tarida boat with geometric design elements"
                  width={600}
                  height={600}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-lg mb-6 text-gray-900">
                  Tarida is a catalyst for innovation and positive change. Founded by entrepreneurs who understand the challenges of building groundbreaking companies, we are committed
                  to empowering visionaries who are reshaping industries and improving lives.
                </p>
                <p className="text-lg mb-6 text-gray-900">
                  Our mission is to foster innovation and collaboration, creating transformative impact across
                  Agriculture, Health, Social initiatives, and Services. We believe that by investing in these crucial
                  areas, we can contribute to a more sustainable, healthier, and connected world.
                </p>
                <Link
                  href="/about/tarida"
                  className="text-blue-600 hover:text-blue-800 transition-colors underline font-medium"
                >
                  Learn about the meaning behind our name →
                </Link>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-8 text-center text-primary">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-secondary p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-primary">Innovation</h3>
                <p className="text-gray-900">
                  We embrace cutting-edge ideas and technologies that have the potential to revolutionize industries.
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-primary">Collaboration</h3>
                <p className="text-gray-900">
                  We believe in the power of partnerships and work closely with our portfolio companies to drive
                  success.
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-primary">Impact</h3>
                <p className="text-gray-900">
                  We measure our success not just in financial returns, but in the positive change we create in the
                  world.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
