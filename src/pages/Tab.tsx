import styles from '@/styles/Home.module.css'

type tabProps = {
    name: string
}

const names = {
    aboutMe: 'about me',
    experiences: 'experiences',
    projects: 'projects'
}

const Tab = ({name}: tabProps) => {
    return (
        <p className={styles.tabs2}>{name}</p>
    );
}

export default Tab;