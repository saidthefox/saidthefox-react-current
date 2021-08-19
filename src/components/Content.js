import React from 'react';
import Menu from './Menu';
import About from './About';
import Contact from './Contact';
import Location from './Location';
import BottomContent from './BottomContent';

class Content extends React.Component {
render() {
    return (
        <div className="container">
            <Location></Location>
            <Menu></Menu>
            <About></About>
            <Contact></Contact>
            <BottomContent/>
        </div>
    );
}
}

export default Content;
