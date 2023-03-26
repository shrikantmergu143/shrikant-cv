import React from 'react'
import IJWork from "./../../assets/img/IJWork.png";
import Conficar from "./../../assets/img/Conficar.png";
import Girne from "./../../assets/img/Girne.png";
import Chathub from "./../../assets/img/Chathub.jpg";
import Fellame from "./../../assets/img/Fellame.png";
import ChatApp from "./../../assets/img/ChatApp1.png";
import instashare from "./../../assets/img/instashare.png";
import portfolio1 from "./../../template/media/portfolio/portfolio1.jpg"
// import Firebase from "./../../firebase/Firebase";
import { Link } from "react-router-dom";
import HomeComponent from "./../home/HomeComponent";
import AboutComponent from "./../about/AboutComponent";
import SkillsComponent from "./../skill/SkillsComponent";
import ProjectComponent from "./../projects/ProjectComponent";
import ContactComponent from "./../contact/ContactComponent";

export function getAge(d1){
    var now = new Date();
    var d2 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
    var diff = d2.getTime() - d1.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}


export const Works = [
    {
        image:Conficar,
        title:"ConfyCar",
        description:"By developing a car service package and admin project using React, create a modern and user-friendly interface that helps service providers manage their service packages and booking process more efficiently. The application can be customized to suit the specific needs of the service provider, making it a valuable tool for improving productivity and customer satisfaction.",
        link:"https://bc.appristine.in"
    },
    {
        image:Girne,
        title:"Girne",
        description:"We have developed Girne, an online marketplace in Turkey, with an aim to build a bridge between buyers and sellers through the virtual medium. People have become well-accustomed to online shopping nowadays, and the success of the online business world has inspired us to bring a platform that commits benefits for both buyers and sellers.",
        link:"https://girne.com"
    },
    {
        image:IJWork,
        title:"IJ-Work",
        description:"A project that includes chat, project management, to-do list, and cloud management features can be developed as a web application using React as the front-end library. In this project I worked on projects creation and todo list management.",
        link:"https://ijwork.com"
    },
    {
        image:instashare,
        title:"InstaShare",
        description:"InstaShare is my college major project which is submited to college. A project InstaShare is reference of Instagram.com and developing project using React Native and Native Application, create a modern and user-friendly interface that mimics the functionalities of the popular social media platform. The application can be customized to suit your specific needs, making it a valuable tool for learning React and Firebase.",
        link:"https://instashare-7eb98.web.app"
    },
    {
        image:ChatApp,
        title:"Nation Wide",
        description:"The Nation Wide Chat Application web are an extension of your smartphone. They mirror all the conversations and messages you have on the Nation Wide Chat app on your phone and allow you to see them all and reply to them all on your browsers using your computer's keyboard instead of the keyboard on your smartphone. In this project we have managing real time messages and notification and storing user data in redux store.",
        link:"https://nwn.appristine.in"
    },
    {
        image:Chathub,
        title:"Chathub",
        description:"Chathub is a real-time chat application that allows users to communicate with each other instantly. As a React developer, develop a Chathub application using React as the front-end library. Here are some of the features include in the project like Add friend and Chat with friends, My Account, Friends Profile.",
    },
    {
        image:Fellame,
        title:"Fellame",
        description:"Fellame is a online shopping web application and developing project by using react. In this project we provides various printed fabric T`Shirt with different colors and sizes. We developed front end application and by using API`s we make a user friendly application. In this application we provide online payment on order products and coupon to users, so users can make order instantally. We have OTP base user login in application.",
        link:"http://fme.fellame.com"
    },
]
export default function DashboardPage() {
  return (
    <React.Fragment>
        <HomeComponent />
        <AboutComponent />
        <SkillsComponent/>
        <ProjectComponent/>

        <section hidden className="fxt-portfolio-section bg-color-1" id="section5">
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
                            <h2 className="counting-text counter">7</h2>
                            <div className="item-label">Project Works</div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="fxt-progress-box-layout1">
                            <h2 className="counting-text counter">6</h2>
                            <div className="item-label">Completed Project</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <ContactComponent />
    </React.Fragment>
  )
}
