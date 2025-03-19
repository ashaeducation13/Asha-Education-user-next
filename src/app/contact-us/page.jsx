import Navbar from '@/components/Navbar'
import HeroSection from './HeroSection'
import QuestionSection from './QuestionSection'
import SendUsSection from './SendUsSection'

export default function page() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SendUsSection />
      <QuestionSection />
    </div>
  )
}
