import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import  "./firebase/Firebase";
import Layout from "./components/Layout/LayoutPage"
import DashboardPage from "./components/Deshboard/DashboardPage_index";
import AdminPage from "./components/admin/AdminPage";
import LayoutAdmin from "./components/admin/LayoutAdmin"
import AdminLogin from "./components/admin/AdminLogin"

function App() {
  const [state, setState] = useState(false);
  
  return (
     <BrowserRouter>
        <Routes> 
            <Route path="/" exact element={<Layout/>}>
                <Route index exact element={<Navigate to="shrikant"/>} />
                <Route path="shrikant" exact element={<DashboardPage/>}/>
            </Route>
            <Route path="/admin" exact element={<LayoutAdmin/>}>
                {/* <Navigate/> */}
                <Route index exact element={<AdminLogin/>} />
                {/* <Route index exact element={<AdminPage/>} /> */}
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
