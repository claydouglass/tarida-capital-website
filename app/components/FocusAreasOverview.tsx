import Link from "next/link"
import { Sprout, Heart, Users, Briefcase } from "lucide-react"

const FocusAreasOverview = () => {
  const focusAreas = [
    {
      title: "Agriculture",
      icon: Sprout,
      description: "Innovating sustainable farming practices and agri-tech solutions for global food security.",
      gradient: "from-green-400 to-green-600",
    },
    {
      title: "Health",
      icon: Heart,
      description: "Advancing medical technologies and healthcare solutions to improve global well-being.",
      gradient: "from-red-400 to-red-600",
    },
    {
      title: "Social",
      icon: Users,
      description: "Empowering communities through social innovation and technology-driven initiatives.",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      title: "Services",
      icon: Briefcase,
      description: "Revolutionizing service industries with cutting-edge technologies and business models.",
      gradient: "from-purple-400 to-purple-600",
    },
  ]

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-primary">Our Focus Areas</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {focusAreas.map((area, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover-lift flex flex-col h-full">
              <div className="w-16 h-16 mb-6">
                <area.icon className={`w-16 h-16 mb-6 text-${area.gradient.split("-")[3]}`} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">{area.title}</h3>
              <p className="text-gray-700 flex-grow">{area.description}</p>
              <Link
                href="/focus-areas"
                className="text-blue-600 hover:text-blue-700 hover:underline mt-6 inline-block text-lg"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FocusAreasOverview

