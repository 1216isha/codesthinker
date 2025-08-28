import Carousel from '../components/home/Carousel'
import FAQS from '../components/home/FAQS'
import HomeAbout from '../components/home/HomeAbout'
import HomeContact from '../components/home/HomeContact'
import HomeProgress from '../components/home/HomeProgress'
import HomeServices from '../components/home/HomeServices'
import HomeValue from '../components/home/HomeValue'
import KeyFeatures from '../components/home/KeyFeatures'
import Reviews from '../components/home/Reviews'
import StandOut from '../components/home/StandOut'

const Home = () => {
  return (
    <div>
      <Carousel />
      <StandOut />
      <HomeAbout />
      <HomeServices />
      <KeyFeatures />
      <HomeValue />
      <HomeProgress />
      <Reviews bgColor="#060145" />
      <HomeContact />
      <FAQS />


    </div>
  )
}

export default Home