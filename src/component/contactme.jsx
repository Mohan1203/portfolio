import React,{useState} from "react";
import "../style/contactme.css"


function ContactMe() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");

    const cleardata = () => {
        setName("");
        setEmail("");
        setMessage("");
    }
    console.log(name)
    return (
        <div className="container">
            <div className="contactme">
                <form action="mailto:mrahir101@gmail.com" className="contactme-form"  >
                    <input type="text" placeholder="Name"  className="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <input type="email" placeholder="Email"  className="name" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Message" className="name" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                    <button className="btn" onSubmit={cleardata}>Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default ContactMe;