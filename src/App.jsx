import React, { useEffect, useState } from "react";
import './index.css'
import AOS from 'aos'
import  'aos/dist/aos.css'
import Nav from "./Comonets/Hero/Navbar";

export default function App() {

    const [darkMode, setdarkMode] = useState(true)

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            offset: 100
        });
        document.documentElement.classList.add('dark');
    }, []);

    const toggelDarkMode = () => {
        const newMode = !darkMode;
        setdarkMode(newMode);
        document.documentElement.classList.toggle('dark');
    }

    return(
        <div className={
            darkMode
            ? 'bg-linear-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen'
            : 'bg-linear-to-br from-gray-50 to-blue-50 min-h-screen'
        }>
            <Nav darkMode={darkMode} toggelDark={toggelDarkMode}/>
        </div>
    )
}