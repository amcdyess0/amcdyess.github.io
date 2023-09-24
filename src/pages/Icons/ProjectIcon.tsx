import styles from '@/styles/Home.module.css'
import ppic from '@/images/1024px-Noun_Project_projects_icon_1327109_cc.svg.png'

const ProjectIcon = () => {
    return(
        <>
            <div className={styles.projecticon}>
                <img src={ppic.src} className={styles.projectpic} />
            </div>   
        </>
    )       
}

export default ProjectIcon;