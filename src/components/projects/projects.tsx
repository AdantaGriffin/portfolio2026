import styles from './projects.module.scss';
import {motion} from 'motion/react';
function Projects(){
    return(
        <>
            <motion.section 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true, amount: 0.3 }}
                id="projects" 
                className={styles.projects}>
                <header className={styles.header}>
                    <h4>PROJECTS</h4>
                </header>
                <div className={styles.projectsContainer}>
                    <h3 className={styles.projectsText}>
                        Some things I've built.
                    </h3>
                    
                    <ul className={styles.projectsList}>
                        <li>
                            <article className={styles.projectArticle}>
                                <div className={styles.imageContainer}>image container</div>

                                <div className={styles.projectsInfo}>
                                    <p className={styles.title}>title</p>
                                    <p className={styles.description}>description</p>
                                    <div className={styles.langs}><p>lang</p><p>lang</p><p>lang</p></div>
                                    <div className={styles.links}>
                                        <p><img className={styles.site} src="/links/laptop.png" height="20px" width="20px"/></p>
                                        <p>view details</p>
                                        <p><img className={styles.git} src="/links/github.png" height="20px" width="20px"/></p>
                                        
                                    </div>
                                </div>
                            </article>
                        </li>
                        <li>
                            <article className={styles.projectArticle}>
                                <div className={styles.imageContainer}>image container</div>

                                <div className={styles.projectsInfo}>
                                    <p className={styles.title}>title</p>
                                    <p className={styles.description}>description</p>
                                    <div className={styles.langs}><p>lang</p><p>lang</p><p>lang</p></div>
                                    <div className={styles.links}>
                                        <p><img className={styles.site} src="/links/laptop.png" height="20px" width="20px"/></p>
                                        <p>view details</p>
                                        <p><img className={styles.git} src="/links/github.png" height="20px" width="20px"/></p>
                                        
                                    </div>
                                </div>
                            </article>
                        </li>
                        <li>
                            <article className={styles.projectArticle}>
                                <div className={styles.imageContainer}>image container</div>

                                <div className={styles.projectsInfo}>
                                    <p className={styles.title}>title</p>
                                    <p className={styles.description}>description</p>
                                    <div className={styles.langs}><p>lang</p><p>lang</p><p>lang</p></div>
                                    <div className={styles.links}>
                                        <p><img className={styles.site} src="/links/laptop.png" height="20px" width="20px"/></p>
                                        <p>view details</p>
                                        <p><img className={styles.git} src="/links/github.png" height="20px" width="20px"/></p>
                                        
                                    </div>
                                </div>
                            </article>
                        </li>
                        <li>
                            <article className={styles.projectArticle}>
                                <div className={styles.imageContainer}>image container</div>

                                <div className={styles.projectsInfo}>
                                    <p className={styles.title}>title</p>
                                    <p className={styles.description}>description</p>
                                    <div className={styles.langs}><p>lang</p><p>lang</p><p>lang</p></div>
                                    <div className={styles.links}>
                                        <p><img className={styles.site} src="/links/laptop.png" height="20px" width="20px"/></p>
                                        <p>view details</p>
                                        <p><img className={styles.git} src="/links/github.png" height="20px" width="20px"/></p>
                                        
                                    </div>
                                </div>
                            </article>
                        </li>
                        <li>
                            <article className={styles.projectArticle}>
                                <div className={styles.imageContainer}>image container</div>

                                <div className={styles.projectsInfo}>
                                    <p className={styles.title}>title</p>
                                    <p className={styles.description}>description</p>
                                    <div className={styles.langs}><p>lang</p><p>lang</p><p>lang</p></div>
                                    <div className={styles.links}>
                                        <p><img className={styles.site} src="/links/laptop.png" height="20px" width="20px"/></p>
                                        <p>view details</p>
                                        <p><img className={styles.git} src="/links/github.png" height="20px" width="20px"/></p>
                                        
                                    </div>
                                </div>
                            </article>
                        </li>
                        <li>
                            <article className={styles.projectArticle}>
                                <div className={styles.imageContainer}>image container</div>

                                <div className={styles.projectsInfo}>
                                    <p className={styles.title}>title</p>
                                    <p className={styles.description}>description</p>
                                    <div className={styles.langs}><p>lang</p><p>lang</p><p>lang</p></div>
                                    <div className={styles.links}>
                                        <p><img className={styles.site} src="/links/laptop.png" height="20px" width="20px"/></p>
                                        <p>view details</p>
                                        <p><img className={styles.git} src="/links/github.png" height="20px" width="20px"/></p>
                                        
                                    </div>
                                </div>
                            </article>
                        </li>
                    </ul>
                </div>
            </motion.section>
        </>
    )
};

export default Projects;