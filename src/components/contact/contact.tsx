import styles from './contact.module.scss';
import { motion } from 'motion/react';

function Contact(){
    return(
        <>
            <motion.section 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true, amount: 0.1 }} 
                id="contact" 
                className={styles.contact}>
                <header className={styles.header}>
                    <h4>CONTACT</h4>
                </header>
                <div className={styles.contactContainer}>

                    <div className={styles.contactHeader}>
                        <h3 className={styles.simulationsText}>
                        Let's connect.
                        </h3>
                        <p>I'm currently open to new opportunities.<br></br>Feel free to reach out.</p>
                        <form className={styles.contactForm}>
                            <input className={styles.inputName} type="text" placeholder="YourName"/>
                            <input className={styles.inputEmail} type="email" placeholder="YourEmail"/>
                            <input className={styles.inputMesage} type="text" placeholder="YourMessage"/>
                            <input className={styles.inputSubmit} type="submit"/>
                        </form>
                    </div>

                    <div className={styles.contactLinks}>
                        <div>
                            <h5>Email Me</h5>
                            <p>email@gmail.com</p>
                        </div>
                        <div>
                            <h5>LinkedIn</h5>
                            <p>linkedin.com</p>
                        </div>
                        <div>
                            <h5>GitHub</h5>
                            <p>github.com</p>
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    )
};

export default Contact;