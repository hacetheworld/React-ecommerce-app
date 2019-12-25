import React from 'react';
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './header.styles';
import { connect } from 'react-redux'
import { auth } from '../../firebase/firebase.util'
import CartIcon from '../cart-icon/cart-icon.component'
import { createStructuredSelector } from 'reselect'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selector'
const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to='/' >
            <Logo className='logo' />
        </LogoContainer>

        <OptionsContainer>
            <OptionLink to='shop'>
                SHOP
            </OptionLink>

            <OptionLink className='option' to='shop'>
                CONTACT
            </OptionLink>

            {
                currentUser ?
                    <OptionDiv onClick={() => auth.signOut()}>SIGNOUT</OptionDiv>
                    :
                    <OptionLink className='option' to='/signin'>
                        SIGN IN
            </OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {
            !(hidden) ? (<CartDropdown />) : ('')
        }
    </HeaderContainer>
);

const mapStateToProps = (state) => createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);