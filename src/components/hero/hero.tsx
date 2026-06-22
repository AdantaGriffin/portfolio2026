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
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 1.2}}
                id="home" 
                className={styles.hero}>
                
                <motion.section className={styles.rightContainer}>
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
                </motion.section>

                <motion.section
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 2.2}}
                viewport={{ once: true, amount: 0.3 }}
                className={styles.leftContainer}
                >
                    <div className={styles.left}>

                    <div className={styles.one}>
                        <motion.p
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 5.2}}
                        viewport={{ once: true, amount: 0.3 }}
                        >
                            FRONT END DEVELOPER
                        </motion.p>
                    </div>

                    <div className={styles.two}>
                        <motion.h2
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 5.2}}
                        viewport={{ once: true, amount: 0.3 }}
                        >
                        I build clean, responsive, web <span className={styles.blue}>experiences.</span>
                        </motion.h2>
                    </div>

                    <div className={styles.three}>
                        <motion.p
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 6.2}}
                        viewport={{ once: true, amount: 0.3 }}
                        >
                            Passionate about creating modern, user frinedly websites with clean code and great performance.
                        </motion.p>
                    </div>

                    <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 7.2}}
                    viewport={{ once: true, amount: 0.3 }} 
                    className={styles.four}>
                        <Link to="/catalogue" className={styles.profile}>view catalogue</Link>
                        <HashLink to="/#contact" className={styles.contact}>contact me</HashLink>
                    </motion.div>

                    <motion.div
                    initial={{opacity: 0, x: -100}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 8.2}}
                    viewport={{ once: true, amount: 0.3 }} 
                    className={styles.five}>
                        <p>Let's build something amazing together!</p>
                    </motion.div>

                    </div>
                </motion.section>

                

            </motion.section>
        </>
    )
};

export default Hero;