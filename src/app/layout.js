'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import "./globals.css";

import { Inter, Rubik, Playfair_Display, Open_Sans } from 'next/font/google';
import Loader from '@/components/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from "next/image";
import Script from 'next/script';

// Fonts
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
    const timeout = setTimeout(() => setLoading(false), 300)
    return () => clearTimeout(timeout)
  }, [pathname])

  return (
    <html lang="en" className={`${rubik.variable} ${playfair.variable} ${openSans.variable}`}>
      
      <head>
        {/* ------------------------------------------------ */}
        {/* ⭐ GOOGLE ADS (AW TAG) — DO NOT REMOVE ⭐ */}
        {/* ------------------------------------------------ */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17627262854"
          strategy="afterInteractive"
        />
        <Script id="google-ads-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17627262854');
          `}
        </Script>

        {/* ------------------------------------------------ */}
        {/* ⭐ GOOGLE TAG MANAGER (GTM) — HEAD ⭐ */}
        {/* ------------------------------------------------ */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-536HZ564');
          `}
        </Script>
      </head>

      <body>
        {/* ------------------------------------------------ */}
        {/* ⭐ GOOGLE TAG MANAGER (GTM) — BODY ⭐ */}
        {/* ------------------------------------------------ */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-536HZ564"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

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
          href="https://wa.me/917208804245"
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
