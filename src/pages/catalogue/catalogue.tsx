import styles from './catalogue.module.scss';
import { useApi } from '../../components/api/api';

function Catalogue(){
    const {catalogue} = useApi();
    console.log(catalogue)
    return(
        <>
            <section className={styles.catalogue}>
                <header>
                    <h4>Catalogue</h4>
                </header>
                <div className={styles.catalogueContainer}>
                    <h3 className={styles.catalogueText}>
                        A collection of my work
                    </h3>
                    <ul className={styles.catalogueList}>
                        {catalogue?.map(x => (
                            <li 
                            key={x.id}
                            className={styles.catItem}>
                                <p>{x.title ?? ""}</p>
                                <a href="">site</a>
                                <a href="">github</a>
                            </li>
                        ))}
                        {/*<li className={styles.catItem}>example space</li>
                        <li className={styles.catItem}>example space</li>
                        <li className={styles.catItem}>example space</li>
                        <li className={styles.catItem}>example space</li>
                        <li className={styles.catItem}>example space</li>
                        <li className={styles.catItem}>example space</li>
                        <li className={styles.catItem}>example space</li>
                        <li className={styles.catItem}>example space</li>
                        <li className={styles.catItem}>example space</li>
                        <li className={styles.catItem}>example space</li>
                        <li className={styles.catItem}>example space</li>
                        <li className={styles.catItem}>example space</li>
                        <li className={styles.catItem}>example space</li>
                        <li className={styles.catItem}>example space</li>
                        <li className={styles.catItem}>example space</li>
                        <li className={styles.catItem}>example space</li>
                        <li className={styles.catItem}>example space</li>
                        <li className={styles.catItem}>example space</li>
                        <li className={styles.catItem}>example space</li>
                        <li className={styles.catItem}>example space</li>*/}
                    </ul>
                </div>
            </section>
        </>
    )
};

export default Catalogue;