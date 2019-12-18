import React from 'react';
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from "../../assets/crown.svg";
import './header.styles.scss';

import { auth } from '../../firebase/firebase.util'

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>

        <div className='options'>
            <Link className='option' to='shop'>
                SHOP
            </Link>

            <Link className='option' to='shop'>
                CONTACT
            </Link>

            {
                currentUser ?
                    <div style={{ cursor: 'pointer' }} className='option' onClick={() => auth.signOut()}>SIGNOUT</div>
                    :
                    <Link className='option' to='/signin'>
                        SIGN IN
            </Link>
            }
        </div>
    </div>
);

export default Header;