import React from "react";
import { ReactDOM } from "react";
import welcome from './welcome';

 const Hello = () => {
    const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
    const description = 'Gregorio Y. Zara';
    const firstName = 'Akshya';

    return(
        <>
        <img
            className="avatar"
            src={avatar}
            alt={description}
        />
        {/* <h1>Text</h1> */}
        <p style = {{
            backgroundColor : 'grey',
            color : 'pink'
        }}>
            Hi {description + " This is " + firstName} here
        </p>
        <div>
            <h1>displaying image from welcome.js here</h1>
            <welcome />
        </div>
        </>
    );
 }

    
export default Hello;