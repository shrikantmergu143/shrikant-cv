import React, { useState, useEffect } from 'react'
import shrikant_profile from "./../../assets/img/shrikant_profile.jpg"
import logoDefault from "./../../template/media/logo-default.png";
import logoSticky from "./../../template/media/logo-sticky.png";
import portfolio1 from "./../../template/media/portfolio/portfolio1.jpg"
import map from "./../../template/media/figure/map.png";
import Firebase from "./../../firebase/Firebase";
import { Link } from "react-router-dom";
import { Icon } from '../common/Icon';
import GitHub from "./../github/Index";

export function getAge(d1){
    var now = new Date();
    var d2 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
    var diff = d2.getTime() - d1.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}

export const Skills = [
    {
        icon:"bx bxl-react text-primary",
        title:"ReactJS",
        percentage:80,
    },
    {
        icon:"bx bxl-react text-primary",
        title:"React Native",
        percentage:80,
    },
    {
        icon:"bx bxl-javascript text-primary",
        title:"JavaScript",
        percentage:80,
    },
    {
        icon:"bx bxl-nodejs text-primary",
        title:"NodeJS",
        percentage:80,
    },
    {
        icon:"bx bxl-python text-primary",
        title:"Python",
        percentage:80,
    },
    {
        icon:"bx bxl-redux text-primary",
        title:"React Redux",
        percentage:80,
    },
    {
        icon:"bx bxl-php text-primary",
        title:"PHP",
        percentage:80,
    },
    {
        icon:"bx bxl-mongodb text-primary",
        title:"MongoDB",
        percentage:80,
    },
    {
        icon:"bx bxl-django text-primary",
        title:"DJango",
        percentage:80,
    },
    {
        icon:"bx bxl-firebase text-primary",
        title:"Firebase",
        percentage:80,
    },
    {
        icon:"bx bxl-git text-primary",
        title:"Git",
        percentage:80,
    }
]
export default function DashboardPage() {
        const [state, setState] = useState(false);
        useEffect(() => {
        setTimeout(()=>setState(true), 300);
        console.log("Firebase", Firebase)
    
        });
  return (
    <React.Fragment>
        <section className="fxt-main-banner-section bg-common">
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
                                            {/* <b>UI/UX Designer</b>
                                            <b>WordPress Developer</b>*/}
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
                                        <Link><i className="fab fa-facebook-f"></i></Link >
                                    </div>
                                </li>
                                <li>
                                    <div
                                        className="translate-bottom-100 opacity-animation transition-50 transition-delay-1500">
                                        <Link><i className="fab fa-twitter"></i></Link >
                                    </div>
                                </li>
                                <li>
                                    <div
                                        className="translate-bottom-100 opacity-animation transition-50 transition-delay-1700">
                                        <Link><i className="fab fa-instagram"></i></Link >
                                    </div>
                                </li>
                                <li>
                                    <div
                                        className="translate-bottom-100 opacity-animation transition-50 transition-delay-1900">
                                        <Link><i className="fab fa-pinterest-p"></i></Link >
                                    </div>
                                </li>
                                <li>
                                    <div
                                        className="translate-bottom-100 opacity-animation transition-50 transition-delay-2100">
                                        <Link><i className="fab fa-dribbble"></i></Link >
                                    </div>
                                </li>
                                <li>
                                    <div
                                        className="translate-bottom-100 opacity-animation transition-50 transition-delay-2300">
                                        <Link><i className="fab fa-behance"></i></Link >
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

        <section className="fxt-about-section bg-color-1" id="section2">
            <div className="container">
                <div className="fxt-heading-layout1">
                    <h2 className="heading-title">About Me</h2>
                    <div className="heading-paragraph">There are many variations of passages of Lorem Ipsum available
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
                            <div className="item-subtitle">React Developer &amp; Web Developer</div>
                            <p>Hi Everyone, I am <span className={"text-primary"}>Shrikant Mergu</span> from Solapur, India. I am a working as a React Developer and complete a graduation in Bachelor's Computer Application from HNCC Solapur.</p>
                            <div className="personal-info">
                                <div className="row">
                                    <div className="col-md-5 col-12">
                                        <div className="info-list">
                                            <ul>
                                                <li><span>Birthday:</span>30. 06. 1999</li>
                                                <li><span>City:</span>Solapur</li>
                                                <li><span>Study:</span>Solapur University</li>
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
        <section className="fxt-skill-section fxt-skill-section_custome" id="section3">
            <div className="container">
                <div className="fxt-heading-layout1">
                    <h2 className="heading-title">Professional <strong class="text-primary">Skills </strong></h2>
                    <div className="heading-line"></div>
                </div>
                <div className="row mb-5">
                    {Skills?.map((item, index)=>(
                        <div key={index} className="mockups has-animation active-animation">
                            <div className="translate-left-10 opacity-animation transition-200 transition-delay-100">
                                <div className="fxt-service-box-layout1">
                                    <div className=" animation-delay0">
                                        <i className={`${item?.icon} `} />
                                    </div>
                                    <div className="item-content">
                                        <h3 className="item-title"><Link>{item?.title}</Link ></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <GitHub/>
            </div>
        </section>
        <section className="fxt-skill-section" id="section3" hidden>
            <div className="container">                
                <div className="row">
                    <div className="col-lg-6">
                        <div className="fxt-skill-wrap-layout1">
                            <div className="item-heading">
                                <h2 className="item-title">Technical Skills</h2>
                                <p>There are many variations available but the majority</p>
                            </div>
                            <ul className="fxt-skill-box-layout1">
                                <li className="single-item">
                                    <label>ReactJS</label>
                                    <div className="progress">
                                        <div className="progress-bar wow slideInLeft" data-wow-delay="0ms" data-wow-duration="2000ms"
                                            role="progressbar"
                                            style={{width: "85%", visibility: "visible", animationDuration: "2000ms", animationDelay: "0ms", animationName: "slideInLeft"}}>
                                            <span>85%</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="single-item">
                                    <label>JavaScript</label>
                                    <div className="progress">
                                        <div className="progress-bar wow slideInLeft" data-wow-delay="200ms" data-wow-duration="2000ms"
                                            role="progressbar"
                                            style={{width: "80%", visibility: "visible", animationDuration: "2000ms", animationDelay: "0ms", animationName: "slideInLeft"}}>
                                            <span>80%</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="single-item">
                                    <label>HTML5</label>
                                    <div className="progress">
                                        <div className="progress-bar wow slideInLeft" data-wow-delay="300ms" data-wow-duration="2000ms"
                                            role="progressbar"
                                            style={{width: "85%", visibility: "visible", animationDuration: "2000ms", animationDelay: "300ms", animationName: "slideInLeft"}}>
                                            <span>90%</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="single-item">
                                    <label>React Native</label>
                                    <div className="progress">
                                        <div className="progress-bar wow slideInLeft" data-wow-delay="400ms" data-wow-duration="2000ms"
                                            role="progressbar"
                                            style={{width: "60%", visibility: "visible", animationDuration: "2000ms", animationDelay: "4000ms", animationName: "slideInLeft"}}>
                                            <span>60%</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="single-item">
                                    <label>PHP / MYSQL</label>
                                    <div className="progress">
                                        <div className="progress-bar wow slideInLeft" data-wow-delay="400ms" data-wow-duration="2000ms"
                                            role="progressbar"
                                            style={{width: "69%", visibility: "visible", animationDuration: "2000ms", animationDelay: "4000ms", animationName: "slideInLeft"}}>
                                            <span>69%</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="fxt-skill-wrap-layout2">
                            <div className="item-heading">
                                <h2 className="item-title">Professional Skills</h2>
                                <p>There are many variations available but the majority</p>
                            </div>
                            <ul className="fxt-skill-box-layout2">
                                <li className="single-item">
                                    <label>ReactJS</label>
                                    <div className="progress">
                                        <div className="progress-bar wow slideInLeft" data-wow-delay="0ms" data-wow-duration="2000ms"
                                            role="progressbar"
                                            style={{width: "85%", visibility: "visible", animationDuration: "2000ms", animationDelay: "0ms", animationName: "slideInLeft"}}>
                                            <span>85%</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="single-item">
                                    <label>React Redux</label>
                                    <div className="progress">
                                        <div className="progress-bar wow slideInLeft" data-wow-delay="200ms" data-wow-duration="2000ms"
                                            role="progressbar"
                                            style={{width: "93%", visibility: "visible", animationDuration: "2000ms", animationDelay: "0ms", animationName: "slideInLeft"}}>
                                            <span>93%</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="single-item">
                                    <label>NODEJS</label>
                                    <div className="progress">
                                        <div className="progress-bar wow slideInLeft" data-wow-delay="300ms" data-wow-duration="2000ms"
                                            role="progressbar"
                                            style={{width: "65%", visibility: "visible", animationDuration: "2000ms", animationDelay: "300ms", animationName: "slideInLeft"}}>
                                            <span>65%</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="single-item">
                                    <label>PHP</label>
                                    <div className="progress">
                                        <div className="progress-bar wow slideInLeft" data-wow-delay="400ms" data-wow-duration="2000ms"
                                            role="progressbar"
                                            style={{width: "85%", visibility: "visible", animationDuration: "2000ms", animationDelay: "4000ms", animationName: "slideInLeft"}}>
                                            <span>69%</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="single-item">
                                    <label>Laravel</label>
                                    <div className="progress">
                                        <div className="progress-bar wow slideInLeft" data-wow-delay="400ms" data-wow-duration="2000ms"
                                            role="progressbar"
                                            style={{width: "50%", visibility: "visible", animationDuration: "2000ms", animationDelay: "4000ms", animationName: "slideInLeft"}}>
                                            <span>50%</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section> 

        <section className="fxt-service-section bg-color-1" id="section4">
            <div className="container">
                <div className="fxt-heading-layout1">
                    <h2 className="heading-title">What I do</h2>
                    <div className="heading-paragraph">There are many variations of passages of Lorem Ipsum available</div>
                    <div className="heading-line"></div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 mockups has-animation active-animation">
                        <div className="translate-left-10 opacity-animation transition-200 transition-delay-100">
                            <div className="fxt-service-box-layout1">
                                <div className="item-img animation-delay0">
                                    <img src="./template/media/service/service1.png" alt="service"/>
                                </div>
                                <div className="item-content">
                                    <h3 className="item-title"><Link>UI/UX Design</Link ></h3>
                                    <p>There are many variations passages of Lorem Ipsum available majority have dummy
                                        passage.</p>
                                    <Link className="item-btn">Read More</Link >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 mockups has-animation active-animation">
                        <div className="translate-left-10 opacity-animation transition-200 transition-delay-400">
                            <div className="fxt-service-box-layout1">
                                <div className="item-img animation-delay1">
                                    <img src="./template/media/service/service2.png" alt="service"/>
                                </div>
                                <div className="item-content">
                                    <h3 className="item-title"><Link>Web Development</Link ></h3>
                                    <p>There are many variations passages of Lorem Ipsum available majority have dummy
                                        passage.</p>
                                    <Link className="item-btn">Read More</Link >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 mockups has-animation active-animation">
                        <div className="translate-left-10 opacity-animation transition-200 transition-delay-700">
                            <div className="fxt-service-box-layout1">
                                <div className="item-img animation-delay2">
                                    <img src="./template/media/service/service3.png" alt="service"/>
                                </div>
                                <div className="item-content">
                                    <h3 className="item-title"><Link>Apps Development</Link ></h3>
                                    <p>There are many variations passages of Lorem Ipsum available majority have dummy
                                        passage.</p>
                                    <Link className="item-btn">Read More</Link >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 mockups has-animation active-animation">
                        <div className="translate-left-10 opacity-animation transition-200 transition-delay-100">
                            <div className="fxt-service-box-layout1">
                                <div className="item-img animation-delay3">
                                    <img src="./template/media/service/service4.png" alt="service"/>
                                </div>
                                <div className="item-content">
                                    <h3 className="item-title"><Link>Strategy Solutions</Link ></h3>
                                    <p>There are many variations passages of Lorem Ipsum available majority have dummy
                                        passage.</p>
                                    <Link className="item-btn">Read More</Link >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 mockups has-animation active-animation">
                        <div className="translate-left-10 opacity-animation transition-200 transition-delay-300">
                            <div className="fxt-service-box-layout1">
                                <div className="item-img animation-delay4">
                                    <img src="./template/media/service/service5.png" alt="service"/>
                                </div>
                                <div className="item-content">
                                    <h3 className="item-title"><Link>Digital Marketing</Link ></h3>
                                    <p>There are many variations passages of Lorem Ipsum available majority have dummy
                                        passage.</p>
                                    <Link className="item-btn">Read More</Link >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 mockups has-animation active-animation">
                        <div className="translate-left-10 opacity-animation transition-200 transition-delay-700">
                            <div className="fxt-service-box-layout1">
                                <div className="item-img animation-delay5">
                                    <img src="./template/media/service/service6.png" alt="service"/>
                                </div>
                                <div className="item-content">
                                    <h3 className="item-title"><Link>Social Media</Link ></h3>
                                    <p>There are many variations passages of Lorem Ipsum available majority have dummy
                                        passage.</p>
                                    <Link className="item-btn">Read More</Link >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="fxt-testimonial-section parallaxie" data-bg-image="./template/media/figure/figure2.jpg">
            <div className="container">
                <div className="rc-carousel dot-control-layout1 owl-carousel owl-rtl owl-loaded owl-drag" data-loop="true" data-items="3" data-margin="50" data-autoplay="false"
                    data-autoplay-timeout="3000" data-smart-speed="700" data-dots="true" data-nav="false"
                    data-nav-speed="false" data-r-x-small="1" data-r-x-small-nav="false" data-r-x-small-dots="true"
                    data-r-x-medium="1" data-r-x-medium-nav="false" data-r-x-medium-dots="true" data-r-small="1"
                    data-r-small-nav="false" data-r-small-dots="true" data-r-medium="2" data-r-medium-nav="false"
                    data-r-medium-dots="true" data-r-large="2" data-r-large-nav="false" data-r-large-dots="true"
                    data-r-extra-large="3" data-r-extra-large-nav="false" data-r-extra-large-dots="true">
                    <div className="fxt-testimonial-box-layout1">
                        <div className="item-icon">
                            <i className="flaticon-right-quote"></i>
                        </div>
                        <div className="item-text">There are many variations passages of Lorem an Ipsum available majority
                            have injected humour passages.</div>
                        <div className="item-name">Maria Lee <span>- CEO Btec</span></div>
                    </div>
                    <div className="fxt-testimonial-box-layout1">
                        <div className="item-icon">
                            <i className="flaticon-right-quote"></i>
                        </div>
                        <div className="item-text">There are many variations passages of Lorem an Ipsum.</div>
                        <div className="item-name">Eliza Snowhite <span>- CEO Atec</span></div>
                    </div>                    
                    <div className="fxt-testimonial-box-layout1">
                        <div className="item-icon">
                            <i className="flaticon-right-quote"></i>
                        </div>
                        <div className="item-text">There are many variations passages of Lorem an Ipsum available majority
                            have injected humour.</div>
                        <div className="item-name">Matt Clifford <span>- Zoas MRX</span></div>
                    </div>
                    <div className="fxt-testimonial-box-layout1">
                        <div className="item-icon">
                            <i className="flaticon-right-quote"></i>
                        </div>
                        <div className="item-text">There are many variations passages of Lorem an Ipsum available majority
                            have injected humour.</div>
                        <div className="item-name">Matt Clifford <span>- Zoas MRX</span></div>
                    </div>
                    <div className="fxt-testimonial-box-layout1">
                        <div className="item-icon">
                            <i className="flaticon-right-quote"></i>
                        </div>
                        <div className="item-text">There are many variations passages of Lorem an Ipsum available majority
                            have injected humour passages.</div>
                        <div className="item-name">Maria Lee <span>- CEO Btec</span></div>
                    </div>
                    <div className="fxt-testimonial-box-layout1">
                        <div className="item-icon">
                            <i className="flaticon-right-quote"></i>
                        </div>
                        <div className="item-text">There are many variations passages of Lorem an Ipsum available majority
                            have injected humour.</div>
                        <div className="item-name">Matt Clifford <span>- Zoas MRX</span></div>
                    </div>
                    <div className="fxt-testimonial-box-layout1">
                        <div className="item-icon">
                            <i className="flaticon-right-quote"></i>
                        </div>
                        <div className="item-text">There are many variations passages of Lorem an Ipsum available majority
                            have injected humour.</div>
                        <div className="item-name">Matt Clifford <span>- Zoas MRX</span></div>
                    </div>
                </div>
            </div>       
        </section>

        <section className="fxt-portfolio-section bg-color-1" id="section5">
            <div className="container">
                <div className="fxt-heading-layout1">
                    <h2 className="heading-title">Recent Portfolio</h2>
                    <div className="heading-paragraph">There are many variations of passages of Lorem Ipsum available</div>
                    <div className="heading-line"></div>
                </div>
                <div className="isotope-wrap">
                    <div className="text-center">
                        <div className="isotope-classes-tab isotop-btn">
                            <Link className="current nav-item" data-filter="*">All Categories</Link >
                            <Link className="nav-item" data-filter=".web">Web Design</Link >
                            <Link className="nav-item" data-filter=".mockups">Branding Mockups</Link >
                            <Link className="nav-item" data-filter=".photography">Photography</Link >
                        </div>
                    </div>
                    <div className="row featuredContainer">
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12 mockups has-animation active-animation">
                            <div className="translate-left-10 opacity-animation transition-200 transition-delay-100">
                                <div className="fxt-portfolio-box-layout1">
                                    <div className="item-img">
                                        <img src={portfolio1} alt="Portfolio"/>
                                        <div className="item-content">
                                            <div className="item-icon"><Link href="./template/media/portfolio/portfolio1.jpg" className="popup-zoom"
                                                    data-fancybox-group="gallery"><i className="fas fa-images"></i></Link ></div>
                                            <h3 className="item-title"><Link href="single-project.html">BRANDING DESIGN</Link ></h3>
                                            <div className="item-paragraph">Work description here</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12 web has-animation active-animation">
                            <div className="translate-left-10 opacity-animation transition-200 transition-delay-400">
                                <div className="fxt-portfolio-box-layout1">
                                    <div className="item-img">
                                        <img src="./template/media/portfolio/portfolio2.jpg" alt="Portfolio"/>
                                        <div className="item-content">
                                            <div className="item-icon"><Link href="./template/media/portfolio/portfolio2.jpg" className="popup-zoom"
                                                    data-fancybox-group="gallery"><i className="fas fa-images"></i></Link ></div>
                                            <h3 className="item-title"><Link href="single-project.html">BRANDING DESIGN</Link ></h3>
                                            <div className="item-paragraph">Work description here</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12 photography has-animation active-animation">
                            <div className="translate-left-10 opacity-animation transition-200 transition-delay-700">
                                <div className="fxt-portfolio-box-layout1">
                                    <div className="item-img">
                                        <img src="./template/media/portfolio/portfolio3.jpg" alt="Portfolio"/>
                                        <div className="item-content">
                                            <div className="item-icon"><Link href="./template/media/portfolio/portfolio3.jpg" className="popup-zoom"
                                                    data-fancybox-group="gallery"><i className="fas fa-images"></i></Link ></div>
                                            <h3 className="item-title"><Link href="single-project.html">BRANDING DESIGN</Link ></h3>
                                            <div className="item-paragraph">Work description here</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12 photography has-animation active-animation">
                            <div className="translate-left-10 opacity-animation transition-200 transition-delay-1000">
                                <div className="fxt-portfolio-box-layout1">
                                    <div className="item-img">
                                        <img src="./template/media/portfolio/portfolio4.jpg" alt="Portfolio"/>
                                        <div className="item-content">
                                            <div className="item-icon"><Link href="./template/media/portfolio/portfolio4.jpg" className="popup-zoom"
                                                    data-fancybox-group="gallery"><i className="fas fa-images"></i></Link ></div>
                                            <h3 className="item-title"><Link href="single-project.html">BRANDING DESIGN</Link ></h3>
                                            <div className="item-paragraph">Work description here</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12 web photography has-animation active-animation ">
                            <div className="translate-left-10 opacity-animation transition-200 transition-delay-1300">
                                <div className="fxt-portfolio-box-layout1">
                                    <div className="item-img">
                                        <img src="./template/media/portfolio/portfolio5.jpg" alt="Portfolio"/>
                                        <div className="item-content">
                                            <div className="item-icon"><Link href="./template/media/portfolio/portfolio5.jpg" className="popup-zoom"
                                                    data-fancybox-group="gallery"><i className="fas fa-images"></i></Link ></div>
                                            <h3 className="item-title"><Link href="single-project.html">BRANDING DESIGN</Link ></h3>
                                            <div className="item-paragraph">Work description here</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12 mockups has-animation active-animation">
                            <div className="translate-left-10 opacity-animation transition-200 transition-delay-1600">
                                <div className="fxt-portfolio-box-layout1">
                                    <div className="item-img">
                                        <img src="./template/media/portfolio/portfolio6.jpg" alt="Portfolio"/>
                                        <div className="item-content">
                                            <div className="item-icon"><Link href="./template/media/portfolio/portfolio6.jpg" className="popup-zoom"
                                                    data-fancybox-group="gallery"><i className="fas fa-images"></i></Link ></div>
                                            <h3 className="item-title"><Link href="single-project.html">BRANDING DESIGN</Link ></h3>
                                            <div className="item-paragraph">Work description here</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12 photography has-animation active-animation">
                            <div className="translate-left-10 opacity-animation transition-200 transition-delay-1900">
                                <div className="fxt-portfolio-box-layout1">
                                    <div className="item-img">
                                        <img src="./template/media/portfolio/portfolio7.jpg" alt="Portfolio"/>
                                        <div className="item-content">
                                            <div className="item-icon"><Link href="./template/media/portfolio/portfolio7.jpg" className="popup-zoom"
                                                    data-fancybox-group="gallery"><i className="fas fa-images"></i></Link ></div>
                                            <h3 className="item-title"><Link href="single-project.html">BRANDING DESIGN</Link ></h3>
                                            <div className="item-paragraph">Work description here</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12 photography has-animation active-animation">
                            <div className="translate-left-10 opacity-animation transition-200 transition-delay-2200">
                                <div className="fxt-portfolio-box-layout1">
                                    <div className="item-img">
                                        <img src="./template/media/portfolio/portfolio8.jpg" alt="Portfolio"/>
                                        <div className="item-content">
                                            <div className="item-icon"><Link href="./template/media/portfolio/portfolio8.jpg" className="popup-zoom"
                                                    data-fancybox-group="gallery"><i className="fas fa-images"></i></Link ></div>
                                            <h3 className="item-title"><Link href="single-project.html">BRANDING DESIGN</Link ></h3>
                                            <div className="item-paragraph">Work description here</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12 photography has-animation active-animation">
                            <div className="translate-left-10 opacity-animation transition-200 transition-delay-2500">
                                <div className="fxt-portfolio-box-layout1">
                                    <div className="item-img">
                                        <img src="./template/media/portfolio/portfolio9.jpg" alt="Portfolio"/>
                                        <div className="item-content">
                                            <div className="item-icon"><Link href="./template/media/portfolio/portfolio9.jpg" className="popup-zoom"
                                                    data-fancybox-group="gallery"><i className="fas fa-images"></i></Link ></div>
                                            <h3 className="item-title"><Link href="single-project.html">BRANDING DESIGN</Link ></h3>
                                            <div className="item-paragraph">Work description here</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="fxt-progress-section bg-common bg-attachment-fixed" data-bg-image="./template/media/figure/figure1.jpg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="fxt-progress-box-layout1">
                            <h2 className="counting-text counter">2,500</h2>
                            <div className="item-label">Project Works</div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="fxt-progress-box-layout1">
                            <h2 className="counting-text counter">1,764</h2>
                            <div className="item-label">Completed Project</div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="fxt-progress-box-layout1">
                            <h2 className="counting-text counter">548</h2>
                            <div className="item-label">Happy Clients</div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="fxt-progress-box-layout1">
                            <h2 className="counting-text counter">739</h2>
                            <div className="item-label">Award Wins</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="fxt-pricing-section bg-color-1" id="section6">
            <div className="container">
                <div className="fxt-heading-layout1">
                    <h2 className="heading-title">Pricing Table</h2>
                    <div className="heading-paragraph">There are many variations of passages of Lorem Ipsum available</div>
                    <div className="heading-line"></div>
                </div>
                <div className="row">
                    <div className="col-lg-4 has-animation  active-animation">
                        <div className="translate-left-10 opacity-animation transition-200 transition-delay-100">
                            <div className="fxt-pricing-box-layout1">
                                <div className="pricing-amount">
                                    <div className="item-price">$1600<span>/month</span></div>
                                </div>
                                <div className="pricing-title">
                                    <h3 className="item-title">Full-time work</h3>
                                    <div className="item-subtitle">Available for full time</div>
                                </div>
                                <div className="features-list">
                                    <ul>
                                        <li>Ui/Ux Design</li>
                                        <li>Digital Marketing</li>
                                        <li>Web Development</li>
                                        <li>Apps Developing</li>
                                        <li>24/7 Support Done</li>
                                    </ul>
                                </div>
                                <Link className="item-btn btn-fill">HIRE ME</Link >
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 has-animation  active-animation">
                        <div className="translate-left-10 opacity-animation transition-200 transition-delay-400">
                            <div className="fxt-pricing-box-layout1">
                                <div className="pricing-amount">
                                    <div className="item-price">$400<span>/Per Project</span></div>
                                </div>
                                <div className="pricing-title">
                                    <h3 className="item-title">Fixed Price Project</h3>
                                    <div className="item-subtitle">I am available for fixed Price</div>
                                </div>
                                <div className="features-list">
                                    <ul>
                                        <li>Ui/Ux Design</li>
                                        <li>Digital Marketing</li>
                                        <li>Web Development</li>
                                        <li>Apps Developing</li>
                                        <li>24/7 Support Done</li>
                                    </ul>
                                </div>
                                <Link className="item-btn btn-fill">HIRE ME</Link >
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 has-animation  active-animation">
                        <div className="translate-left-10 opacity-animation transition-200 transition-delay-700">
                            <div className="fxt-pricing-box-layout1">
                                <div className="pricing-amount">
                                    <div className="item-price">$25<span>/Per Hour</span></div>
                                </div>
                                <div className="pricing-title">
                                    <h3 className="item-title">Hourley work</h3>
                                    <div className="item-subtitle">Available for Hourley Projets</div>
                                </div>
                                <div className="features-list">
                                    <ul>
                                        <li>Ui/Ux Design</li>
                                        <li>Digital Marketing</li>
                                        <li>Web Development</li>
                                        <li>Apps Developing</li>
                                        <li>24/7 Support Done</li>
                                    </ul>
                                </div>
                                <Link className="item-btn btn-fill">HIRE ME</Link >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="fxt-blog-section bg-color-2" id="section7">
            <div className="container">
                <div className="fxt-heading-layout1">
                    <h2 className="heading-title">Latest Blog</h2>
                    <div className="heading-paragraph">There are many variations of passages of Lorem Ipsum available</div>
                    <div className="heading-line"></div>
                </div>
                <div className="row">
                    <div className="col-lg-4 has-animation  active-animation">
                        <div className="translate-left-10 opacity-animation transition-200 transition-delay-100">
                            <div className="fxt-blog-box-layout1">
                                <div className="item-img">
                                    <Link href="single-blog.html">
                                        <img src="./template/media/blog/blog1.jpg" alt="blog"/>
                                    </Link >
                                </div>
                                <div className="item-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li><i className="far fa-calendar-alt"></i>14 July, 2017</li>
                                            <li><i className="far fa-user"></i><Link>Jessica</Link ></li>
                                        </ul>
                                    </div>
                                    <h3 className="item-title"><Link href="single-blog.html">Harbour amid a Slowen
                                            down in singer city.</Link ></h3>
                                    <p>There are many variations of Lorem is Ipsum is available majority alteration some form
                                        the injected.</p>
                                    <Link href="single-blog.html" className="btn-text item-btn">Read More</Link >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 has-animation  active-animation">
                        <div className="translate-left-10 opacity-animation transition-200 transition-delay-400">
                            <div className="fxt-blog-box-layout1">
                                <div className="item-img">
                                    <Link href="single-blog.html">
                                        <img src="./template/media/blog/blog2.jpg" alt="blog"/>
                                    </Link >
                                </div>
                                <div className="item-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li><i className="far fa-calendar-alt"></i>14 July, 2017</li>
                                            <li><i className="far fa-user"></i><Link>Amac Jajah</Link ></li>
                                        </ul>
                                    </div>
                                    <h3 className="item-title"><Link href="single-blog.html">Trip To Iqaluit In
                                            Nunavut A Canadian Arctic City</Link ></h3>
                                    <p>There are many variations of Lorem is Ipsum is available majority alteration some form
                                        the injected.</p>
                                    <Link href="single-blog.html" className="btn-text item-btn">Read More</Link >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 has-animation  active-animation">
                        <div className="translate-left-10 opacity-animation transition-200 transition-delay-700">
                            <div className="fxt-blog-box-layout1">
                                <div className="item-img">
                                    <Link href="single-blog.html">
                                        <img src="./template/media/blog/blog3.jpg" alt="blog"/>
                                    </Link >
                                </div>
                                <div className="item-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li><i className="far fa-calendar-alt"></i>14 July, 2017</li>
                                            <li><i className="far fa-user"></i><Link>Sergio Pliego</Link ></li>
                                        </ul>
                                    </div>
                                    <h3 className="item-title"><Link href="single-blog.html">World Travel Holdings
                                            Will Be Honored Alongside.</Link ></h3>
                                    <p>There are many variations of Lorem is Ipsum is available majority alteration some form
                                        the injected.</p>
                                    <Link href="single-blog.html" className="btn-text item-btn">Read More</Link >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="fxt-contact-section bg-color-1" id="section8" data-bg-image="./template/media/figure/map.png " style={{backgroundImage: `url('${map}'})`}}>
            <div className="container">
                <div className="fxt-heading-layout1">
                    <h2 className="heading-title">Contact Me</h2>
                    <div className="heading-paragraph">There are many variations of passages of Lorem Ipsum available</div>
                    <div className="heading-line"></div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="fxt-contact-box-layout1">
                            <div className="contact-list">
                                <div className="item-icon">
                                    <i className="flaticon-placeholder"></i>
                                </div>
                                <div className="item-content">
                                    <h3 className="item-title">Address</h3>
                                    <div className="item-text">19 Maypole Crescent Ilford,</div>
                                    <div className="item-text">L6 2UJ London, UK</div>
                                </div>
                            </div>
                            <div className="contact-list">
                                <div className="item-icon">
                                    <i className="flaticon-email"></i>
                                </div>
                                <div className="item-content">
                                    <h3 className="item-title">Email:</h3>
                                    <div className="item-text">example@gmail.com</div>
                                </div>
                            </div>
                            <div className="contact-list">
                                <div className="item-icon">
                                    <i className="flaticon-telephone"></i>
                                </div>
                                <div className="item-content">
                                    <h3 className="item-title">Phone</h3>
                                    <div className="item-text">+77 022 177 05 05</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="fxt-contact-box-layout2">
                            <form method="POST" id="contact-form">
                                <div className="row">
                                    <div className="col-lg-12 form-group">
                                        <input type="text" className="form-control" placeholder="Full Name" name="name" data-error="Name field is required" required/>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    <div className="col-lg-6 form-group">
                                        <input type="text" className="form-control" placeholder="E-mail" name="email" data-error="Email field is required" required/>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    <div className="col-lg-6 form-group">
                                        <input type="text" className="form-control" placeholder="Subject" name="subject" data-error="Subject field is required" required/>
                                            <div className="help-block with-errors"></div>
                                    </div>
                                    <div className="col-lg-12 form-group">
                                        <textarea name="message" id="form-message" className="form-control textarea"
                                            placeholder="Your Message" cols="30" rows="7" data-error="Message field is required" required></textarea>
                                            <div className="help-block with-errors"></div>
                                    </div>
                                    <div className="col-lg-12 form-group">
                                        <button type="submit" className="btn-fill submit-btn">SEND MESSAGE</button>
                                    </div>
                                </div>
                                <div className="form-response"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}
