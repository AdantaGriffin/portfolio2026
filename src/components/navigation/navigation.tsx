import styles from './navigation.module.scss';
import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import {useApi} from '../api/api';

function Navigation(){
    const {showNav, setShowNav} = useApi();
    const nav = () => {
        setShowNav(prev => !prev);
    }
    console.log(showNav)
    return(
        <>
            <nav>
                <button onClick={nav}>
                    <img src="/icons/menu.png" alt="drop menu"/>
                </button>
                <ul
                  className={`${styles.navigationList} ${
                    showNav ? "" : styles.inactive
                  }`}
                >
                    <li onClick={nav}><HashLink to="/#home">Home</HashLink></li>
                    <li onClick={nav}><HashLink to="/#about">About</HashLink></li>
                    <li onClick={nav}><HashLink to="/#skills">Skills</HashLink></li>
                    <li onClick={nav}><HashLink to="/#projects">Projects</HashLink></li>
                    <li onClick={nav}><HashLink to="/#simulations">Simulations</HashLink></li>
                    <li onClick={nav}><HashLink to="/#contact">Contact</HashLink></li>
                    <li onClick={nav}><HashLink to="/catalogue">Catalogue</HashLink></li>
                    <li onClick={nav} className={styles.resume}><Link to="/resume">Resume</Link></li>
                </ul>
            </nav>
        </>
    )
};

export default Navigation;