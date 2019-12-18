import React from 'react';
import './custom-button.styles.scss';
export default function CustomButton({ children, isGoogleSignIn, ...otherProps }) {
    return (
        <button className={` custom-button ${isGoogleSignIn ? 'google-sign-in' : ''}`} {...otherProps}>
            {children}
        </button>
    );
}
