import Header from "../components/Header"
import Footer from "../components/Footer"
import { Sprout, Heart, Users, Briefcase } from "lucide-react"

const focusAreas = [
  {
    title: "Agriculture",
    icon: Sprout,
    description:
      "We're revolutionizing agriculture through innovative technologies and sustainable practices. Our investments in this sector aim to enhance food security, improve crop yields, and promote environmentally friendly farming methods.",
    examples: [
      "Precision agriculture technologies",
      "Vertical farming solutions",
      "Sustainable irrigation systems",
      "AI-driven crop management",
    ],
    gradient: "from-green-400 to-green-600",
  },
  {
    title: "Health",
    icon: Heart,
    description:
      "Our health-focused investments are dedicated to improving global well-being through cutting-edge medical technologies and healthcare solutions. We support innovations that make healthcare more accessible, efficient, and effective.",
    examples: [
      "Telemedicine platforms",
      "AI-powered diagnostics",
      "Personalized medicine technologies",
      "Digital health monitoring devices",
    ],
    gradient: "from-red-400 to-red-600",
  },
  {
    title: "Social",
    icon: Users,
    description:
      "We're committed to driving positive social change through technology. Our investments in this area focus on empowering communities, fostering education, and promoting equality and inclusion.",
    examples: [
      "EdTech solutions",
      "Community engagement platforms",
      "Social impact measurement tools",
      "Accessibility technologies",
    ],
    gradient: "from-blue-400 to-blue-600",
  },
  {
    title: "Services",
    icon: Briefcase,
    description:
      "We're transforming the service industry by investing in innovative business models and technologies. Our focus is on enhancing efficiency, improving customer experiences, and creating new opportunities in various service sectors.",
    examples: [
      "AI-powered customer service solutions",
      "Augmented reality for remote assistance",
      "Predictive maintenance technologies",
    ],
    gradient: "from-purple-400 to-purple-600",
  },
]

export default function FocusAreas() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-12 text-center text-primary">Our Focus Areas</h1>
            {focusAreas.map((area, index) => (
              <div key={index} className="mb-16 last:mb-0">
                <div className="flex flex-col md:flex-row items-start mb-8">
                  <div className="md:w-1/3 mb-4 md:mb-0">
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <area.icon className={`w-12 h-12 mr-4 text-${area.gradient.split("-")[3]}`} />
                        <h2 className="text-3xl font-bold text-primary">{area.title}</h2>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-lg text-gray-700 mb-6">{area.description}</p>
                    <h3 className="text-xl font-semibold mb-4 text-primary">Key Investment Areas:</h3>
                    <ul className="list-disc pl-6 text-gray-700">
                      {area.examples.map((example, i) => (
                        <li key={i} className="mb-2">
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {index < focusAreas.length - 1 && <hr className="border-gray-200 my-12" />}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

