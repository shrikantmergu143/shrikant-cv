import React from 'react'
import logoDefault from "./../../template/media/logo-default.png";
import logoSticky from "./../../template/media/logo-sticky.png";
import { Link } from "react-router-dom";
import { Logo } from '../common/Icon';

export default function Header() {
  return (
    <header className="sticky-header menu-layout1">
        <div className="container">
            <div className="row d-flex align-items-center">
                <div className="col-lg-2">
                    <div className="logo-area">
                        <Link href="index-2.html" className="default-logo">
                            {/* <img src={logoDefault} alt="logo" className="img-fluid"/> */}
                            <Logo className={"logo"} />
                        </Link>
                        <Link href="index-2.html" className="sticky-logo">
                            {/* <img src={logoSticky} alt="logo" className="img-fluid"/> */}
                            <Logo className={"logo"} />
                        </Link>
                    </div>
                </div>
                <div className="col-lg-10 d-flex justify-content-end">
                    <nav id="dropdown" className="template-main-menu">
                        <ul id="onepage_nav">
                            <li className="current">
                                <Link to="#wrapper">Home</Link></li>
                            <li><Link to="#section2">About</Link></li>
                            <li><Link to="#section3">Skills</Link></li>
                            <li><Link to="#section4">Experiences</Link></li>
                            <li><Link to="#section5">Portfolio</Link></li>
                            <li><Link to="#section6">Pricing</Link></li>
                            <li><Link to="#section7">Blog</Link></li>
                            <li><Link to="#section8">Contact</Link></li>
                            <li><Link to="/admin" >Admin</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
  )
}
