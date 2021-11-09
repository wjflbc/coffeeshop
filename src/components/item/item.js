import {Container, Row, Col} from "react-bootstrap";

import item from './img/Mask Group.jpg';

import './item.css';

const Item = () => {
    return (
        <div className='item-wrapper'>
            <Container>
                <Row>
                    <Col md={{span: 5, offset: 1}}>
                        <img src={item} alt='picture with coffee'/>
                    </Col>
                    <Col md={5}>
                        <div className='item-title'>About it</div>
                        <div className='item-country'>Country: Brasil</div>
                        <div className='item-subtitle'>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                        <div className='item-price'>Price:  16.99$</div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Item;