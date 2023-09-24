import styles from '@/styles/Home.module.css'
import ex from '@/images/1553148.png'
const ExperienceIcon = () => {
    return(
        <>
            <div className={styles.exicon}>
                <img src={ex.src} className={styles.expIcon} />
            </div>   
        </>
    )       
}

export default ExperienceIcon;