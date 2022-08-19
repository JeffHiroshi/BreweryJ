import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import BeerCard from './BeerCard';
import { selectAllBeers } from "./beersSlice";

const BeersList = () => {
    const beers = useSelector(selectAllBeers);

    return (
        <Row className='ms-auto'>
            {beers.map((beer) => {
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