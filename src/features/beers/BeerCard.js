import { Card, CardBody, CardImg, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/formatCurrency';

const BeerCard = ({ beer }) => {
    const { id, image, name, price } = beer
    return (
        <Link to={`${id}`}>
            <Card>
                <CardImg  
                    src={image}
                    alt={name}  
                    height='500px'
                    style={{objectFit: 'cover'}}  
                />
                <CardBody className='d-flex flex-column'>
                    <CardTitle className='d-flex justify-content-between align-items-baseline'>
                        <span className='fs-2'>{name}</span>
                        <span className='ms-2 text-muted'>{formatCurrency(price)}</span>
                    </CardTitle>
                </CardBody>
            </Card>
        </Link>
    );
}

export default BeerCard;