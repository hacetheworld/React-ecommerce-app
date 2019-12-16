import React from 'react'
import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>

            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>HATS</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            {/* Menu Item End Here */}

            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>JACKETS</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            {/* Menu Item End Here */}


            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>SNEAKERS</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            {/* Menu Item End Here */}


            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>WOMENS</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            {/* Menu Item End Here */}


            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>MEN'S</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            {/* Menu Item End Here */}
        </div>
    </div>
)



export default HomePage;