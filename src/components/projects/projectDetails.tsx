import styles from './projectDetails.module.scss';
import { useParams } from 'react-router-dom';
import { useApi } from '../api/api';
import {motion} from 'motion/react';
import { Link } from 'react-router-dom';

function ProjectDetails(){
    const {projects, simulations} = useApi();
    const {id} = useParams();
    const filter = projects.filter(x => x.id === id);
    const filter2 = simulations.filter(x => x.id === id);
    //console.log(filter[0]?.image.main)
    //console.log(filter)
    //console.log(filter2)
    const videoSrc = filter[0]?.image?.video ?? filter2[0]?.image?.video ?? undefined;
    //console.log(videoSrc)
    const data = filter.length > 0 ? filter : filter2;
    console.log(data)
    return(
        <>
            <motion.section 
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{ duration: 2.6 }}
            viewport={{ once: true, amount: 0.3 }}
             className={styles.projectDetails}>
                <ul className={styles.images}>
                    
                    <li><img src={`/${filter[0]?.image?.main ?? filter2[0]?.image?.main}`} className={styles.imgDesk} alt="imageDesktop"/></li>
                    
                    <li><img src={`/${filter[0]?.image?.mobile ?? filter2[0]?.image?.mobile}`} alt="imageMobile"/></li>

                </ul>

                <div className={styles.projectsInfo}>

                    <div>
                        <a href={`${filter[0]?.site}`} target="_blank">
                        <h2 className={styles.detailsTitle}>{filter[0]?.title ?? filter2[0]?.title}</h2>
                        </a>
                    </div>
                    
                    <div className={styles.detailsLanguages}>
                        <p>{filter[0]?.languages.join(" ") ?? filter2[0]?.languages.join(" ") ?? "languages to be"}</p>
                    </div>

                    <div>
                        <div className={styles.detailDescription}>{filter[0]?.desc ?? filter2[0]?.desc ?? "description to be"} </div>
                    </div>

                    <div className={styles.detailsConflict}>
                        <div className={styles.conflicts}><b style={{fontSize:"16px"}}>Problem :</b> {filter[0]?.challenge ?? filter2[0]?.challenge}</div>
                        <hr></hr>
                        <div className={styles.conflicts}><b style={{fontSize:"16px"}}>Solution :</b> {filter[0]?.solution ?? filter2[0]?.solution}</div>
                    </div>

                    <div className={styles.media}>
                        <p>video and screenshots:</p>
                        <ul className={styles.mediaList}>
                            <li className={styles.mediaItem}>
                                <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                src={videoSrc}
                                className={styles.mediaSrc}></video>
                            </li>
                            {data[0]?.image?.screenshots.map(x => (
                                <li key={x} className={styles.mediaItem}><img src={`/${x}`}/></li>
                            ))}
                        </ul>
                    </div>
                    
                </div>
            </motion.section>
        </>
    )
};

export default ProjectDetails;