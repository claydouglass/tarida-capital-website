import Header from "../components/Header"
import Footer from "../components/Footer"
import { Mail, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-5xl font-bold mb-12 text-center text-primary">Contact Us</h1>

              <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
                <div className="lg:w-1/2">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-696aim9LBs2M3ukSJoeiM30iE9vdrh.png"
                    alt="Artistic representation of a Tarida boat - symbolizing our journey of innovation"
                    width={600}
                    height={600}
                    className="rounded-lg shadow-xl"
                  />
                </div>

                <div className="lg:w-1/2 space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-6 text-primary">Get in Touch</h2>
                    <p className="text-lg text-gray-700 mb-8">
                      We're always looking for new opportunities and partnerships. If you have a project or idea that
                      aligns with our focus areas, we'd love to hear from you.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center">
                      <Mail className="w-8 h-8 text-blue-600 mr-4" />
                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-1">Email</h3>
                        <p className="text-lg text-gray-700">
                          <a href="mailto:info@taridacapital.com" className="hover:underline">
                            info@taridacapital.com
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-8 h-8 text-blue-600 mr-4" />
                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-1">Address</h3>
                        <p className="text-lg text-gray-700">16 Spitalmattenweg, Sarnen, 6060 Switzerland</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12">
                    <Link
                      href="mailto:info@taridacapital.com"
                      className="inline-block bg-blue-600 text-white px-8 py-4 rounded-md font-medium text-lg hover:bg-blue-700 transition duration-300"
                    >
                      Send us an email
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

