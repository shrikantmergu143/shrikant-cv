import React, {useState, useEffect} from 'react'
import Header from "./Header";
import figure3 from "./../../template/media/figure/figure3.jpg"
import logoDefault from "./../../template/media/logo-default.png";
import logoSticky from "./../../template/media/logo-sticky.png";
import portfolio1 from "./../../template/media/portfolio/portfolio1.jpg"
import map from "./../../template/media/figure/map.png";
import Firebase from "./../../firebase/Firebase";
import { Link } from "react-router-dom";
import ThemeChange from "./ThemeChange";
import Footer from "./Footer"
import {Outlet} from "react-router"

export default function LayoutPage(props) {
  const [state, setState] = useState(false);
  useEffect(() => {
    setTimeout(()=>setState(true), 300);
    console.log("Firebase", Firebase)

  }, []);
  return (
    <aside>
      <div id="wrapper" className="wrapper">
          <Header/>
            <Outlet/>
          <Footer/>
      </div>
      <ThemeChange/>
    </aside>
  )
}
