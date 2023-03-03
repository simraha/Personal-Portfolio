
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import databases from "../assets/img/databases.png"
import network from "../assets/img/network.png"
import webdev from "../assets/img/webdev.png"
import datastructures from "../assets/img/datastructures.png"
import oop from "../assets/img/oop.png"
import os from "../assets/img/os.png"
import cloud from "../assets/img/cloud.png"
import bigdata from "../assets/img/bigdata.png"
import ux from "../assets/img/ux.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={webdev} alt="Image" />
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={datastructures} alt="Image" />
                                    <h5>Data Structures</h5>
                                </div>
                                <div className="item">
                                    <img src={network} alt="Image" />
                                    <h5>Computer Networks</h5>
                                </div>
                                <div className="item">
                                    <img src={databases} alt="Image" />
                                    <h5>Databases</h5>
                                </div>
                                <div className="item">
                                    <img src={oop} alt="Image" />
                                    <h5>Object Oriented Programming</h5>
                                </div>
                                <div className="item">
                                    <img src={os} alt="Image" />
                                    <h5>Operating Systems</h5>
                                </div>
                                <div className="item">
                                    <img src={cloud} alt="Image" />
                                    <h5>Cloud Computing</h5>
                                </div>
                                

                                <div className="item">
                                    <img src={bigdata} alt="Image" />
                                    <h5>Big Data</h5>
                                </div>

                                <div className="item">
                                    <img src={ux} alt="Image" />
                                    <h5>User Experience Design</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}