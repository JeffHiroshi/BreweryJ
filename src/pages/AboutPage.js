import { Col, Row, Container, Card, CardBody, CardHeader } from 'reactstrap';
import SubHeader from '../components/SubHeader';

const AboutPage = () => {
    return (
        <Container>
            <SubHeader current='About Us'/>
            <Row className='row-content'>
                <Col sm='6'>
                    <h3>Our Mission</h3>
                    <p>
                    Founded in 2021, we aim to create exceptional beer for all to enjoy. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris augue neque gravida in fermentum et sollicitudin ac. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Cras adipiscing enim eu turpis. Varius morbi enim nunc faucibus a pellentesque sit. Sed arcu non odio euismod lacinia at. Posuere morbi leo urna molestie at elementum eu facilisis.
                    </p>
                </Col>
                <Col sm='6'>
                    <Card>
                        <CardHeader className='bg-primary text-white'>
                            <h3>Facts at a Glance</h3>
                        </CardHeader>
                        <CardBody>
                        <dl className='row'>
                                <dt className='col-6'>Founded</dt>
                                <dd className='col-6'>February 3, 2021</dd>
                                <dt className='col-6'>No. of Beers in 2022</dt>
                                <dd className='col-6'>15</dd>
                                <dt className='col-6'>No. of Awards</dt>
                                <dd className='col-6'>2</dd>
                                <dt className='col-6'>Employees</dt>
                                <dd className='col-6'>8</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card className='bg-light mt-3'>
                        <CardBody>
                            <blockquote className='blockquote'>
                                <p>
                                A fine beer may be judged with only one sip, but it's better to be thoroughly sure.
                                </p>
                                <footer className='blockquote-footer'>
                                    Bavarian Proverb
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutPage;