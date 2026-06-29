import styles from './contact.module.scss';
import { motion } from 'motion/react';

function Contact(){
    return(
        <>
            <motion.section 
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{ duration: 2.6 }}
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
                        <div className={styles.contactAll}>
                            <form action="https://formspree.io/f/mlgajaeo" method="POST" className={styles.contactForm}>
                                <input name="name" className={styles.inputName} type="text" placeholder="YourName"/>
                                <input name="email" className={styles.inputEmail} type="email" placeholder="YourEmail"/>
                                <input name="message" className={styles.inputMesage} type="text" placeholder="YourMessage"/>
                                <input className={styles.inputSubmit} type="submit"/>
                            </form>

                            <div className={styles.contactLinks}>
                            <div>
                                <h5>Email Me</h5>
                                <a href="mailto:griffinadanta90@gmailcom">griffinadanta90@gmail.com</a>
                            </div>
                            <div>
                                <h5>Phone</h5>
                                <a href="tel:7188202506">7188202506</a>
                            </div>
                            <div>
                                <h5>City</h5>
                                <a href="https://brooklyn.org/" target="_blank">Brooklyn</a>
                            </div>
                        </div>
                        </div>

                    </div>
                </div>
            </motion.section>
        </>
    )
};

export default Contact;