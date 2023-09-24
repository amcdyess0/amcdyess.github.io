import styles from '@/styles/Home.module.css'
import tmobilelogo from '@/images/tmobileLogo.png'
import amaLogo from '@/images/Amazon_logo.svg'
import cookoutLogo from '@/images/Logo_Cookout.png'
import wflogo from '@/images/Taco_Bell_2016.svg.png'
import tblogo from '@/images/Whole_Foods_Market_logo.svg'
import Header from './Components/Header'

const ExperiencePage = () => {
    return (
        <>
        <div><Header /></div>
        <div className={styles.aboutDiv}>
            <section className={styles.aboutMePage}>
                <div><img src={tmobilelogo.src} className={styles.picDim} style={{height:'100%'}}/></div>
                <div>
                    <h3>Software Engineering Intern</h3>
                    <section className={styles.experienceSection}>
                        <b>Technical Contribuitions</b>
                        <p>1.) Developed a Java Spring application that reprocesses documents within a MongoDB database using the MVC design pattern. Implemented CRUD and CRON operations.</p>
                        <p>2.) Built custom UI components for a PowerApps Web Application that improved usability and data
                                input and processing accuracy by 25%.</p>
                        <p>3.) Reported to a lead developer and scrum master consistently, contributed to daily stand-up meetings,
                            presented updates in bi-weekly sprint demos.</p>
                        
                    </section><br></br>
                </div>
                <div><img src={amaLogo.src} className={styles.picDim} style={{height:'100%'}}/></div>
                <div>
                    <h3>Technical Associate</h3>
                    <section className={styles.experienceSection}>
                        <b>Technical Contribuitions</b>
                        <p>1.) Provided technical and mechanical support in a fast-paced, high-volume environment.</p>
                        <p>2.) Identified and resolved technical issues using troubleshooting skills technical knowledge.</p>
                        <p>3.) Communicated effectively with a cross-functional team to find optimal solutions in a timely manner.</p>
                        
                    </section><br></br>
                </div>
                <div>
                    <h3>None Technical Experiences</h3>
                    <img src={tblogo.src} className={styles.picDim} style={{height:'25%', width: '50%'}}/><br></br>
                    <img src={cookoutLogo.src} className={styles.picDim} style={{height:'25%', width: '50%'}}/><br></br>
                    <img src={wflogo.src} className={styles.picDim} style={{height:'25%', width: '50%'}}/>
                </div>
            </section>
        </div>
        </>
    )
}

export default ExperiencePage;