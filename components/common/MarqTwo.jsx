import Link from "next/link"
import Image from "next/image"

const MarqTwo = () => {
  const marquess = ["Get In Touch"]
  const AllMarquess = Array(6).fill(marquess).flat()
  const contact = ["Contact Us"]
  const AllContact = Array(6).fill(contact).flat()

  return (
    <section className="call-marq section-padding o-hidden">
      <div className="main-marq lrg sub-bg pt-20 pb-20">
        <div className="slide-har st1">
          <div className="box">
            {AllMarquess.map((item, i) => (
              <div key={i} className="item">
                <h4 className="d-flex align-items-center">
                  <span>{item}</span>
                  <span className="icon-img-50 ml-40">
                    <Image
                      src="/assets/images/star.png"
                      alt=""
                      height={30}
                      width={30}
                    />
                  </span>
                </h4>
              </div>
            ))}
            {AllMarquess.map((item, i) => (
              <div key={i} className="item">
                <h4 className="d-flex align-items-center">
                  <span>{item}</span>
                  <span className="icon-img-50 ml-40">
                    <Image
                      src="/assets/images/star.png"
                      alt=""
                      height={30}
                      width={30}
                    />
                  </span>
                </h4>
              </div>
            ))}
          </div>

          <Link href="/contact" className="overlay-link"></Link>
        </div>
      </div>
      <div className="main-marq bord-item">
        <div className="slide-har st2">
          <div className="box">
            {AllContact.map((item, i) => (
              <div key={i} className="item">
                <h4 className="d-flex align-items-center">
                  <span>{item}</span>
                </h4>
              </div>
            ))}
          </div>
          <div className="box">
            {AllContact.map((item, i) => (
              <div key={i} className="item">
                <h4 className="d-flex align-items-center">
                  <span>{item}</span>
                </h4>
              </div>
            ))}
          </div>

          <Link href="/contact" className="overlay-link"></Link>
        </div>
      </div>
    </section>
  )
}

export default MarqTwo
