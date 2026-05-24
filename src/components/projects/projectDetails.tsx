import styles from './projectDetails.module.scss';
import { useParams } from 'react-router-dom';
import { useApi } from '../api/api';

function ProjectDetails(){
    const {projects} = useApi();
    const {id} = useParams();
    const filter = projects.filter(x => x.id === id);
    console.log(filter[0]?.image.main)
    return(
        <>
            <section className={styles.projectDetails}>
                <div className={styles.images}>
                    <img src={`/${filter[0]?.image?.main}`} className={styles.imgDesk} alt="imageDesktop"/>
                    <img src={`/${filter[0]?.image?.mobile}`} className={styles.imgMobile} alt="imageMobile"/>
                </div>

                <div className={styles.details}>
                    <h2 className={styles.detailsTitle}>{filter[0]?.title}</h2>
                    <div className={styles.detailsLanguages}>{filter[0]?.languages.join(" ")}</div>
                    <div className={styles.detailDescription}>{filter[0]?.desc}</div>
                    <div>problems/solutions</div>
                </div>

                <div className={styles.screenShots}>screen shots</div>
            </section>
        </>
    )
};

export default ProjectDetails;