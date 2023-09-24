import Header from "./Components/Header";
import styles from '@/styles/Home.module.css'

const ProjectPage = () => {
    return(
        <div>
        <div><Header /></div>
        <div className={styles.aboutDiv}>
            <section className={styles.aboutMePage} style={{width:'75%'}}>
                <div>
                    <h3>AI Chess Web Application(in-progress)</h3>
                    <u>Summary</u>
                    <p>
                        Web application that allows users to play a game of chess against SockfishAI (the best open-source A.I. chess engine avalible)
                    </p>
                    <u>Languages and Technologies</u>
                    <p>Next.js; C++; Node.js; Stockfish Engine; Git; Github; Terminal;</p>
                    <p></p>
                </div>
                <div>
                    <a href="https://github.com/amcdyess0/User-Database-Management-App" style={{textDecoration:'none'}} target='_blank'><h3>User Database Management Application</h3></a>
                    <u>Summary</u>
                    <p>
                        Backend application that uses CRUD operations on a database of website user accounts.
                        Exercised object-oriented design and clean-coding principles to maximize organization and readability.
                    </p>
                    <u>Languages and Technologies</u>
                    <p>Java; Maven; MongoDB; Git; Github; Postman; JSON;</p>
                </div>
                <div>
                    <a href="https://github.com/amcdyess0/movieApp" style={{textDecoration:'none'}} target='_blank'><h3>Movie Web Application</h3></a>
                    <u>Summary</u>
                    <p>
                        Frontend application that displays a clear and intuitive user interface for a Movie streaming company.
                        Employed Node.js to retrieve data from a RestAPI, then displayed the retrieved data in the web
                        application
                    </p>
                    <u>Languages and Technologies</u>
                    <p>React.js;Node.js;Git;Github;</p>
                    <div style={{height:'15vh'}}></div>
                </div>
            </section>
        </div>
        </div>
    )
}

export default ProjectPage;