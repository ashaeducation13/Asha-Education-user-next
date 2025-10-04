import Navbar from '@/components/Navbar'
import HeroSection from './HeroSection'
import QuestionSection from './QuestionSection'
import SendUsSection from './SendUsSection'
import Footer from '@/components/Footer'
import { AboutusFetch } from '@/services/api'

export const dynamic = "force-dynamic";

export default async function page (){
    const aboutus = await AboutusFetch();
    const data = aboutus[0]
  return (
    <div>
      <Navbar />
      <HeroSection loc={data.location}/>
      <SendUsSection data={data}/>
      <QuestionSection />
      <Footer />
    </div>
  )
}
  