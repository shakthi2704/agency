import Cursor from "@/components/common/Cursor"
import Footer from "@/components/common/Footer"
import Lines from "@/components/common/Lines"
import LoadingScreen from "@/components/common/LoadingScreen"
import Navbar from "@/components/common/Navbar"
import ProgressScroll from "@/components/common/ProgressScroll"
import ServicesIntro from "@/components/services/ServiceIntro"
import ServicesHeader from "@/components/services/ServicesHeader"
import ServicesList from "@/components/services/ServicesList"

const ServicesPage = () => {
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
            <ServicesHeader />
            <ServicesList />
            <ServicesIntro />
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default ServicesPage
