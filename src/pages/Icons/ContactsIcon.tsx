import styles from '@/styles/Home.module.css'
import cpic from '@/images/mobile-phone-x-512.webp'

const ContactsIcon = () => {
    return(
        <>
            <div className={styles.contactsicon}>
                <img src={cpic.src} className={styles.contactpic} />
            </div>  
        </>
    )       
}

export default ContactsIcon;