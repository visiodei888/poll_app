import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar_user from './Navbar_user';
import Navbar_mod from './Navbar_mod';
import Navbar_admin from './Navbar_admin';
import User_login from './User_login';
import Cards from './Cards';
import Profile from './Profile';
import Mod_cards from './Mod_cards';
import Create_poll from './Create_poll';


const Navbars = () => {
  return (
    <div >
    <Routes>
      <Route path="/" element={<User_login />} />
      <Route path="/Navbar_user/*" element={<Navbar_user />}/>
      <Route path="/Navbar_mod" element={<Navbar_mod />} />
      <Route path="/Navbar_admin" element={<Navbar_admin />} />
      <Route path="/Cards" element={<Cards/>} />
      <Route path="/Profile" element={<Profile/>} />
      <Route path="/Modcards" element={<Mod_cards/>} />
      <Route path="/Create" element={<Create_poll/>} />
    </Routes>
    </div>
  );
};

export default Navbars;