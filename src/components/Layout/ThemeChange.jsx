import React from 'react'
import { Link } from "react-router-dom";

export default function ThemeChange() {
  return (
    <div className="demo_changer">
        <div className="demo-icon">
            <i className="fa fa-cog fa-spin fa-2x"></i>
        </div>
        <div className="form_holder">
            <h4 className="switcher-title">Color Switcher</h4>
            <div className="color-changer">
                <ul>
                    <li>
                        <Link rel="fire-bush" title="fire-bush" className="styleswitch"><img src="switcher/images/icons/fire-bush.jpg" alt="Portfolio"/></Link >
                    </li>
                    <li>
                        <Link rel="pastel-green" title="pastel-green" className="styleswitch"><img src="switcher/images/icons/pastel-green.jpg" alt="Portfolio"/></Link >
                    </li>
                    <li>
                        <Link rel="electric-violet" title="electric-violet" className="styleswitch"><img src="switcher/images/icons/electric-violet.jpg" alt="Portfolio"/></Link >                        
                    </li>
                    <li>
                        <Link rel="blue" title="blue" className="styleswitch"><img src="switcher/images/icons/blue.jpg" alt="Portfolio"/></Link > 
                    </li>
                    <li>
                        <Link rel="razzmatazz" title="razzmatazz" className="styleswitch"><img src="switcher/images/icons/razzmatazz.jpg" alt="Portfolio"/></Link >                        
                    </li>
                    <li>
                        <Link rel="caribbean-green" title="caribbean-green" className="styleswitch"><img src="switcher/images/icons/caribbean-green.jpg" alt="Portfolio"/></Link >                        
                    </li>
                    <li>
                        <Link rel="cornflower-blue" title="cornflower-blue" className="styleswitch"><img src="switcher/images/icons/cornflower-blue.jpg" alt="Portfolio"/></Link >                        
                    </li>
                    <li>
                        <Link rel="purple" title="purple" className="styleswitch"><img src="switcher/images/icons/purple.jpg" alt="Portfolio"/></Link >                        
                    </li>
                    <li>
                        <Link rel="azure-radiance" title="azure-radiance" className="styleswitch"><img src="switcher/images/icons/azure-radiance.jpg" alt="Portfolio"/></Link >                        
                    </li>
                    <li>
                        <Link rel="flush-orange" title="flush-orange" className="styleswitch"><img src="switcher/images/icons/flush-orange.jpg" alt="Portfolio"/></Link >
                    </li>
                    <li>
                        <Link rel="apple" title="apple" className="styleswitch"><img src="switcher/images/icons/apple.jpg" alt="Portfolio"/></Link >
                    </li>
                    <li>
                        <Link rel="red" title="red" className="styleswitch"><img src="switcher/images/icons/red.jpg" alt="Portfolio"/></Link >
                    </li>
                </ul>
            </div>
            <div className="clearfix"></div>
            <div className="page-changer">
                <h4 className="switcher-title">Demo Switcher</h4>
                <ul>
                    <li>
                        <h5 className="switcher-title">Light</h5>
                        <ul>
                            <li>
                                <Link href="https://affixtheme.com/html/ree/demo/light/index.html"><img src="switcher/images/demo/index.jpg" alt="Portfolio"/></Link >
                                <Link href="https://affixtheme.com/html/ree/demo/light/index.html">Default Ltr</Link >
                            </li>
                            <li>
                                <Link href="https://affixtheme.com/html/ree/demo/light/index-rtl.html"><img src="switcher/images/demo/index2.jpg" alt="Portfolio"/></Link >
                                <Link href="https://affixtheme.com/html/ree/demo/light/index-rtl.html">Default Rtl</Link >
                            </li>
                            <li>
                                <Link href="https://affixtheme.com/html/ree/demo/light/index2.html"><img src="switcher/images/demo/index3.jpg" alt="Portfolio"/></Link >
                                <Link href="https://affixtheme.com/html/ree/demo/light/index2.html">Sidebar Ltr</Link >
                            </li>
                            <li>
                                <Link href="https://affixtheme.com/html/ree/demo/light/index2-rtl.html"><img src="switcher/images/demo/index4.jpg" alt="Portfolio"/></Link >
                                <Link href="https://affixtheme.com/html/ree/demo/light/index-rtl.html">Sidebar Rtl</Link >
                            </li>
                            <li>
                                <Link href="https://affixtheme.com/html/ree/demo/light/index3.html"><img src="switcher/images/demo/index5.jpg" alt="Portfolio"/></Link >
                                <Link href="https://affixtheme.com/html/ree/demo/light/index3.html">Video Ltr</Link >
                            </li>
                            <li>
                                <Link href="https://affixtheme.com/html/ree/demo/light/index3-rtl.html"><img src="switcher/images/demo/index6.jpg" alt="Portfolio"/></Link >
                                <Link href="https://affixtheme.com/html/ree/demo/light/index3-rtl.html">Video Rtl</Link >
                            </li>
                        </ul>
                    </li>  
                    <li>
                        <h5 className="switcher-title">Dark</h5>
                        <ul>
                            <li>
                                <Link href="index-2.html"><img src="switcher/images/demo/index7.jpg" alt="Portfolio"/></Link >
                                <Link href="index-2.html">Default Ltr</Link >
                            </li>
                            <li>
                                <Link href="index-rtl.html"><img src="switcher/images/demo/index8.jpg" alt="Portfolio"/></Link >
                                <Link href="index-rtl.html">Default Rtl</Link >
                            </li>
                            <li>
                                <Link href="index2.html"><img src="switcher/images/demo/index9.jpg" alt="Portfolio"/></Link >
                                <Link href="index2.html">Sidebar Ltr</Link >
                            </li>
                            <li>
                                <Link href="index2-rtl.html"><img src="switcher/images/demo/index10.jpg" alt="Portfolio"/></Link >
                                <Link href="index-rtl.html">Sidebar Rtl</Link >
                            </li>
                            <li>
                                <Link href="index3.html"><img src="switcher/images/demo/index11.jpg" alt="Portfolio"/></Link >
                                <Link href="index3.html">Video Ltr</Link >
                            </li>
                            <li>
                                <Link href="index3-rtl.html"><img src="switcher/images/demo/index12.jpg" alt="Portfolio"/></Link>
                                <Link href="index3-rtl.html">Video Rtl</Link >
                            </li>
                        </ul>
                    </li>                  
                </ul>
            </div>            
        </div>
    </div>
  )
}
