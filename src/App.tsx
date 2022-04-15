import React, { useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Intro from "./pages/Intro";
import MyProjects from "./pages/MyProjects";

const App = () => {
    const [isNavExtended, setIsNavExtended] = useState(false);

    return (
        <>
            <Navbar setIsNavExtended={setIsNavExtended} />
            <Intro isNavExtended={isNavExtended} />
            <AboutMe isNavExtended={isNavExtended} />
            <MyProjects isNavExtended={isNavExtended} />
            <ContactMe isNavExtended={isNavExtended} />
        </>
    );
};

export default App;

/* 
Setup
1. Change title in public/index.html
2. Rename src/App.js => App.jsx
3. Clear out code from return in App.js
4. Clear out code from App.css
5. Add global reset to index.css
6. Install sass
7. Rename App.css => App.module.scss & change import
*/
