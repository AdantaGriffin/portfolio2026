import styles from './footer.module.scss';

function Footer(){
    return(
        <>
            <section>
                <footer className={styles.footer}>
                    <div className={styles.footerText}>
                        <p>AdantaGriffin</p>
                        <p>2026 &copy;Adanta Griffin. All rights reserved.</p>
                    </div>
                    
                    <div>
                        <ul className={styles.footerLinks}>
                            <li><img src="/links/linkedin.png" height="20px" width="20px" alt="soclink"/></li>
                            <li><img src="/links/github.png" height="20px" width="20px" alt="soclink"/></li>
                            <li><img src="/links/instagram.png" height="20px" width="20px"  alt="soclink"/></li>
                        </ul>
                    </div>
                </footer>
            </section>
        </>
    )
};

export default Footer;