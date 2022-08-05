import { Container, Col, Row } from 'reactstrap';
import SubHeader from '../components/SubHeader';

const ContactPage = () => {
    return (
        <Container>
            <SubHeader current='Contact Us'/>

            <Row className='row-content align-items-center'>
                <Col sm='4'>
                    <h5>Our Address</h5>
                    <address>
                    100 Brewery J Street<br />
                    Redondo Beach, CA 90278<br />
                    U.S.A.
                    </address>
                </Col>
                <Col>
                    <a 
                        role='button' 
                        class='btn btn-link' 
                        href='tel:+13105551234'
                    >
                        <i class='fa fa-phone' /> 1-310-555-1234
                    </a>
                    <br />
                    <a 
                        role='button' 
                        class='btn btn-link' href='mailto:breweryj@email.com'
                    >
                        <i class='fa fa-envelope-o'/> 
                        breweryj@email.com
                    </a>
                </Col>
            </Row>

            <Row className='row-content'>
                <Col xs='12'>
                    <h2>Send Us Your Feedback</h2>
                    <hr />
                </Col>
                <Col md='10'>
                    TBD: ContactForm
                </Col>
            </Row>
        </Container>
    );
};

export default ContactPage;