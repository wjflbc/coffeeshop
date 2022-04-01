import {Container, Row, Col} from "react-bootstrap";
import ShopListItem from "../shop-list-items/shop-list-items";

import './shop-list.css'

const ShopList = () => {


    return (
        <div className='shop-list-wrapper'>
            <Container>
                <Row>
                    <Col>
                        <ul className='shop-list'>
                            <ShopListItem />
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ShopList;