import styles from '@/styles/Home.module.css'
import gradpic from '@/images/gradPic.webp'
import dripped from '@/images/dripped.webp'
import javaIcon from '@/images/javaicon.png'
import reactIcon from '@/images/giphy.gif'
import gitIcon from '@/images/gitIcon.png'
import mongoIcon from '@/images/mongoDbIcon.svg'
import compIcon from '@/images/CompTIA_Network_2Bce.png'
import solutionsArchitect from '@/images/AWS-Certified-Solutions-Architect-certwizard.png'
import Link from 'next/link'
import Header from './Components/Header'
import { motion } from 'framer-motion'
import Head from 'next/head'

const AboutPage = () => {
    return(
        <div>
            <div><Header /></div>
            <div className={styles.aboutDiv}>
                <div className={styles.aboutMePage}>
                    <div>
                    <p>Hello, my name is Aquon McDyess and I am a software engineer.</p>
                    <div><img src={dripped.src} className={styles.picDim} /></div>
                    <p>
                        I recently graduated from Kennesaw State University and have a strong passion for software development.<br></br>
                        Throughout my time at university, I learned a diverse set of programming languages[Java, Javascript, Python, SQL, etc.]<br></br>
                        and competencies[Clean Coding, Solid Code, Data Structures & Algorithms, Project Management & SDLC] that<br></br>
                        prepared me to thrive in the tech industry. Futhermore, I gained professional experience to allow for<br></br>
                        a smooth transition into the industry.
                    </p>
                    <div><img src={gradpic.src} className={styles.picDim}/></div>
                    <p>
                        One of the many lessons I learned from my managers and peers is to implement continous learning into my life. Everyday<br></br>
                        working towards adding a new skill repertoire. This has led me to gain applicable knowledge in industry technologies<br></br> 
                        that were not taught on campus:.
                    </p>
                    <div className={styles.iconDiv}>
                        <div><img src={javaIcon.src} className={styles.skillIcon}/></div>
                        <div><img src={reactIcon.src} className={styles.skillIcon}/></div>
                        <div><img src={gitIcon.src} className={styles.skillIcon}/></div>
                        <div><img src={mongoIcon.src} className={styles.skillIcon}/></div>
                    </div>
                    <p>
                        Currently, I am working towards the Comptia Network+ and AWS Solutions Archetict certification.
                    </p>
                    <div className={styles.iconDiv}>
                        <div><img src={compIcon.src} className={styles.skillIcon}/></div>
                        <div><img src={solutionsArchitect.src} className={styles.skillIcon}/></div>
                    </div>
                    <div style={{height:'15vh'}}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;