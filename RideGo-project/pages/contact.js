import React, { useState,useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../components/Navbar';
import Image from 'next/image';

import styles from "../styles/contact.module.css"

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
    
    const Result =() =>{
        return (
        <>
            <h1 className={styles.sub}>
                Your Message has been Successfully Sent.
                <br />
                We will Contact you Soon.
            </h1>

            <button onClick={() => showResult(false)} className={styles.clickMe}>Send another message. </button>
        </>
    );
    };

    const Contact = () => {
        return (
            <form action="" onSubmit={sendEmail} id="form1" >
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
                    <textarea className={styles.input} name="message" rows="6" cols="33" required></textarea>
                    <br />
                    <button type='submit' className={styles.clickMe}>SUBMIT</button>

                                
                </div>
            </form >
        );
    };

    return (
        <>
            <Navbar />
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <Image
                        className={styles.img}
                        src="/taxi-app-concept-illustration_52683-36028.webp"
                        layout="intrinsic"
                        width="1000"
                        height="700"
                    />
                </div>

                <div className={styles.right}>{
                result
                    ?
                    <Result />
                    :
                    <Contact />
                }
                </div>
            </div>
        </>
    );
}

export default ContactComponent;