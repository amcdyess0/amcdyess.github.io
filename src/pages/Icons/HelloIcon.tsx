import styles from '@/styles/Home.module.css'
import hi from '@/images/1200px-Emoji_u1f44b.svg.png'
const HelloIcon = () => {
    return(
        <>
            <div className={styles.icon}>
                <img src={hi.src} className={styles.hi} />
            </div>   
        </>
    )       
}

export default HelloIcon;