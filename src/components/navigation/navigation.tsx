import styles from './navigation.module.scss';
import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';

function Navigation(){
    return(
        <>
            <nav>
                <ul className={styles.navigationList}>
                    <li><HashLink to="/#home">Home</HashLink></li>
                    <li><HashLink to="/#about">About</HashLink></li>
                    <li><HashLink to="/#projects">Projects</HashLink></li>
                    <li><HashLink to="/#skills">Skills</HashLink></li>
                    <li><HashLink to="/#contact">Contact</HashLink></li>
                    <li className={styles.resume}><Link to="/resume">Resume</Link></li>
                </ul>
            </nav>
        </>
    )
};

export default Navigation;