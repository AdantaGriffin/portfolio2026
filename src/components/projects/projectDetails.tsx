import styles from './projectDetails.module.scss';
import { useParams } from 'react-router-dom';
import { useApi } from '../api/api';

function ProjectDetails(){
    const {projects, simulations} = useApi();
    const {id} = useParams();
    const filter = projects.filter(x => x.id === id);
    const filter2 = simulations.filter(x => x.id === id);
    //console.log(filter[0]?.image.main)
    console.log(filter)
    console.log(filter2)
    return(
        <>
            <section className={styles.projectDetails}>
                <ul className={styles.images}>
                    <li><img src={`/${filter[0]?.image?.main ?? filter2[0]?.image?.main}`} className={styles.imgDesk} alt="imageDesktop"/></li>
                    <li><img src={`/${filter[0]?.image?.mobile ?? filter2[0]?.image?.mobile}`} alt="imageMobile"/></li>
                </ul>

                <div className={styles.details}>

                    <h2 className={styles.detailsTitle}>{filter[0]?.title ?? filter2[0]?.title}</h2>
                    
                    <div className={styles.detailsLanguages}>
                        <div>{filter[0]?.languages.join(" ") ?? filter2[0]?.languages.join(" ") ?? "languages to be"}</div>
                        <hr></hr>
                    </div>
                    <div>
                        <div className={styles.detailDescription}>{filter[0]?.desc ?? filter2[0]?.desc ?? "description to be"} </div>
                        <hr></hr>
                    </div>
                    <div className={styles.detailsConflict}>
                        <div className={styles.conflicts}><b>problem :</b> {filter[0]?.challenge ?? filter2[0]?.challenge}</div>
                        <hr></hr>
                        <div className={styles.conflicts}><b>solution :</b> {filter[0]?.solution ?? filter2[0]?.solution}</div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default ProjectDetails;