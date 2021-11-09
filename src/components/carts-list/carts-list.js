import {Container, Row, Col} from "react-bootstrap";
import CartsListItem from "../carts-list-item/carts-list-item";

import './carts-list.css'

const CartsList = () => {
    return (
        <div className='wrapper-carts-list'>
            <Container>
                <Row>
                    <Col>
                        <h2 className='text-carts-list'>Our best</h2>
                        <ul>
                            <CartsListItem/>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CartsList;