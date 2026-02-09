import "./globals.css"
import { Inter, Playfair_Display } from "next/font/google"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata = {
  title: "Tarida Capital",
  description: "Empowering the Future Through Innovation",
  icons: {
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-jYEgvTIzRQHRcDXCkghpklPZp2ACKu.svg",
        type: "image/svg+xml",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-96x96-mmLE4zGJh2BD605dQ2Q52J8EqK7GGT.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apple-touch-icon-7w8tiC6GQdphhpBOtlAe8lN7WUfY0J.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link
          rel="icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-jYEgvTIzRQHRcDXCkghpklPZp2ACKu.svg"
          type="image/svg+xml"
        />
        <link
          rel="icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-96x96-mmLE4zGJh2BD605dQ2Q52J8EqK7GGT.png"
          sizes="96x96"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apple-touch-icon-7w8tiC6GQdphhpBOtlAe8lN7WUfY0J.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="bg-[#F5F5F7]">{children}</body>
    </html>
  )
}

