import React from 'react';
import Header from '../Header/header';
import {Container} from 'react-bootstrap';


const Layout = (props) => {
    // console.log('props_Layout', props)
    return (
        <>
            <Header />
            <Container>
                {props.children}
            </Container>
        </>
    )
}

export default Layout;