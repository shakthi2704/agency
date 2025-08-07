import Cursor from "@/components/common/Cursor"
import Footer from "@/components/common/Footer"
import Lines from "@/components/common/Lines"
import LoadingScreen from "@/components/common/LoadingScreen"
import Navbar from "@/components/common/Navbar"
import ProgressScroll from "@/components/common/ProgressScroll"
import ContactForm from "@/components/contact/ContactForm"
import ContactHeader from "@/components/contact/ContactHeader"

const ContactPage = () => {
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
            {/* <ContactHeader />
            <ContactForm /> */}
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default ContactPage
