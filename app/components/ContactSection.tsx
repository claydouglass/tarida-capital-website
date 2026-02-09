import Link from "next/link"

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Innovate with Tarida?</h2>
        <p className="text-xl font-medium mb-10 max-w-2xl mx-auto">
          Reach out to us and let's explore how we can empower your vision and shape the future of technology.
        </p>
        <Link
          href="/contact"
          className="bg-white text-blue-600 px-8 py-4 rounded-full text-xl hover:bg-opacity-90 transition duration-300 inline-block shadow-lg hover:shadow-xl"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  )
}

export default ContactSection

