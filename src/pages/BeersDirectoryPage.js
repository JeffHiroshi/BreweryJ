import { Container } from 'reactstrap';
import BeersList from '../features/beers/BeersList';
import SubHeader from '../components/SubHeader';

const BeersDirectoryPage = () => {
    return (
        <Container>
            <SubHeader current='Directory'/>
            <BeersList />
        </Container>
    )
};

export default BeersDirectoryPage;