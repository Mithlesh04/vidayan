import { Container, Row, Col , Image , Button } from 'react-bootstrap';
import BookNow_banner1 from "./../img/BookNow_banner1.svg"
import BookNow_banner2 from "./../img/BookNow_banner2.svg"


export function BookNow({col1={} , col2={} , col3={} , children}) {

    return <Container fluid className="pt-3">
        <Row>
            <Col className="px-0" style={{borderRadius:15,background:"linear-gradient(90deg, #41237E 54.69%, #92125F 100%)"}}
             md={{ span: 8, offset: 2 }}
             lg={{ span: 6, offset: 3 }}
             sm={{ span: 10, offset: 1 }}
             xxl={{ span: 6, offset: 3 }}
             >
               <Container fluid>
                <Row className="py-3 justify-content-center align-items-center">

                    <Col className="px-2" {...col1}>
                        <div className="d-flex" style={{float:'left'}}>
                            <Image src={BookNow_banner1} fluid/>
                        </div>
                    </Col>
                    <Col {...col2}>
                        {children ? children : 
                            <div className="d-flex justify-content-center">
                                <Button style={{background:"#E91E63",color:"#FFFFFF",border:'none'}}>Book Now</Button>
                            </div>
                        }
                    </Col>
                    <Col className="px-0" {...col3}>
                        <div className="d-flex" style={{float:'right'}}>
                            <Image className="" src={BookNow_banner2} fluid/>
                        </div>
                    </Col>


                </Row>
               </Container>
            </Col>
        </Row>
    </Container>
}