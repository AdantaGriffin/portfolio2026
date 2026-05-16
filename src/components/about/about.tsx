import styles from './about.module.scss';
import {motion} from 'motion/react';

function About(){
    return(
        <>
            <motion.section 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true, amount: 0.3 }}

                id="about" 
                className={styles.about}>

                <header className={styles.header}>
                    <h4>ABOUT ME</h4>
                </header>

                <div className={styles.aboutContainer}>

                    <div className={styles.aboutText}>
                        <h3>Building modern websites with focus on user experience.</h3>
                        <p>I'm a front end developer who loves turning ideas into real, interactive products. I focus on writing clean maintainable code and creating seamless esperiences across all devices.</p>
                    </div>

                    <div className={styles.aboutAttributes}>

                        <div className={styles.attributes}>
                            <div className={styles.attributesImage}>
                                <img src="/icons/web-programming.png" alt="attIcon" height="30px"/>
                            </div>

                            <div className={styles.attributesData}>
                                <h5>Clean Code</h5>
                                <p>I write scalable, maintainable code following best practices.</p>
                            </div>
                        </div>

                        <div className={styles.attributes}>
                            <div className={styles.attributesImage}>
                                <img src="/icons/caution.png" alt="attIcon" height="30px"/>
                            </div>
                            
                            <div className={styles.attributesData}>
                                <h5>Problem Solver</h5>
                                <p>I enjoy solving problems and building efficient solutions.</p>
                            </div>
                        </div>

                        <div className={styles.attributes}>
                            <div className={styles.attributesImage}>
                                <img src="/icons/responsive-page.png" alt="attIcon" height="30px"/>
                            </div>
                            <div className={styles.attributesData}>
                                <h5>Responsive Design</h5>
                                <p>I build websites that look great on all screens.</p>
                            </div>
                        </div>

                        <div className={styles.attributes}>
                            <div className={styles.attributesImage}>
                                <img src="/icons/student.png" alt="attIcon" height="30px"/>
                            </div>
                            <div className={styles.attributesData}>
                                <h5>Continuous Learning</h5>
                                <p>I'm always learning new tool's and improving my skills.</p>
                            </div>
                        </div>
                    </div>

                </div>
                
            </motion.section>
        </>
    )
};

export default About;