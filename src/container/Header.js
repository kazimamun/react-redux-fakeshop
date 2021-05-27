import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Header = () => {
    return (
        <div>
            <h2><Link to='/'>Fake Shop</Link></h2>
        </div>
    );
};

export default Header;