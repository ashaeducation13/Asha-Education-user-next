'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

import "./globals.css";

import { Inter, Rubik, Playfair_Display, Open_Sans } from 'next/font/google';
import Loader from '@/components/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
      </body>
    </html>
  );
}
