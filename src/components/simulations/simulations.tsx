import styles from './simulations.module.scss';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useApi } from '../api/api';

function Simulations(){
    const {simulations} = useApi();
    return(
        <>
            <motion.section
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{ duration: 2.6 }}
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
                        {simulations?.map(x => (
                            <li key={x.id}>
                                <article className={styles.simulationsArticle}>
                                    
                                    <div className={styles.simulationsInfo}>

                                        <div className={styles.siteTitle}>
                                            <Link to={`/details/${x.id}`} className={styles.title}>{x.title}</Link>
                                        </div>

                                        <div className={styles.links}>
                                            <Link target="_blank" to={`${x.real}`}>
                                                <img src="/links/laptop.png" height="40px" width="50px"/>
                                                
                                            </Link>
                                            <Link target="_blank" to={`${x.site}`}>
                                                <img src="/icons/web-programming.png" height="40px" width="50px"/>
                                                
                                            </Link>
                                            <Link target="_blank" to={`${x.github}`}>
                                                <img src="/links/github.png" height="40px" width="50px"/>
                                                
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