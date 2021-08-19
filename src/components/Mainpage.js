import React from 'react';
import Nav from './Nav';
import Name from './Name';
import Footer from './Footer';
import Content from './Content';

class Mainpage extends React.Component {
render() {
    return (
        <div>
            <Nav></Nav>
            <Name></Name>
            <Content></Content>
            <Footer></Footer>
        </div>
    );
}
}

export default Mainpage;
