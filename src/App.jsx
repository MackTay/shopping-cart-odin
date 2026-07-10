import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar/Navbar.jsx'
import { Outlet } from "react-router";

function App() {
  
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer>
        <span>Some words</span>
        <span>Some more words</span>
      </footer>
    </>
  );
}

export default App
