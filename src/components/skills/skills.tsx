import styles from './skills.module.scss';
import { motion } from 'motion/react';

function Skills(){
    return(
        <>
            <motion.section 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true, amount: 0.3 }}
                id="skills" 
                className={styles.skills}>

                <header className={styles.header}>
                    <h4>SKILLS</h4>
                </header>

                <div className={styles.skillsContainer}>
                    <h3>Technologies I work with.</h3>
                    <ul className={styles.skillList}>

                        <li className={styles.listHead}>
                            <details>
                                <summary>Languages</summary>
                                <p>HTML5</p>
                                <p>CSS3</p>
                                <p>SASS</p>
                                <p>JavaScript</p>
                                <p>TypeScript</p>
                            </details>
                        </li>

                        <li className={styles.listHead}>
                            <details>
                                <summary>Frameworks</summary>
                                <p>React</p>
                                <p>Jest</p>
                                <p>Mocha</p>
                            </details>
                        </li>

                        <li className={styles.listHead}>
                            <details>
                                <summary>Tools</summary>
                                <p>Git & GitHub</p>
                                <p>VS Code</p>
                                <p>Figma</p>
                            </details>
                        </li>

                        <li className={styles.listHead}>
                            <details>
                                <summary>UX/UI</summary>
                                <p>Responsive Design</p>
                                <p>Flexbox & Grid</p>
                                <p>ARIA Accessibility</p>
                                <p>JavaScript</p>
                                <p>TypeScript</p>
                            </details>
                        </li>

                    </ul>
                </div>
                
            </motion.section>
        </>
    )
};

export default Skills;