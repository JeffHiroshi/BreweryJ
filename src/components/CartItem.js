import { useShoppingCart } from "../context/ShoppingCartContext";
import { Container, Row, Col, Button } from "reactstrap";
import {BEERS} from '../app/shared/BEERS';
import { formatCurrency } from '../utils/formatCurrency'

export function CartItem( { id, quantity }) {
    const { removeFromCart } = useShoppingCart()
    const beer = BEERS.find(b => b.id === id)
    if (beer === null) return null

    return (
        <Container>
            <Row>
                <Col>
                    <img 
                    src={beer.image} alt={beer.name}
                    style={{ width: '125px', height: '75px', objectFit: 'cover'}}
                    />
                    <div className='ms-auto'>
                        <div>
                            {beer.name} {' '} { quantity > 1 && (
                            <span className='text-muted'
                            >
                                x{quantity}
                            </span>
                            )}
                        </div>
                        <div className='text-muted'
                        >
                            {formatCurrency(beer.price)}
                        </div>
                    </div>
                </Col>
                <Col>
                    <div>
                    {formatCurrency(beer.price * quantity)}
                    </div>
                    <Button 
                        outline color='danger' size='sm' onClick={() => removeFromCart(beer.id)}
                    >
                        &times;
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}