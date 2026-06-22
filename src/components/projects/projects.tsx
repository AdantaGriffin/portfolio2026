import styles from './projects.module.scss';
import {motion} from 'motion/react';
import { Link } from 'react-router-dom';
import { useApi } from '../api/api';

function Projects(){
    const {projects} = useApi();
    return(
        <>
            <motion.section 
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{ duration: 1.5 }}
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
                        {projects?.map(x => (
                            <li key={x.id}>
                                <article className={styles.projectArticle}>
                                    <div className={styles.imageContainer}>
                                        <img src={x.image.main ?? ""} alt="project image" />
                                    </div>

                                    <div className={styles.projectsInfo}>
                                        <p className={styles.title}>{x.title}</p>
                                        <p className={styles.description}>{x.brief}</p>
                                        <div className={styles.langs}>
                                            {x.languages.map(l => (
                                                <p className={styles.languages} key={l}>{l}</p>
                                            ))}
                                        </div>
                                        <div className={styles.links}>
                                            <Link className={styles.icon} to={x.site ?? ""} target="_blank"><img className={styles.site} src="/links/laptop.png" height="20px" width="20px"/></Link>
                                            <Link className={styles.viewDetails} to={`/details/${x.id}`}>view details</Link>
                                            <Link className={styles.icon} to={x.github ?? ""} target="_blank"><img className={styles.git} src="/links/github.png" height="20px" width="20px"/></Link>

                                        </div>
                                    </div>

                                </article>
                            </li>
                        ))}
                        {/*<li>
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
                        </li>*/}
                    </ul>
                </div>

            </motion.section>
        </>
    )
};

export default Projects;