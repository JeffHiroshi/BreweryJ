import { Card, CardBody, CardImg, CardTitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/formatCurrency';
import { useShoppingCart } from '../../context/ShoppingCartContext';

const BeerCard = ({ beer }) => {
    const { id, image, name, price } = beer
    const { 
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart
     } = useShoppingCart()
    const quantity = getItemQuantity(id)

    return (
        //<Link to={`${id}`}>
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
                    <div className='mt-auto'>
                        {quantity === 0 ? (
                            <Button color='primary' className='w-100' onClick={() => increaseCartQuantity(id)}>+ Add To Cart
                            </Button>
                        ) : (
                        <div 
                            className='d-flex align-items-center flex-column' style={{ gap: '.5rem'}}
                        >
                            <div 
                                className='d-flex align-items-center justify-content-center' style={{ gap: '.5rem'}}
                            >
                                <Button color='primary' onClick={() => decreaseCartQuantity(id)}>-</Button>
                                <div>
                                    <span className='fs-3'>{quantity}</span> in cart
                                </div>
                                <Button color='primary' onClick={() => increaseCartQuantity(id)}>+</Button>
                            </div>
                            <Button color='danger' size='sm'
                            onClick={() => removeFromCart(id)}>Remove</Button>
                        </div>)}
                    </div>
                </CardBody>
            </Card>
        //</Link>
    );
}

export default BeerCard;