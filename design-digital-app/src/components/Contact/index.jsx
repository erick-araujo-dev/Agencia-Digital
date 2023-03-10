import React from "react";
import './contact.css'
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import behance from "../../assets/images/behance.png";
import linkedin from "../../assets/images/linkedin.png";
import dribble from "../../assets/images/dribble.png";
import logo from "../../assets/images/logo.png";



const Contact = (props) =>{
    return(
        <div className={props.isDarkTheme ? "contact-dark contact" : "contact-light contact"}>
            <img src={logo} alt="Logo" className="logo" />

            <p className="contact-p"> 
                Ajudamos a criar uma personalidade digital construindo sua marca no
                ambiente online utilizando estratégias,
                ferramentas e tecnologias personalizadas.
            </p>

            <nav className="logo-links">
                <a href="www.facebook.com" target="_blank">
                    <img className="logo-social-net" src={facebook} alt="Logo Rede Social" />
                </a>
                <a href="www.twitter.com" target="_blank">
                    <img className="logo-social-net" src={twitter} alt="Logo Rede Social" />
                </a>
                <a href="www.behance.net" target="_blank">
                    <img className="logo-social-net" src={behance} alt="Logo Rede Social" />
                </a>
                <a href="www.linkedin.com" target="_blank">
                    <img className="logo-social-net" src={linkedin} alt="Logo Rede Social" />
                </a>
                <a href="www.dribble.com" target="_blank">
                    <img className="logo-social-net" src={dribble} alt="Logo Rede Social" />
                </a>
            </nav>
        </div>
    )
}

export default Contact;