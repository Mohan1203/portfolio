import React from "react";
import "../style/contactme.css"


function ContactMe() {
    return (
        <div className="container">
            <div className="contactme">
                <form action="" className="contactme-form">
                    <input type="text" placeholder="Name"  className="name"/>
                    <input type="email" placeholder="Email"  className="name"/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Message" className="name"></textarea>
                    <button className="btn">Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default ContactMe;