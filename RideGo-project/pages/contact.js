import React, { useState,useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../components/Navbar';

import styles from "../styles/contact.module.css"



const Result =() =>{
    return (
        <p>
            Your Message has been Successfully Sent.
            We will Contact you Soon.
        </p>
    );
};

function ContactComponent(props){
    const [result,showResult] = useState(false);
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    // add the values of your emailJs
        emailjs
          .sendForm('service_miuxupr', 'template_i7wa1sb', e.target, '_ZCi0qoeSg_ypd02C')
          .then((result) => {
              console.log(result.text);
          }, 
          (error) => {
              console.log(error.text);
          }
          );
          e.target.reset();
          showResult(true);
      };

    setTimeout(() =>{
        showResult(false)
    },5000);

    return (
        <>
            <Navbar />
        <form action="" onSubmit={sendEmail} id="form1" >
            <div className={styles.vertMiddle}>
                <div className="formWord">
                    <h2 className={styles.heading}>Get In Touch !</h2>
                    <br />

                    <span className={styles.label}>Full Name</span>
                    <br />
                    <input 
                        className={styles.input}
                        size="30"
                        type="text" 
                        name="fullName" 
                        required 
                    />
                    <br />

                    <span className={styles.label}>Phone Number</span>
                    <br />
                    <input 
                        className={styles.input}
                        size="30"
                        type="text" 
                        name="phone" 
                        required 
                    />
                    <br />

                    <span className={styles.label}>Enter Email</span>
                    <br />
                    <input 
                        className={styles.input} 
                        size="30"
                        type="email" 
                        name="email" 
                        required 
                    />
                    <br />

                    <span className={styles.label}>Message</span>
                    <br />
                    <textarea className={styles.input} name="message" rows="10" cols="50" required></textarea>
                    <br />
                    <button type='submit' className={styles.sub}>SUBMIT</button>

                    <div className="row">{
                        result ? <Result /> : null}
                    </div>
                </div>
            </div>
            </form>
            </>
    );
}

export default ContactComponent;