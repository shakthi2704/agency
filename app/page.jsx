import Cursor from "@/components/common/Cursor"
import Footer from "@/components/common/Footer"
import Lines from "@/components/common/Lines"
import LoadingScreen from "@/components/common/LoadingScreen"
import MarqTwo from "@/components/common/MarqTwo"
import Navbar from "@/components/common/Navbar"
import ProgressScroll from "@/components/common/ProgressScroll"
import Clients from "@/components/home/Clients"
import HomeHeader from "@/components/home/HomeHeader"
import HomeIntro from "@/components/home/HomeIntro"
import HomeIntroTwo from "@/components/home/HomeIntroTwo"
import HomePortfolio from "@/components/home/HomePortfolio"
import HomeServices from "@/components/home/HomeServices"
import Marq from "@/components/home/Marq"
import Testimonials from "@/components/home/Testimonials"

const HomePage = () => {
  return (
    <>
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />
      <Lines />
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="main-bg o-hidden">
            <HomeHeader />
            <HomeIntro />
            <Marq />
            <HomeServices />
            <HomePortfolio />
            <Testimonials />
            <HomeIntroTwo />
            {/* <Clients /> */}
            <MarqTwo />
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default HomePage
