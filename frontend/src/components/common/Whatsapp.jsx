
import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Whatsapp = () => {
    return (
        <div className="w-full">
            <div className="fixed bottom-4 right-10 cursor-pointer group z-10">
                <Link to="https://wa.me/+923073122321" target="_blank" rel="noreferrer">

                    <span className="absolute  h-full w-full rounded-full group-hover:bg-green-400 opacity-75 group-hover:animate-ping"></span>

                    <div className="relative w-16 h-16 flex items-center justify-center bg-green-600 rounded-full shadow-lg animate-bounce [animated-delay-800]">
                        <FaWhatsapp title="Chat with us" className="text-4xl text-white" />
                    </div>

                </Link>
            </div>
        </div>
    )
}

export default Whatsapp
