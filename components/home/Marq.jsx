import Image from "next/image"
import React from "react"

const Marq = () => {
  const marquee = [
    "Web Desgin",
    "Web Developement",
    "Seo eCommerce",
    "Digital Marckting",
    "UI/UX Desgin",
  ]

  return (
    <section className="opacity-7">
      <div className="main-marq xlrg o-hidden">
        <div className="slide-har st1 strok">
          <div className="box">
            {marquee.map((item, i) => (
              <div key={i} className="item">
                <h4 className="d-flex align-items-center">
                  <span>{item}</span>
                  <span className="icon-img-50 ml-40">
                    <Image
                      src="/assets/images/star.png"
                      alt=""
                      width={600}
                      height={600}
                    />
                  </span>
                </h4>
              </div>
            ))}
          </div>
          <div className="box">
            {marquee.map((item, i) => (
              <div key={i} className="item">
                <h4 className="d-flex align-items-center">
                  <span>{item}</span>
                  <span className="icon-img-50 ml-40">
                    <Image
                      src="/assets/images/star.png"
                      alt=""
                      width={120}
                      height={120}
                    />
                  </span>
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="main-marq xlrg o-hidden">
        <div className="slide-har st2 non-strok">
          <div className="box">
            {marquee.map((item, i) => (
              <div key={i} className="item">
                <h4 className="d-flex align-items-center">
                  <span>{item}</span>
                  <span className="icon-img-50 ml-40">
                    <Image
                      src="/assets/images/star.png"
                      alt=""
                      width={120}
                      height={120}
                    />
                  </span>
                </h4>
              </div>
            ))}
          </div>
          <div className="box">
            {marquee.map((item, i) => (
              <div key={i} className="item">
                <h4 className="d-flex align-items-center">
                  <span>{item}</span>
                  <span className="icon-img-50 ml-40">
                    <Image
                      src="/assets/images/star.png"
                      alt=""
                      width={120}
                      height={120}
                    />
                  </span>
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Marq
