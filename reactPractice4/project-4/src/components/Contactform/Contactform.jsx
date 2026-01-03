import Button from '../Button/Button'
import styles from './Contactform.module.css'
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { useState } from 'react';


export default function Contactform() {
    let [name,setName]=useState("abhi");
    let [email,setEmail]=useState("ab1245@gmail.com");
    let [text,setText]=useState("hello");
    
    const OnSubmit = (event) => {
        event.preventDefault();
        name = event.target[0].value;
        email = event.target[1].value;
        text = event.target[2].value;
        setName(name);
        setEmail(email);
        setText(text);
    }
 

    return (
        <section className={styles.hero}>
            <div className={styles.form}>
                <div className={styles.buttons}>
                    <Button
                        text="VIA SUPPORT CHAT" icon={<MdMessage fontSize={"24px"} />}
                    />
                    <Button
                        text="VIA CALL" icon={<IoMdCall fontSize={"24px"} />}
                    />
                </div>
                <Button text="VIA EMAIL FORM" icon={<MdEmail fontSize={"24px"} />} isOutline={true} />

                <form onSubmit={OnSubmit}>
                    <div className={styles.form_container}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name' placeholder='Enter Your Name' /><br />
                    </div>
                    <div className={styles.form_container}>
                        <label htmlFor="email">Email</label>
                        <input type="text" name='email' placeholder='Enter Your Email' /><br />
                    </div>
                    <div className={styles.form_container}>
                        <label htmlFor="name">Text</label>
                        <textarea name="text" id="" placeholder='Type Here' cols={"5"} rows={"5"}></textarea><br />
                    </div>
                    <div className={styles.form_containerButton}>
                        <Button text="SUBMIT" />
                    </div>
                </form>
               <p>{name}</p>
               <p>{email}</p>
               <p>{text}</p>
            </div>

            <div className={styles.image}>
                <img src="/service.svg" alt="" />
            </div>
        </section>
    )
}
