import Link from "next/link"
import { FaExclamationTriangle } from "react-icons/fa"
import Cursor from "@/components/common/Cursor"
import Lines from "@/components/common/Lines"
import LoadingScreen from "@/components/common/LoadingScreen"
import ProgressScroll from "@/components/common/ProgressScroll"

const NotfoundPage = () => {
  const marquess = ["Page Not Found"]
  const AllMarquess = Array(8).fill(marquess).flat()
  return (
    <>
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />
      <Lines />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="main-bg o-hidden">
            <section className="page-error section-padding valign">
              <div className="container">
                <div className="text-center">
                  <h1>404</h1>
                  <p>The page you are looking for doesn’t exist</p>
                  <Link
                    href="/"
                    className="butn butn-md butn-bg main-colorbg radius-30 mt-30"
                  >
                    <span className="text">Back to Home</span>
                  </Link>
                </div>
              </div>
              <div className="marq">
                <div className="main-marq">
                  <div className="slide-har st1 strok">
                    <div className="box">
                      {AllMarquess.map((item, i) => (
                        <div key={i} className="item">
                          <h4 className="d-flex align-items-center">
                            <span>{item}</span>
                            <span className="ml-40">
                              <FaExclamationTriangle />
                            </span>
                          </h4>
                        </div>
                      ))}
                    </div>
                    <div className="box">
                      {AllMarquess.map((item, i) => (
                        <div key={i} className="item">
                          <h4 className="d-flex align-items-center">
                            <span>{item}</span>
                            <span className="ml-40">
                              <FaExclamationTriangle />
                            </span>
                          </h4>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="marq">
                <div className="main-marq">
                  <div className="slide-har st2 non-strok">
                    <div className="box">
                      {AllMarquess.map((item, i) => (
                        <div key={i} className="item">
                          <h4 className="d-flex align-items-center">
                            <span>{item}</span>
                            <span className="ml-40">
                              <i className="fas fa-exclamation-triangle"></i>
                            </span>
                          </h4>
                        </div>
                      ))}
                    </div>
                    <div className="box">
                      {AllMarquess.map((item, i) => (
                        <div key={i} className="item">
                          <h4 className="d-flex align-items-center">
                            <span>{item}</span>
                            <span className="ml-40">
                              <i className="fas fa-exclamation-triangle"></i>
                            </span>
                          </h4>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="marq">
                <div className="main-marq">
                  <div className="slide-har st1 strok">
                    <div className="box">
                      {AllMarquess.map((item, i) => (
                        <div key={i} className="item">
                          <h4 className="d-flex align-items-center">
                            <span>{item}</span>
                            <span className="ml-40">
                              <i className="fas fa-exclamation-triangle"></i>
                            </span>
                          </h4>
                        </div>
                      ))}
                    </div>
                    <div className="box">
                      {AllMarquess.map((item, i) => (
                        <div key={i} className="item">
                          <h4 className="d-flex align-items-center">
                            <span>{item}</span>
                            <span className="ml-40">
                              <i className="fas fa-exclamation-triangle"></i>
                            </span>
                          </h4>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="marq">
                <div className="main-marq">
                  <div className="slide-har st2 non-strok">
                    <div className="box">
                      {AllMarquess.map((item, i) => (
                        <div key={i} className="item">
                          <h4 className="d-flex align-items-center">
                            <span>{item}</span>
                            <span className="ml-40">
                              <i className="fas fa-exclamation-triangle"></i>
                            </span>
                          </h4>
                        </div>
                      ))}
                    </div>
                    <div className="box">
                      {AllMarquess.map((item, i) => (
                        <div key={i} className="item">
                          <h4 className="d-flex align-items-center">
                            <span>{item}</span>
                            <span className="ml-40">
                              <i className="fas fa-exclamation-triangle"></i>
                            </span>
                          </h4>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  )
}

export default NotfoundPage
