import React from 'react';
import Menu from './Menu';
import About from './About';
import Contact from './Contact';
import Location from './Location';

class Content extends React.Component {
render() {
    return (
        <div className="container">
            <Location></Location>
            <Menu></Menu>
            <About></About>
            <Contact></Contact>
        </div>
    );
}
}

export default Content;
