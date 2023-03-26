import React, { useState, useEffect } from 'react'
import shrikant_profile from "./../../assets/img/shrikant_profile.jpg";
import { Link } from "react-router-dom";

export default function HomeComponent() {
    const [state, setState] = useState(false);
    useEffect(() => {
        setTimeout(()=>setState(true), 300);
    });
  return (
    <section className="fxt-main-banner-section bg-common" >
        <a name={"wrapper"}  href />
        <div className="container">
            <div className={`fxt-main-banner-box-layout1 has-animation ${state?"active-animation":""}`}>
                <div className="top-content">
                    <div className="item-img">
                        <div className="translate-zoomout-10 opacity-animation transition-50 transition-delay-100">
                            <img src={shrikant_profile} alt="About"/>
                        </div>
                    </div>
                    <div className="item-content">
                        <div className="translate-bottom-100 opacity-animation transition-150 transition-delay-500">
                            <div className="item-top-text">Hello</div>
                        </div>
                        <div className="translate-bottom-100 opacity-animation transition-150 transition-delay-800">
                            <h1 className="item-title">I’m Shrikant Mergu</h1>
                        </div>
                        <div className="translate-bottom-100 opacity-animation transition-150 transition-delay-1100">
                            <div className="cd-intro">
                                <h2 className="small-text cd-headline clip">
                                    <span className="item-subtitle">Become a </span>
                                    <span className="px-2 cd-words-wrapper">
                                        <b className="item-subtitle is-visible"> React Developer </b>
                                        <b> Web Developer</b>
                                    </span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-content">
                    <div className="item-social">
                        <ul>
                            <li>
                                <div
                                    className="translate-bottom-100 opacity-animation transition-50 transition-delay-1300">
                                    <Link to={"https://www.facebook.com/shrikant.mergu.5/"} target={"_black"} ><i className="fab fa-facebook-f"></i></Link >
                                </div>
                            </li>
                            <li>
                                <div
                                    className="translate-bottom-100 opacity-animation transition-50 transition-delay-1500">
                                    <Link to={"https://twitter.com/shrikan22928239"} target={"_black"} ><i className="fab fa-twitter"></i></Link >
                                </div>
                            </li>
                            <li>
                                <div
                                    className="translate-bottom-100 opacity-animation transition-50 transition-delay-1700">
                                    <Link to={"https://www.instagram.com/_.shrikantmergu143/"} target={"_black"} ><i className="fab fa-instagram"></i></Link >
                                </div>
                            </li>
                            <li>
                                <div
                                    className="translate-bottom-100 opacity-animation transition-50 transition-delay-1900">
                                    <Link to={"https://github.com/shrikantmergu143/"} target={"_black"} ><i className="fab fa-github"></i></Link >
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="item-website">
                        <div className="translate-bottom-100 opacity-animation transition-50 transition-delay-2400">
                            <Link to={"https://shrikantresume-react.vercel.app/"} target={"_blanck"} > https://shrikantresume-react.vercel.app/</Link >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
