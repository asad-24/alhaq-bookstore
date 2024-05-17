import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Whatsapp = () => (
   <div className=' rounded-full text-center text-2xl shadow-lg z-100 mt-4' 
   style={{position:'fixed',bottom:'56px', right:'30px'}}
   >
    <a
            href="https://wa.me/923061584130"
            className="whatsapp_float bg-green-900 "
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className='text-green-900 ' size={40}/>
          
          </a>
        
   </div>
);
export default Whatsapp;