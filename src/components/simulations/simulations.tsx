import styles from './simulations.module.scss';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useApi } from '../api/api';

function Simulations(){
    const {simulations} = useApi();
    return(
        <>
            <motion.section
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true, amount: 0.3 }} 
                id="simulations"
                className={styles.simulations}>
                <header className={styles.header}>
                    <h4>DEVELOPMENT EXPERIENCE</h4>
                </header>
                <div className={styles.simulationsContainer}>
                    <h3 className={styles.simulationsText}>
                        Real sites redisigned.
                    </h3>
                    <ul className={styles.simulationsList}>
                        {simulations.map(x => (
                            <li key={x.id}>
                                <article className={styles.simulationsArticle}>
                                    
                                    <div className={styles.simulationsInfo}>
                                        <div className={styles.siteTitle}>
                                            <Link to={`/details/${x.id}`} className={styles.title}>{x.title}</Link>
                                        </div>
                                        <div className={styles.siteInfo}>
                                            <div>
                                                <h5>Challenge</h5>
                                                <p>{x.challenge}</p>
                                            </div>
                                            <div>
                                                <h5>Solution</h5>
                                                <p>{x.solution}</p>
                                            </div>
                                            <div>
                                                <h5>Result</h5>
                                                <p>{x.result}</p>
                                            </div>
                                        </div>
                                        <div className={styles.links}>
                                            <Link target="_blank" to={`${x.real}`}>
                                                <img src="/links/laptop.png" height="20px" width="20px"/>
                                                origional
                                            </Link>
                                            <Link target="_blank" to={`${x.site}`}>
                                                <img src="/links/laptop.png" height="20px" width="20px"/>
                                                redesigned
                                            </Link>
                                            <Link target="_blank" to={`${x.github}`}>
                                                <img src="/links/github.png" height="20px" width="20px"/>
                                                github
                                            </Link>
                                        </div>
                                    </div>

                                    <div className={styles.siteImg}>
                                        <img src={x.image.main ?? ""} alt="site img"/>
                                    </div>
                                </article>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.section>
        </>
    )
};

export default Simulations;