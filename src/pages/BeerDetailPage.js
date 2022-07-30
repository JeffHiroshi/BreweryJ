import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectBeerById } from '../features/beers/beersSlice';
import BeerDetail from '../features/beers/BeerDetail';
import SubHeader from '../components/SubHeader';

const BeerDetailPage = () => {
    const {beerId} = useParams();
    const beer = selectBeerById(beerId);

    return (
        <Container>
            <SubHeader current={beer.name} detail={true}/>
            <Row>
                <BeerDetail beer={beer}/>
            </Row>
        </Container>
    )
};

export default BeerDetailPage;