import React from 'react'
import { Link } from "react-router-dom";
import GitHub from "./../github/Index";

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
];
export default function SkillsComponent() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}
