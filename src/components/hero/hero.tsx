import styles from './hero.module.scss';
import {useState, useEffect} from 'react'; 
import { animate, motion } from "motion/react";
import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';

function Hero(){
    const [displayText, setDisplayText] = useState("");
    const text = `const developer = {


    name: "Adanta Griffin",

    role: "Front End Developer",

    skills: ['HTML', 'CSS', 'Sass', 
    
            'JavaScript', 'TypeScript'],

    available: true

};`;

    useEffect(() => {
        const controls = animate(0, text.length, {
            duration: 24,
            onUpdate(x){
                setDisplayText(
                    text.slice(0, Math.floor(x))
                );
            }
        });
        return () => controls.stop();
    }, []);
    return(
        <>
            <motion.section 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: -50 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true, amount: 0.3 }}
                id="home" 
                className={styles.hero}>

                <section>
                    <div className={styles.left}>

                    <div className={styles.one}>
                        <p>FRONT END DEVELOPER</p>
                    </div>

                    <div className={styles.two}>
                        <h2>
                        I build clean, responsive, web <span className={styles.blue}>experiences.</span></h2>
                    </div>

                    <div className={styles.three}>
                        <p>Passionate about creating modern, user frinedly websites with clean code and great performance.</p>
                    </div>

                    <div className={styles.four}>
                        <Link to="/catalogue" className={styles.profile}>view catalogue</Link>
                        <HashLink to="/#contact" className={styles.contact}>contact me</HashLink>
                    </div>

                    <div className={styles.five}>
                        <p>Let's build something amazing together!</p>
                    </div>

                    </div>
                </section>

                <section>
                    <div className={styles.right}>

                    <div className={styles.codeContainer}>
                        <div className={styles.containerTop}>
                            <div className={styles.containerButtons}>
                                <div className={styles.dot} id={styles.red}>
                                    
                                </div>

                                <div className={styles.dot} id={styles.yellow}>
                                    
                                </div>

                                <div className={styles.dot} id={styles.green}>
                                    
                                </div>
                            </div>
                        </div>

                        <div className={styles.containerBottom}>
                            <div>
                                <pre>
<code>
    {displayText}
</code>
                                </pre>
                            </div>
                        </div>

                    </div>

                    </div>
                </section>

            </motion.section>
        </>
    )
};

export default Hero;