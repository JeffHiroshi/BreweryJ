import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const BeerCard = (props) => {
    return (
        <Card>
            <CardImg 
                width='100%'
                src={props.beer.image}
                alt={props.beer.name}    
            />
            <CardImgOverlay>
                <CardTitle>{props.beer.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

export default BeerCard;