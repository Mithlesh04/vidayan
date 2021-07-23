import { Container, Row, Col, Image, Button } from 'react-bootstrap';

import Coding1 from "./../img/Coding1.svg"
import python from "./../img/python.svg"
import WebDevelopment from "./../img/WebDevelopment.svg"
import ArtificialIntelligence from "./../img/ArtificialIntelligence.svg"
import MachineLearning from "./../img/MachineLearning.svg"
import CyberSecurity from "./../img/CyberSecurity.svg"
import AppDevelopment from "./../img/AppDevelopment.svg"


export function CodingOne() {
    const ctList = [
        { top: 'Python 1', img: python, bottom: 'Python' },
        { top: 'web-development', img: WebDevelopment, bottom: 'Web Development' },
        { top: 'artificial-intelligence', img: ArtificialIntelligence, bottom: 'Artificial Intelligence' },
        { top: 'machine-learning', img: MachineLearning, bottom: 'Machine Learning' },
        { top: 'cyber-security', img: CyberSecurity, bottom: 'Cyber security' },
        { top: 'game-Development', img: AppDevelopment, bottom: 'App Development' },
    ]

    const Col1 = _ => <Container className="justify-content-center align-items-center">
        <h4 className="py-3" style={{ fontWeight: 'bold' }}>
            <span style={{ color: "#FB5B16" }}>Creating Future </span>Tech Leaders
        </h4>
        <div className="pb-5">
            Live coding classes for age 6 -15 to help your
            child learn to code
        </div>
        <div className="text-center">
            <Button className="px-4" style={{ borderRadius: 15, boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)", background: "#FB5B16", borderColor: "#FB5B16" }}>Join Now</Button>
        </div>
    </Container>

    return <>
        <Container fluid className="pb-4" style={{ backgroundColor: "#EEE7E7" }}>

            <Row className="justify-content-center align-items-center">
                <Col xs={{ order: 'last', span: 12 }} md={{ order: 'first', span: 5 }}>
                    <Col1 />
                </Col>
                <Col xs={{ order: 'first', span: 12 }} md={{ order: 'last', span: 7 }}>
                    <Image src={Coding1} fluid />
                </Col>

            </Row>

            <div className="py-4 text-center" style={{ color: "#FB5B16", fontWeight: 'bold' }}>Cutting edge courses to make your child future ready</div>

            <Row className="text-center justify-content-between align-items-start">
                {ctList.map((e, i) =>
                    <Col key={i + Math.random()} xs={4} md={2} className="py-3">
                        {/* <div className="text-truncate" style={{}}>{e?.top}</div> */}
                        <Image src={e.img} fluid />
                        <div className="pt-2" style={{ fontWeight: 600, fontSize: 14 }}>{e?.bottom}</div>
                    </Col>
                )
                }
            </Row>

        </Container>
    </>

}