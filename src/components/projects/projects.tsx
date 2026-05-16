import styles from './projects.module.scss';
import {motion} from 'motion/react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Projects(){

    type ProjectImage = {
        main: string | null;
        mobile: string | null;
        screenshots: string | null;
        video: string | null;
    };

    type Project = {
        id: string;
        title: string;
        desc: string;
        image:ProjectImage;
        languages:string[];
        github: string | null;
        site: string | null;

};
    const [projects, setProjects] = useState<Project[]>([]);
    useEffect(() => {
        async function getProjects(){
            const response = await fetch('/projects/projects.json');
            const result = await response.json();
            //console.log(result.projects);
            setProjects(result.projects);
        }
        getProjects()
    }, []);    
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
                        {projects?.map(x => (
                            <li key={x.id}>
                                <article className={styles.projectArticle}>
                                    <div className={styles.imageContainer}>
                                        <img src={x.image.main ?? ""} alt="project image" />
                                    </div>

                                    <div className={styles.projectsInfo}>
                                        <p className={styles.title}>{x.title}</p>
                                        <p className={styles.description}>{x.desc}</p>
                                        <div className={styles.langs}>
                                            {x.languages.map(l => (
                                                <p className={styles.languages} key={l}>{l}</p>
                                            ))}
                                        </div>
                                        <div className={styles.links}>
                                            <Link to={x.site ?? ""} target="_blank"><img className={styles.site} src="/links/laptop.png" height="20px" width="20px"/></Link>
                                            <p>view details</p>
                                            <Link to={x.github ?? ""} target="_blank"><img className={styles.git} src="/links/github.png" height="20px" width="20px"/></Link>

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