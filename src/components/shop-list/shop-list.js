import {Container, Row, Col} from "react-bootstrap";
import ShopListItem from "../shop-list-items/shop-list-items";

import './shop-list.css'

const ShopList = ({data}) => {

    const elements = data.map(item => {
        const{id, ...itemProps} = item
        return (
            <ShopListItem key={id} {...itemProps}/>
        )
    })

    return (
        <div className='shop-list-wrapper'>
            <Container>
                <Row>
                    <Col>
                        <ul className='shop-list'>
                            {elements}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ShopList;