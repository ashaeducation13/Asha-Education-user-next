'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

import "./globals.css";

import { Inter, Rubik, Playfair_Display, Open_Sans } from 'next/font/google';
import Loader from '@/components/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from "next/image";


// Initialize the fonts
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-rubik',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-playfair',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-open-sans'
})

export default function RootLayout({ children }) {
  const pathname = usePathname()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    // Give it time to render the next page
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 300) // Adjust delay if needed 

    return () => clearTimeout(timeout)
  }, [pathname])

  return (

    <html lang="en" className={`${rubik.variable} ${playfair.variable} ${openSans.variable}`}>
      <body>
        {loading && <Loader />}
        {children}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        <a
          href="https://wa.me/917208804245" // Replace with actual number
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50"
        >
          <Image
            src="/whatsapp_icon.png"
            width={56}
            height={56}
            alt="Chat on WhatsApp"
            className="w-14 h-14"
          />
        </a>
      </body>
    </html>
  );
}
