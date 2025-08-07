import Cursor from "@/components/common/Cursor"
import Footer from "@/components/common/Footer"
import Lines from "@/components/common/Lines"
import LoadingScreen from "@/components/common/LoadingScreen"
import MarqTwo from "@/components/common/MarqTwo"
import Navbar from "@/components/common/Navbar"
import ProgressScroll from "@/components/common/ProgressScroll"
import PortfolioGrid from "@/components/portfolio/PortfolioGrid"
import PortfolioHeader from "@/components/portfolio/PortfolioHeader"

import React from "react"

const PortfolioPage = () => {
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
            <PortfolioHeader />
            <PortfolioGrid />
            <MarqTwo />
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default PortfolioPage
