import "./Home.css"
import Typed from "typed.js"
import React, { useEffect, useRef } from "react";


const Home = () => {

    const welcome = useRef(null);

    useEffect(() => {
        const typed = new Typed(welcome.current, {
          strings: ["React Developer!", "Software Engineer!", "Front-End Programmer!"], // Strings to display
          // Speed settings, try diffrent values until you get good results
          startDelay: 600,
          typeSpeed: 80,
          backSpeed: 60,
          backDelay: 300,
          loop: true
        });
    
        // Destropying
        return () => {
          typed.destroy();
        };
      }, []);

    return (
        <div className="Home">
            <div className="Home__title">Welcome to my website!</div>
            <h1 className="Home__h1">I am a <span className="welcome" ref={welcome}></span></h1>
        </div>
    )
}

export default Home;