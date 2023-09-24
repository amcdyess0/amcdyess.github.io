import { useState } from "react";
import styles from '@/styles/Home.module.css'
import HelloIcon from "../Icons/HelloIcon";
import ExperienceIcon from "../Icons/ExperienceIcon";
import ProjectIcon from "../Icons/ProjectIcon";
import ContactsIcon from "../Icons/ContactsIcon";
import Tab from "../Tab";
import Router, { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();
    const names = {
        aboutMe: 'about me',
        experiences: 'experiences',
        projects: 'projects',
        contact: 'contact me'
    }
    const [info, setInfo] = useState(<div className={styles.info}>
    <div style={{
        width: '20%',  
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        textAlign: 'center'
      }}
      onClick={()=>router.push('/AboutPage')}
      >
        <HelloIcon />
        <div className={styles.tabs} onClick={()=>router.push('/AboutPage')}><Tab name={names.aboutMe} /></div>
      </div>
      <div style={{
        width: '20%',  
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        textAlign: 'center'
      }}
      onClick={()=>router.push('/ExperiencePage')}
      >
        <ExperienceIcon />
        <div className={styles.tabs} onClick={()=>router.push('/ExperiencePage')}><Tab name={names.experiences} /></div>
      </div>
      <div style={{
        width: '20%',  
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}
      onClick={()=>router.push('/ProjectPage')}
      >
        <ProjectIcon />
        <div className={styles.tabs} onClick={()=>router.push('/ProjectPage')}><Tab name={names.projects} /></div>
      </div>
      <div style={{
        width: '20%',  
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}
      onClick={()=>router.push('/ContactsPage')}
      >
        <ContactsIcon />
        <div className={styles.tabs} onClick={()=>router.push('/ContactsPage')}><Tab name={names.contact} /></div>
      </div>

  </div>)
    
    return(
        <div>{info}</div>
    )
}