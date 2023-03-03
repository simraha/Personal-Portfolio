import 'react-multi-carousel/lib/styles.css';
import gucci_drawing from "../assets/img/gucci_drawing.png";
import grindlogo from "../assets/img/grindlogo.png"
import crud from "../assets/img/crud.png";
import resume from "../assets/img/resume.png";
import SimrahResume from "../assets/img/SimrahResume.pdf";
export const Projects = () => {

    return (
        <section className="project" id="projects">

            <section id="projects">
                <h2 class="title">Here are some of my projects and resume</h2>
                <div class="grid-container">
                    <div class="project-tile">
                        <a href="https://github.com/LaurierCS/Grind" target="_blank"><img src={grindlogo} alt="Header Img" />
                            <p>Grind Application</p>
                        </a>
                    </div>
                    <div class="project-tile">
                        <a href="https://github.com/simraha/CRUD-table-application" target="_blank"><img src={crud} alt="Header Img" />
                            <p><br></br><br></br>CRUD Table Application</p>
                        </a>
                    </div>
                    <div class="project-tile">
                        <a href={SimrahResume} target="_blank"><img src={resume} alt="Header Img" />
                            <p>Click here to download my resume!</p>
                        </a>
                    </div>
                </div>
            </section>
        </section>

    )
}