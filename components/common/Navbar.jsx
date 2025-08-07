"use client"
import Link from "next/link"
import React, { useEffect } from "react"

const Navbar = () => {
  function handleScroll() {
    const bodyScroll = window.scrollY
    const navbar = document.querySelector(".navbar")

    if (bodyScroll > 300) navbar.classList.add("nav-scroll")
    else navbar.classList.remove("nav-scroll")
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  function handleDropdownMouseMove(event) {
    event.currentTarget.querySelector(".dropdown-menu").classList.add("show")
  }

  function handleDropdownMouseLeave(event) {
    event.currentTarget.querySelector(".dropdown-menu").classList.remove("show")
  }
  function handleToggleNav() {
    if (
      document
        .querySelector(".navbar .navbar-collapse")
        .classList.contains("show")
    ) {
      document
        .querySelector(".navbar .navbar-collapse")
        .classList.remove("show")
    } else if (
      !document
        .querySelector(".navbar .navbar-collapse")
        .classList.contains("show")
    ) {
      document.querySelector(".navbar .navbar-collapse").classList.add("show")
    }
  }

  return (
    <nav className="navbar navbar-expand-lg bord blur">
      <div className="container o-hidden">
        <a className="logo icon-img-100" href="#">
          <img src="/assets/images/logo-light.png" alt="logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleToggleNav}
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" href="/">
                <span className="rolling-text">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/services">
                <span className="rolling-text">services</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/portfolio">
                <span className="rolling-text">Protfolio</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact">
                <span className="rolling-text">Contact Us</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="contact-button">
          <a
            href="/contact"
            className="butn butn-sm butn-bg main-colorbg radius-5"
          >
            <span className="text">Let&apos;s contact</span>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
