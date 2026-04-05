import React from "react";
import BgImage from '../../assets/suraj.png'

const bgImage = {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
}

export default function  Hero(){
    return(
        <main style={bgImage}>
            <section style={{minHeight:'750px', width:'full'}}>
                <div className="container">
                    {/* Navbar section ; */}
                    {/* herobar section */}
                    <div className=" grid grid-cols-1 md:grid-cols-2">
                        <h1 className=" text-amber-50 ">hello every one how are you</h1>
                    </div>
                </div>
            </section>
        </main>
    )
}