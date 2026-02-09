import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Image from "next/image"

export default function TaridaHistory() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="relative min-h-[60vh] flex items-center bg-gray-100">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 z-10 lg:pr-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary font-sans">What's a Tarida?</h1>
              <p className="text-xl text-gray-700 mb-8 font-serif">
                Tarida is a word you might not recognize, but it carries a unique story that reflects the distinct approach we bring to all our ventures.
              </p>
            </div>
            <div className="w-full lg:w-1/2 relative h-[40vh] lg:h-[60vh] mt-8 lg:mt-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9UZKnVH5Jmvgi70xwvBuzKh2R67MAm.png"
                alt="Artistic interpretation of a Tarida boat with geometric patterns and futuristic light beams"
                fill
                className="object-cover rounded-lg shadow-lg"
                quality={100}
                priority
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <div className="bg-blue-50 p-8 rounded-lg my-8 border-l-4 border-blue-500">
                <p className="italic text-gray-700 font-serif">
                  "It was a boat that came into existence around the year 1100. A few centuries later no one was making
                  them anymore. The process of forgetting about the Tarida boat began long ago."
                </p>
              </div>

              <p className="font-sans">
                It was a major innovation when it first set sail. A flat bottom boat that was ideal for transporting
                horses and goods throughout the mediterranean. The front of the boat could be lowered for loading and
                unloading directly on the beach. It was extremely effective in war and increased trade significantly.
              </p>

              <p className="font-sans">
                There isn't much of a historical record because it became obsolete. It was replaced by better boats that
                held more cargo, loaded and unloaded more efficiently and sailed further and faster.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-primary font-serif">Why We Chose This Name</h2>

              <p className="font-sans">
                We like the name Tarida because it gives us a valuable perspective on innovation. When we build
                something new we're always standing on the shoulders of what came before. Whatever we are building will
                be temporary. It will provide new "shoulders" to stand on. We want to build Taridas. Innovative
                technology that opens new markets. And then gets replaced and forgotten.
              </p>

              <p className="font-sans">
                If we don't see our work in this way we'll miss the next thing. We'll be the train company that missed
                the transport revolution enabled by flight. Or we'll be Microsoft stuck to Office when everyone is in
                the cloud.
              </p>

              <p className="font-sans">
                It's a humbling perspective that helps us stay connected to the fundamental reality of things.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
                <blockquote className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <p className="text-lg mb-4 font-serif">"Change is the only constant in life."</p>
                  <footer className="text-gray-600 font-sans">— Heraclitus</footer>
                </blockquote>

                <blockquote className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <p className="text-lg mb-4 font-serif">
                    "Better it is to live one day seeing the rise and fall of things than to live a hundred years
                    without ever seeing the rise and fall of things."
                  </p>
                  <footer className="text-gray-600 font-sans">— Buddha</footer>
                </blockquote>

                <blockquote className="bg-gray-50 p-6 rounded-lg shadow-sm md:col-span-2 lg:col-span-1">
                  <p className="text-lg mb-4 font-serif">
                    "Change is the law of life. And those who look only to the past or present are certain to miss the
                    future."
                  </p>
                  <footer className="text-gray-600 font-sans">— John F. Kennedy</footer>
                </blockquote>
              </div>

              <p className="font-sans">
                Constant change is encouraging. The biggest challenge we face in creating the future is that we are too
                attached to how things are now. Focusing on impermanence lets us take more risks while innovating. We
                know that whatever exists today will become obsolete. This way of thinking shifts the balance towards
                innovation and away from our natural, human preference against change and for the status quo.
              </p>

              <p className="text-xl font-semibold mt-8 mb-12 font-serif">
                We could have named the company Impermanence Capital. Instead we named it after a boat that is a symbol
                of innovation and a metaphor for change.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

