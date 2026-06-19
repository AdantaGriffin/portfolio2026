import styles from './catalogue.module.scss';

function Catalogue(){
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
                        <li className={styles.catItem}>example space</li>
                        <li className={styles.catItem}>example space</li>
                    </ul>
                </div>
            </section>
        </>
    )
};

export default Catalogue;