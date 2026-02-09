import Header from "../components/Header"
import Footer from "../components/Footer"
import Image from "next/image"
import Link from "next/link"

const teamMembers = [
  {
    name: "Clay Douglass",
    role: "CEO and Chairman, Global Investment Committee",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LubBflZ9HqcGRuAQCKb6HOEUce8KDg.png",
    description:
      "Clay is a serial entrepreneur and investor in emerging technology. Since 2014, he has focused primarily on founding and supporting companies that deliver real-world applications of artificial intelligence. Clay has been involved with dozens of not-for-profit, educational, and commercial organizations, providing vision, mentoring, and connecting teams with key people and capital. He also lectures in Bachelor and MBA programs on applied AI, Entrepreneurship, Economics and Marketing.",
    linkedIn: "https://www.linkedin.com/in/claytontdouglass/",
  },
  {
    name: "Gökçe Yilmaz Matthijssen",
    role: "Vice-Chair, Global Investment Committee",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RwrD4WDBRWR46CFRzeh0E4cEq8YPWk.png",
    description:
      "Gökçe is responsible for the execution of Tarida's investment strategy. Working side by side with the founders, she has contributed to numerous projects and success stories. Gökçe views each project as a new adventure, tackling unknowns and turning them into strengths. She holds a bachelor's degree in economics, along with an MBA and Advanced Diploma in International Taxation.",
    linkedIn: "https://www.linkedin.com/in/gokce-yilmaz-matthijssen-6556804/",
  },
  {
    name: "Sara Stapelfeld",
    role: "Executive Assistant",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CTNAplF46FUVmi3B0Rlkt5YyLSRMUc.png",
    description:
      "Sara is a connector and communicator, passionate about her role at Tarida where she focuses on supporting the team to exceed goals in emerging technology and sustainability. With experience organizing and hosting successful events worldwide since 2008, Sara plays a crucial role in Tarida's operations and team support.",
    linkedIn: "https://www.linkedin.com/in/sara-stapelfeld-306031187/",
  },
]

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
            <div className="grid md:grid-cols-3 gap-8 mb-16">
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

            <h2 className="text-3xl font-bold mb-8 text-center text-primary">Our Team</h2>
            <div className="space-y-16">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/3 mb-6 md:mb-0">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="rounded-full mx-auto"
                    />
                  </div>
                  <div className="md:w-2/3 md:pl-8">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-xl font-semibold text-gray-800 mb-4">{member.role}</p>
                    <p className="text-gray-900 mb-4">{member.description}</p>
                    <Link
                      href={member.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Get to know {member.name} on LinkedIn
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

