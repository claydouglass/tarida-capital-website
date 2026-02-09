import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-2xl mb-4">Tarida Capital</h3>
            <p className="text-sm mb-4 text-gray-300">Empowering the Future Through Innovation</p>
            <p className="text-sm font-medium text-gray-300">16 Spitalmattenweg, Sarnen, 6060 Switzerland</p>
          </div>
          <div className="w-full md:w-1/2">
            <h4 className="text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/focus-areas" className="text-gray-300 hover:text-white transition-colors font-medium">
                  Focus Areas
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Tarida Capital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

