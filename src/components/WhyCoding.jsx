import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import WhyCodingImg from "./../img/WhyCoding.svg"

import Logic1 from "./../img/Logic1.svg"
import Evalutation from "./../img/Evalutation.svg"
import Algorithms from "./../img/Algorithms.svg"
import Abstraction from "./../img/Abstraction.svg"
import Patterns from "./../img/Patterns.svg"
import Decomposition from "./../img/Decomposition.svg"
import CircleBackground from "./../img/CircleBackground.svg"

export function WhyCoding() {

    const Logo = ({ head, img, text }) => <>
        <Row className={`text-center align-items-center`}>
            <Col md={3} xs={12}>
                <div className="text-center rounded-circle p-3" style={{
                    width: 60,
                    height: 60,
                    backgroundImage: "url(" + CircleBackground + ")",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                    <Image src={img} style={{
                        width: 30,
                        height: 30
                    }} />
                </div>
            </Col>

            <Col md={9} xs={12} className="pb-4 pt-3 pb-lg-5">
                <div style={{ textAlign: 'left' }}>
                    <h6 style={{ lineHeight: 1 }}>{head}</h6>
                    <div style={{ lineHeight: 1.2, fontSize: 14 }}>{text}</div>
                </div>
            </Col>
        </Row>
    </>


    return <Container fluid className="py-4" style={{ backgroundColor: "#FFFFFF" }}>

        <div className="text-center py-3">
            <h4 style={{ color: "#FB5B16" }}>Why Coding?</h4>
            <p style={{ color: "#282828" }}>Vidyayan Focuses on developing ‘skills’ rather than ‘syntax’, to make children</p>
        </div>


        <Row className="text-center justify-content-around align-items-center">

            <Col className="text-right align-self-center" xs={6} md={4}>
                <Container fluid style={{ display: 'grid', justifyContent: 'right' }}>
                    <Logo img={Evalutation} head="Evaluation" text="Involves making judgement" />
                    <Logo img={Logic1} head="Logic" text="for predicting & analysis" />
                    <Logo img={Algorithms} head="Algorithms" text="To make steps & rules" />
                </Container>
            </Col>
            <Col className="" xs={{ order: 'first', span: 12 }} md={{ order: 1, span: 4 }}>
                <Image src={WhyCodingImg} fluid />
            </Col>
            <Col className=" align-self-center" xs={6} md={{ order: 'last', span: 4 }}>
                <Container fluid style={{ display: 'grid', justifyContent: 'left' }}>
                    <Logo img={Abstraction} head="Abstraction" text="To remove unneccessary data" />
                    <Logo img={Patterns} head="Patterns" text="To make use of similarities" />
                    <Logo img={Decomposition} head="Decomposition" text="Break down a problem" />
                </Container>
            </Col>

        </Row>

    </Container>

}