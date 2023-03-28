import React, { useState, useEffect } from 'react'
import shrikant_profile from "./../../assets/img/shrikant_profile.jpg";
import { Link } from "react-router-dom";
export function getAge(d1){
    var now = new Date();
    var d2 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
    var diff = d2.getTime() - d1.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}
export default function AboutComponent() {
    const [state, setState] = useState(false);
    useEffect(() => {
        setTimeout(()=>setState(true), 300);
    });
  return (
    <section className="fxt-about-section bg-color-1" id="section2">
        <div className="container">
            <div className="fxt-heading-layout1">
                <h2 className="heading-title">About Me</h2>
                <div hidden className="heading-paragraph">There are many variations of passages of Lorem Ipsum available
                </div>
                <div className="heading-line"></div>
            </div>
            <div className="row">
                <div className={`col-lg-4 col-12 has-animation ${state?"active-animation":""}`}>
                    <div className="fxt-about-box-layout1">
                        <div className="translate-zoomout-10 opacity-animation transition-50 transition-delay-500">
                            <div className="item-img">
                                <img src={shrikant_profile} alt="About"/>
                            </div>                            
                        </div>
                        <div className="translate-bottom-50 opacity-animation transition-150 transition-delay-1000">
                            <Link className="download-btn btn-fill">DOWNLOAD CV<i className="flaticon-download"></i></Link >
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 col-12">
                    <div className="fxt-about-box-layout2">
                        <h3 className="item-title">Shrikant Mergu</h3>
                        <div className="item-subtitle">React Developer</div>
                        <p>Hi Everyone, I am <span className={"text-primary"}>Shrikant Mergu</span> from Solapur, India. I am a working as a React Developer and complete a graduation in Bachelor's Computer Application from HNCC Solapur.</p>
                        <div className="personal-info">
                            <div className="row">
                                <div className="col-md-5 col-12">
                                    <div className="info-list">
                                        <ul>
                                            <li><span >Birthday:</span>30/06/1999</li>
                                            <li><span >City:</span>Solapur</li>
                                            <li><span >Study:</span>Solapur University</li>
                                            {/* <li><span>Website:</span><Link to={"https://shrikantresume-react.vercel.app/"}>https://shrikantresume-react.vercel.app/</Link></li> */}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-7 col-12">
                                    <div className="info-list">
                                        <ul>
                                            <li><span>Age:</span>{getAge(new Date(1999, 6, 30, 0, 0, 0))} Years</li>
                                            <li><span>Degree:</span>Master - Persuing</li>
                                            <li><span>Mail:</span>
                                                <Link to={"mailto:shrikantmergu143@gmail.com"}>shrikantmergu143@gmail.com
                                                </Link>
                                            </li>
                                            <li>
                                                <span>Phone:</span>
                                                <Link to={"tel:+9028309906"}>
                                                +91 9028 309 906
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
