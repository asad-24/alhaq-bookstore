import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Whatsapp = () => (
   <div className=' rounded-full text-center text-2xl shadow-lg z-100 mt-4 bounceIn' 
   style={{position:'fixed',bottom:'56px', right:'30px'}}
   >
    <a
            href="https://wa.me/923061584130"
            className=" "
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className=' ' size={40} style={{color:"green"}}/>
          
          </a>
        
   </div>
);
export default Whatsapp;