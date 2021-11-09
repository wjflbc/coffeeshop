import {Col, Container, Nav, Row} from "react-bootstrap";
import FooterItems from "../footer-items/footer-items";

import './footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <Row>
                    <Col>
                        <Nav className='footer-wrapper' as="ul">
                            <FooterItems/>
                        </Nav>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;