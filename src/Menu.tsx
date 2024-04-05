import React from "react";
import "./Menu.css";

const Menu: React.FC = () => {
    
    return (
        <div className="menu">
            <a href="#aboutMe" style={{ "--clr": "#39FF14" } as React.CSSProperties}><span>About Me</span><i></i></a>
            <a href="#projects" style={{ "--clr": "#0FF0FC" } as React.CSSProperties}><span>Projects</span><i></i></a>
            <a href="#journey" style={{ "--clr": "#FF3B94" } as React.CSSProperties}><span>Journey</span><i></i></a>
            <a href="#contact" style={{ "--clr": "#E2DB26" } as React.CSSProperties}><span>Contact</span><i></i></a>
        </div>
    );
};

export default Menu;