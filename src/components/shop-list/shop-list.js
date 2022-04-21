import {Container, Row, Col} from "react-bootstrap";
import ShopListItem from "../shop-list-items/shop-list-items";

import './shop-list.css'

const ShopList = ({data}) => {

    return (
        <div className='shop-list-wrapper'>
            <Container>
                <Row>
                    <Col>
                        <ul className='shop-list'>
                            <ShopListItem
                            data={data}/>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ShopList;