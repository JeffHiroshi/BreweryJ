import { Offcanvas, OffcanvasHeader, OffcanvasBody, Container, Row, Col, CloseButton } from "reactstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utils/formatCurrency";
import { CartItem } from "./CartItem";
import { BEERS } from "../app/shared/BEERS";

export function ShoppingCart({ isOpen }) {
    const { closeCart, cartItems } = useShoppingCart();
    return (
        
    <Offcanvas show={isOpen} placement='end' isOpen={isOpen} onHide={closeCart}>
        <OffcanvasHeader onClick={closeCart}>
            Cart
            <CloseButton />
        </OffcanvasHeader>
        <OffcanvasBody>
            <Container>
                <Row>
                    <Col>
                        {cartItems.map(beer => (
                            <CartItem key={beer.id} {...beer} />
                        ))}
                    </Col>
                </Row>
                <Row>
                    <Col className='ms-auto fw-bold fs-5'>
                        Total {formatCurrency(cartItems.reduce((total, cartItem) => {
                            const beer = BEERS.find(b => b.id === cartItem.id)
                            return total + (beer?.price || 0) * cartItem.quantity
                        }, 0)
                        )}
                    </Col>
                </Row>
            </Container>
        </OffcanvasBody>
    </Offcanvas>
    )
}