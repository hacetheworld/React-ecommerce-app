import React from 'react';
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from "../../assets/crown.svg";
import './header.styles.scss';
import { connect } from 'react-redux'
import { auth } from '../../firebase/firebase.util'
import CartIcon from '../cart-icon/cart-icon.component'
import { createStructuredSelector } from 'reselect'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selector'
const Header = ({ currentUser, hidden }) => (
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
            <CartIcon />
        </div>
        {
            !(hidden) ? (<CartDropdown />) : ('')
        }
    </div>
);

const mapStateToProps = (state) => createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);