import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.header}>
                <h1><Link href='/' style={{textDecoration: 'none', color: 'black'}}>Aquon McDyess</Link></h1>
            </div>
        </header>
    )
}