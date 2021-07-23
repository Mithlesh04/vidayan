import { Container, Row , Col ,  Image } from 'react-bootstrap';
import image from "./../img/HowItWorks.svg"

export function HowItWorks(){
   
const data=[
    {head : "Book",text : "Book a free coding classes with us. You just need a laptop with good internet connectivity"},
    {head : "Book",text : "Book a free coding classes with us. You just need a laptop with good internet connectivity"},
    {head : "Book",text : "Book a free coding classes with us. You just need a laptop with good internet connectivity"},
    {head : "Book",text : "Book a free coding classes with us. You just need a laptop with good internet connectivity"},
    {head : "Book",text : "Book a free coding classes with us. You just need a laptop with good internet connectivity"},
]

const List = ({head , text , index = 0})=><Row className={`text-center align-items-start`}>
<Col sm={1} md={2} xs={2} lg={1}>
    <span className="text-center" style={{
       height: 30,
       width: 30,
       borderRadius: "50%",
       display: "inline-block",
       background : "#590BB2",
       color : 'white',
       fontSize : 20
    }}>
       {index}
    </span>
</Col>

<Col md={10} xs={10} className="pb-4 pb-lg-4">
    <div style={{ textAlign: 'left' }}>
        <h6 style={{ lineHeight: 1 }}>{head}</h6>
        <div style={{ lineHeight: 1.2, fontSize: 14 }}>{text}</div>
    </div>
</Col>
</Row>


    return <Container className="pt-4">
          <h4 className="py-3 text-center" style={{ fontWeight: 'bold' }}>
            <span style={{ color: "#590BB2" }}>How it Works</span>
        </h4>

         <Row className="justify-content-center align-items-center">
                <Col className="pt-4" xs={{ order: 'first', span: 12 }} md={{ order: 'first', span: 6 }}>
                    <Image src={image} fluid />
                    
                </Col>
                <Col className="pt-4" xs={{ order: 'last', span: 12 }} md={{ order: 'last', span: 6 }}>

                    {(data||[]).map((e,i)=><List key={i+e?.head} index={i+1} head={e?.head} text={e?.text} />)}

                </Col>

            </Row>
    </Container>

}