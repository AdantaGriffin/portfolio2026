import styles from './root.module.scss';
import { Outlet } from 'react-router-dom';
import Header from '../header/header';

function Root(){
    return(
        <section className={styles.root}>
        <Header/>
        <Outlet/>
        </section>
    )
};

export default Root;