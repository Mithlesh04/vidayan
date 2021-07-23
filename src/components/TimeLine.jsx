import { Container, Image } from 'react-bootstrap';
import { Stepper } from 'react-form-stepper';
import Step1 from "./../img/Step1.svg"
import Step2 from "./../img/Step2.svg"
import Step3 from "./../img/Step3.svg"
import Step4 from "./../img/Step4.svg"

export function TimeLine() {

    return <Container className="mt-4 py-2 pb-5" fluid style={{ background: "#EAE7FB", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
        <div className="py-2 pb-4 text-center" style={{ color: "#590BB2", fontWeight: 700 }}>Learning Path</div>
        <Stepper
            steps={[
                { label: 'Start Today', children: <Image src={Step1} fluid /> },
                { label: 'Learner', children: <Image src={Step2} fluid /> },
                { label: 'Entrepreneur', children: <Image src={Step3} fluid /> },
                {label: 'Maker', children: <Image src={Step4} fluid />}

            ]}
            activeStep={4}
            connectorStyleConfig={{ borderTopStyle: 'dotted', borderColor: "#37336" }}
        />
    </Container>

}