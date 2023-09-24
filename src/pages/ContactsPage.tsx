import Header from "./Components/Header";
import styles from '@/styles/Home.module.css'
import linkedinlogo from '@/images/linkedinlogo.webp'
import gitgublogo from '@/images/github-mark.webp'
import instagramlogo from '@/images/instagramlogo.webp'

const ContactsPage = () => {
    return(
        <>
        <div><Header /></div>
        <div className={styles.aboutDiv}>
            <section className={styles.aboutMePage}>
                <h1>Where to reach me?</h1>
                <div className={styles.logoClass}>
                    <div>
                        <a href="https://www.linkedin.com/in/aquonmcdyess/" target="_blank"><img src={linkedinlogo.src} className={styles.linkIcon} /></a>
                    </div>
                    <div>
                        <a href="https://github.com/amcdyess0" target="_blank"><img src={gitgublogo.src} className={styles.linkIcon} /></a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/aquonjustaquon/" target="_blank"><img src={instagramlogo.src} className={styles.linkIcon} /></a>
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}

export default ContactsPage;