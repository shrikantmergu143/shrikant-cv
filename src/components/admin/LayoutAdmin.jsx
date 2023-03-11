import React, {useState, useEffect} from 'react'
import {Outlet} from "react-router"
import "./assets/css/demo.css";


export default function LayoutAdmin() {

  return (
    <aside>
            <Outlet/>
    </aside>
  )
}
