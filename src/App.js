import { Container , Button } from 'react-bootstrap';
import { Header } from "./components/Header"
import { CodingOne } from "./components/CodingOne"
import { WhyCoding } from "./components/WhyCoding"
import { LearningPath } from "./components/LearningPath"
import { BookNow } from "./components/BookNow"
import { TimeLine } from "./components/TimeLine"
import { HowItWorks } from "./components/HowItWorks"


import './App.css';


function App() {
  return <>
    <Header />
    <Container fluid style={{padding:0,margin:0,paddingTop : 50,paddingBottom:20}}>
    
      <CodingOne />
      <WhyCoding />
      <LearningPath />
      <BookNow />
      <TimeLine />
      <HowItWorks />
      <BookNow 
      col1 = {{
        md : 3,
        xs : 2
      }}
      col3 = {{
        md : 3,
        xs : 2
      }}
      children={
        <>
        <div className="pb-3" style={{color:"#FFFFFF",fontSize:18,fontWeight:600}}>Book a free trial Class</div>
          <Button size="sm" className="px-4" style={{background:"#E91E63",color:"#FFFFFF",border:'none'}}>Book Now</Button>
        </>
      } />


    </Container>


  </>
}

export default App;
