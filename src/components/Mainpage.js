import React from 'react';
import Nav from './Nav';
import Header from './Header'
import Footer from './Footer';
import Content from './Content';

class Mainpage extends React.Component {
render() {
    return (
        <div>
            <Header></Header>
            <Nav></Nav>
            <Content></Content>
            <Footer></Footer>
        </div>
    );
}
}

export default Mainpage;
