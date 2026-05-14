import styles from './header.module.scss';

import Navigation from '../navigation/navigation';
import {HashLink} from 'react-router-hash-link';
function Header(){
    return(
        <>
                <header className={styles.header}>
                    <h1><HashLink href="index">AdantaGriffin</HashLink></h1>
                    <Navigation/>
                </header>
        </>
    )
};

export default Header