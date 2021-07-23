import { Container, Card} from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { ScreenSize } from "./ScreenSize"

import Cpp from "./../img/Cpp.svg"
import AdvanceCoding from "./../img/AdvanceCoding.svg"
import WebAppDevelopment from "./../img/WebAppDevelopment.svg"
import AndroidAppDevelopment from "./../img/AndroidAppDevelopment.svg"


export function LearningPath(){
    const data=[
        {img:Cpp,text:"Introduction to Coding"},
        {img:AdvanceCoding,text:"Advance Coding"},
        {img:WebAppDevelopment,text:"Web App Development "},
        {img:AndroidAppDevelopment,text:"Android App Development"},
    ]
    
    const Scard=({img,text})=><Card style={{ width: '14rem', boxShadow:"0 4px 4px rgba(0, 0, 0, 0.25)" }} className="text-center">
    <Card.Img variant="top" src={img} />
    <Card.Body className="px-0 pt-0 pb-5">
      <Card.Title style={{color:"#7E57C2",fontSize:16}}>{text}</Card.Title>
    </Card.Body>
    <Card.Footer style={{backgroundColor:'transparent'}}>
        <Card.Link href="#" style={{
            color : "#1444EF",
            textDecoration : 'none',
            fontWeight : 'bold'
        }}>Know More</Card.Link>
    </Card.Footer>
  </Card>
    const size = ScreenSize()
    return <Container fluid className="pt-4">
           
            <Carousel 
            style={{alignItmes:'center'}}
            centerMode={true}
            centerSlidePercentage={size.screen==='s' ? 50 : size.screen==='m' ? 30 : size.screen==='l' ? 40 : size.width > 500 && size.width < 600 ? 70 : size.screen==='xs' ? 100 : 25}
            stopOnHover={true}
            autoPlay={false} 
            showStatus={false}
            showThumbs={false}
            showArrows={false}
            showIndicators={true}
            infiniteLoop={false}
            emulateTouch={true}
            swipeScrollTolerance={1}
             >
                {
                    data.map((v,i)=>{
                        return <div key={i+v} className="d-flex justify-content-center align-items-center">
                                   <Scard img={v.img} text={v.text}/>
                              </div>
                    })
                }
            </Carousel>
    </Container>
}