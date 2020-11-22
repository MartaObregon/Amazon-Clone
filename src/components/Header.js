import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className='header'>
        
            <img className="header_logo" src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='logo'></img>

            <div className="header_search">
                <input placeholder="Search..." className='header_searchInput' type='text'/>
                <SearchIcon className="header_searchIcon"/>
            </div>

            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionLineone">Hello Guest</span>
                    <span className="header_optionLinetwo">Sign in</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineone">Returns</span>
                    <span className="header_optionLinetwo">& Orders</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineone">Your</span>
                    <span className="header_optionLinetwo">Prime</span>
                </div>
                <div className='header_optionBasket'>
                    <ShoppingBasketIcon/>
                    <span className="header_optionLinetwo header_basketCount">0</span>
                </div>
            </div>
        </div>
    )
}

export default Header 