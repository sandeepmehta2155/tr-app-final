import React from "react";
import HeaderStyle from "./Header.module.scss";
import Link from "next/link";

export default function HeaderComponent() {
  return (
    <header className={HeaderStyle.header}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <div className="ast_logo  float-start w-100 py-3">
              <a href="https://trivediravi.com">
                <img
                  src="https://trivediravi.com/wp-content/themes/astro/images/header/logo.png"
                  alt="Logo"
                  title="Logo"
                />
              </a>
              <button className="ast_menu_btn d-none">
                <i className="fa fa-bars" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12">
            <div className="ast_main_menu_wrapper">
              <div className="ast_menu w-100 float-start position-relative">
                <ul>
                  <li>
                    <Link href="/">home</Link>
                  </li>
                  <li>
                    <Link href="/about">about</Link>
                  </li>
                  <li>
                    <a href="https://trivediravi.com/my-calendar/">Calendar</a>
                  </li>
                  <li>
                    <Link href="/services">services</Link>
                  </li>
                  <li>
                    <Link href="/blog">blog</Link>
                  </li>
                  <li>
                    <Link href="/appointment">appointment</Link>
                  </li>
                  <li>
                    <Link href="/contact">contact-us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <nav className="navbar navbar-expand-lg navbar-light">
                    <div className={HeaderStyle.logo}>
                        <a href="#">
                            <img src="/assets/Color-Logo.png" />
                        </a>
                    </div>
                    <button type="button" className="navbar-toggler" data-toggle="collapse"
                        data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a href="#" className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#aboutus" className="nav-link">About us</a>
                            </li>
                            <li className="nav-item">
                                <a href="#products" className="nav-link">Products</a>
                            </li>
                            <li className="nav-item">
                                <a href="#brandoutlet" className="nav-link">Become a partner</a>
                            </li>
                            <li className="nav-item">
                                <a href="#career" className="nav-link">Career</a>
                            </li>
                            <li className="nav-item">
                                <a href="#contactus" className="nav-link">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </nav> */}
      </div>
    </header>
  );
}
