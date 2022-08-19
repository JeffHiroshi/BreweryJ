import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
//import DisplayCard from './DisplayCard';
import AnimatedDisplayCard from './AnimatedDisplayCard';
import { selectFeaturedBeer } from '../beers/beersSlice';
import { selectFeaturedPromotion } from '../promotions/promotionsSlice';

const DisplayList = () => {
    const items = useSelector((state) => [
        selectFeaturedBeer(state),
        selectFeaturedPromotion(state)
    ]);

    return (
        <Row>
            {items.map((item, idx) => {
                return (
                    item && (
                    <Col md className='m-1' key={idx}>
                        <AnimatedDisplayCard item={item} />
                    </Col>
                    )
                );
            })}
        </Row>
    )
};

export default DisplayList;