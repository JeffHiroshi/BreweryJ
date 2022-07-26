import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const BeerCard = ({ beer }) => {
    const { image, name } = beer
    return (
        <Card>
            <CardImg  
                width='100%'
                src={image}
                alt={name}    
            />
            <CardImgOverlay>
                <CardTitle>{name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

export default BeerCard;