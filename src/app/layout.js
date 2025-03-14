import "./globals.css";

import {Inter, Rubik, Playfair_Display } from 'next/font/google';

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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${rubik.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
