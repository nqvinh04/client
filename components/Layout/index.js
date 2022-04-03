import React from 'react';
import Header from '../Header/header';
import {Row, Col, Container} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './layout.css';
const Layout = (props) => {

    return (
        <>
            <Header />
            {
                props.sidebar ?
                <Container fluid>
                    <Row>
                        <Col md={2} className="sidebar">
                            <ul>
                                <li><NavLink to={`/`}>Home</NavLink></li>
                                <li><NavLink to={`/categories`}>Category</NavLink></li>
                                <li><NavLink to={`/products`}>Product</NavLink></li> 
                                <li><NavLink to={`/orders`}>Order</NavLink></li>
                            </ul>
                        </Col>
                        <Col md={10} style={{ marginLeft: 'auto'}}>
                            {props.children}
                        </Col>                        
                    </Row>
                </Container>
                :
                props.children
            }
        </>
    )
}

export default Layout;