import React from 'react'
import {Outlet} from "react-router-dom";
import NavBar from '../components/NavBar.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export default function Layout() {
  return (
    <div className='Layout'>
      <NavBar></NavBar>
      <Header></Header>
      <Outlet/>
      <Footer></Footer>
    </div>
  )
}
