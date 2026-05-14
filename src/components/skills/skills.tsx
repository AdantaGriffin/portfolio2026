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
                            <p>Languages</p>
                            <ul className={styles.subList}>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>Sass</li>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                            </ul>
                        </li>
                        <li className={styles.listHead}>
                            <p>Frameworks</p>
                            <ul className={styles.subList}>
                                <li>React</li>
                                <li>Jest</li>
                                <li>Mocha</li>
                            </ul>
                        </li>
                        <li className={styles.listHead}>
                            <p>Tools</p>
                            <ul className={styles.subList}>
                                <li>Git & GitHub</li>
                                <li>VS Code</li>
                                <li>Figma</li>
                            </ul>
                        </li>
                        <li className={styles.listHead}>
                            <p>UI Skills</p>
                            <ul className={styles.subList}>
                                <li>Responsive Design</li>
                                <li>FlexBox & Grid</li>
                                <li>Accessibility</li>
                            </ul>
                        </li>

                    </ul>
                </div>
                
            </motion.section>
        </>
    )
};

export default Skills;