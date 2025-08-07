import Image from "next/image"
import Link from "next/link"
import React from "react"
// import { FaFacebook } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa6"
import { MdFacebook } from "react-icons/md"
const Footer = () => {
  return (
    <footer className="clean-footer crev">
      <div className="container pb-40 pt-40 ontop">
        <div className="row justify-content-between">
          <div className="col-lg-2">
            <div className="logo icon-img-100 md-mb80">
              <img src="/assets/images/logo-light.png" alt="" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Contact</h6>
              <h6 className="p-color fw-400">
                5919 Trussville Crossings <br /> Pkwy, Birmingham
              </h6>
              <h6 className="mt-30 mb-15">
                <a href="#0">Hello@webfolio.com</a>
              </h6>
              <a href="#0" className="underline">
                <span className="fz-22 main-color">+2 456 (343) 24 45</span>
              </a>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Useful Links</h6>
              <ul className="rest fz-14 opacity-7">
                <li className="mb-15">
                  <Link href="/page-about">About</Link>
                </li>
                <li className="mb-15">
                  <Link href="/page-services">Services</Link>
                </li>
                <li className="mb-15">
                  <Link href="/blog-grid-sidebar">Blog</Link>
                </li>
                <li>
                  <Link href="/page-contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="column subscribe-minimal">
              <h6 className="sub-title mb-30">Newsletter</h6>
              <div className="form-group mb-40">
                <input type="text" name="subscrib" placeholder="Your Email" />
                <button>
                  <span className="ti-location-arrow"></span>
                </button>
              </div>
              <ul className="rest social-icon d-flex align-items-center">
                <li className="hover-this cursor-pointer">
                  <Link href="#0" className="hover-anim">
                    {/* <FaFacebook size={24} /> */}
                    {/* <MdFacebook size={24} /> */}
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a href="#0" className="hover-anim">
                    <i className="fab fa-dribbble"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <Link href="#0" className="hover-anim">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <Link href="#0" className="hover-anim">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-30 pb-30 mt-80 bord-thin-top">
          <div className="text-center">
            <p className="fz-14">
              © 2024 Webfolio is Proudly Powered by{" "}
              <span className="underline main-color">
                <Link
                  href="https://themeforest.net/user/UiCamp"
                  target="_blank"
                >
                  UiCamp
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="circle-blur">
        <Image
          src="/assets/images/patterns/blur1.png"
          alt="Blurred circle background"
          width={30} // you can adjust this
          height={30}
        />
      </div>
    </footer>
  )
}

export default Footer
