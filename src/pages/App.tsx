import styles from '@/styles/Home.module.css'
import { useState } from "react";
import Home from './Components/Home';
import Header from './Components/Header';
import { AnimatePresence } from 'framer-motion';

export default function App(){
    const names = {
        aboutMe: 'about me',
        experiences: 'experiences',
        projects: 'projects',
        contact: 'contact me'
    }
    const [info, setInfo] = useState(<Home />)
    return(
      <AnimatePresence>
          <div className={styles.app}>
            <div><Header /></div>
            <div className={styles.info}>
              {info}
            </div>
        </div>
      </AnimatePresence>
  )
}