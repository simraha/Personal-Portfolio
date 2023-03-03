import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap"
import headerImg from "../assets/img/gucci_drawing.png";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Student.", "Developer.", "UX/UI Designer."]
    const [text, setText] = useState('');
    const [index, setIndex] = useState(1);
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={11} md={10} xl={10}>
                        <span class="letter">WELCOME</span>
                        <span class="letter">TO</span>
                        <span class="letter">MY</span>
                        <span class="letter">PORTFOLIO</span>
                        <h2>{'I am Simrah, a '}<span className="wrap">{text}</span></h2>

                    </Col>
                    <Col xs={11} md={8} xl={6}>
                        <p>Write about yourself here... . It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p> next line</p>
                        <p><br></br></p>
                        <p><br></br></p>
                        <p><br></br></p>
                        <p><br></br></p>
                        <p><br></br></p>
                        <p><br></br></p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}