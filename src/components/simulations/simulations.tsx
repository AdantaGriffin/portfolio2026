import styles from './simulations.module.scss';
import { motion } from 'motion/react';

function Simulations(){
    return(
        <>
            <motion.section
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true, amount: 0.3 }} 
                className={styles.simulations}>
                <header className={styles.header}>
                    <h4>DEVELOPMENT EXPERIENCE</h4>
                </header>
                <div className={styles.simulationsContainer}>
                    <h3 className={styles.simulationsText}>
                        Real sites redisigned.
                    </h3>
                    <ul className={styles.simulationsList}>
                        <li>
                            <article className={styles.simulationsArticle}>
                                <div className={styles.simulationsInfo}>
                                    <div className={styles.siteTitle}>
                                        <p className={styles.title}>title</p>
                                    </div>
                                    <div className={styles.siteInfo}>
                                        <div>
                                            <h5>Challenge</h5>
                                            <p>Challenge taken on to redesign website</p>
                                        </div>
                                        <div>
                                            <h5>Solution</h5>
                                            <p>Each step taken</p>
                                        </div>
                                        <div>
                                            <h5>Result</h5>
                                            <p>results from improvements to site</p>
                                        </div>
                                    </div>
                                    <div className={styles.links}>
                                        <p><img src="/links/laptop.png" height="20px" width="20px"/>origional</p>
                                        <p><img src="/links/laptop.png" height="20px" width="20px"/>redesigned</p>
                                        <p><img src="/links/github.png" height="20px" width="20px"/>github</p>
                                    </div>
                                </div>
                                
                                <div className={styles.siteImg}></div>
                            </article>
                        </li>
                        <li>
                            <article className={styles.simulationsArticle}>
                                <div className={styles.simulationsInfo}>
                                    <div className={styles.siteTitle}>
                                        <p className={styles.title}>title</p>
                                    </div>
                                    <div className={styles.siteInfo}>
                                        <div>
                                            <h5>The Challenge</h5>
                                            <p>Challenge taken on to redesign website</p>
                                        </div>
                                        <div>
                                            <h5>My Solution</h5>
                                            <p>Each step taken</p>
                                        </div>
                                        <div>
                                            <h5>The Result</h5>
                                            <p>results from improvements to site</p>
                                        </div>
                                    </div>
                                    <div className={styles.links}>
                                        <p><img src="/links/laptop.png" height="20px" width="20px"/>origional</p>
                                        <p><img src="/links/laptop.png" height="20px" width="20px"/>redesigned</p>
                                        <p><img src="/links/github.png" height="20px" width="20px"/>github</p>
                                    </div>
                                </div>
                                
                                <div className={styles.siteImg}></div>
                            </article>
                        </li>
                        <li>
                            <article className={styles.simulationsArticle}>
                                <div className={styles.simulationsInfo}>
                                    <div className={styles.siteTitle}>
                                        <p className={styles.title}>title</p>
                                    </div>
                                    <div className={styles.siteInfo}>
                                        <div>
                                            <h5>The Challenge</h5>
                                            <p>Challenge taken on to redesign website</p>
                                        </div>
                                        <div>
                                            <h5>My Solution</h5>
                                            <p>Each step taken</p>
                                        </div>
                                        <div>
                                            <h5>The Result</h5>
                                            <p>results from improvements to site</p>
                                        </div>
                                    </div>
                                    <div className={styles.links}>
                                        <p><img src="/links/laptop.png" height="20px" width="20px"/>origional</p>
                                        <p><img src="/links/laptop.png" height="20px" width="20px"/>redesigned</p>
                                        <p><img src="/links/github.png" height="20px" width="20px"/>github</p>
                                    </div>
                                </div>
                                
                                <div className={styles.siteImg}></div>
                            </article>
                        </li>
                    </ul>
                </div>
            </motion.section>
        </>
    )
};

export default Simulations;