import Navbar from '@/components/Navbar'
import HeroSection from './HeroSection'
import QuestionSection from './QuestionSection'
import SendUsSection from './SendUsSection'
import Footer from '@/components/Footer'

export default function page() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      {/* <SendUsSection /> */}
      <QuestionSection />
      <Footer />
    </div>
  )
}
