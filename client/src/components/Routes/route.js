import './route.css'
import MainDash from '../MainDash/MainDash';
import RightSide from '../RigtSide/RightSide';
import Sidebar from '../SideBar/Sidebar';
import Blogs from '../Blogs/blogs';
import Setting from '../Settings/setting';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import React from "react";


export default function route() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={
        <div className="App">
        <div className="AppGlass">
          <Sidebar />
          <MainDash/>
          <RightSide />
        </div>
      </div>
      }/>

     <Route  path="/Blog" element={
        <div className="App">
        <div className="AppGlass">
          <Sidebar/>
          <Blogs/>
        </div>
      </div>
      }/>


      <Route  path="/Ayarlar" element={
        <div className="App">
        <div className="AppGlass">
          <Sidebar/>
          <Setting/>
        </div>
      </div>
      }/>


     
    </Routes>
    </BrowserRouter>
    
  );
}

