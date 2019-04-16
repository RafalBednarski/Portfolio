import React from 'react';
import {Link} from 'react-router-dom';//providing clicable text that can navigate to other cmp in App.
import '../index.css';

const Header = () => {

    return (
        <div>
            <h3 className='header'><Link to='/'>Home</Link></h3>{/*using the link import we need to use LINK tags rater that <a> tag*/}
            <h3 className='header'><Link to='/jokes'>Jokes</Link></h3>
        </div>
    )
}

export default Header;

