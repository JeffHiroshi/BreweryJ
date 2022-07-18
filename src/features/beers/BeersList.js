import { BEERS } from "../../app/shared/BEERS";
import { Col, Row } from 'reactstrap';
import BeerCard from './BeerCard';

const BeersList = () => {
    return (
        <Row className='ms-auto'>
            {BEERS.map((beer) => {
                return (
                <Col 
                    md='5'
                    className='m-4'
                    key={beer.id}
                >
                    <BeerCard beer={beer} />
                </Col>
                );
            })}
        </Row>
    )
}

export default BeersList;