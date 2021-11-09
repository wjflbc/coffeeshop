
import {Container, Row, Col, Nav } from "react-bootstrap";
import AppHeaderItem from "../app-header-item/app-header-item";

import './app-header.css';

const AppHeader = () => {
    return (
        <div className='header'>
            <Container>
                <Row>
                    <Col>
                        <Nav defaultActiveKey="/home" as="ul">
                            <AppHeaderItem/>
                        </Nav>
                        <h2 className='title'>Everything You Love About Coffee</h2>
                        <h3 className='subtitle'>We makes every day full of energy and taste</h3>
                        <h3 className='subtitle-second'>Want to try our beans?</h3>
                        <button className='btn-header'>More</button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AppHeader;