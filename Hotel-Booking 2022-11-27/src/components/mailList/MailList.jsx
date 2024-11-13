import "./mailList.css"
import React, { useState } from "react";

// A component that allows people to sign up for an email. When user enters email, and presses the button. 
// the text will change to "Kolla din mejlkorg!"
const MailList = () => {

  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="mail">
      <h1 className="mailTitle">Missa inte ett erbjudande!</h1>
      <span className="mailDesc">Pernumerera och få tips om fantastiska resmål!</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button onClick={handleClick}>
         { active ? "Kolla din mejlkorg!" :"Premunerera!"}
      </button>
      </div>
    </div>
  )
}



export default MailList