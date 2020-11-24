import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom'
import {useStateValue} from '../StateProvider'
import {auth} from '../firebase'

function Header() {

    const [{basket, user}, dispatch] = useStateValue();

    const handleLogOut = () =>{
        if(user){
            auth.signOut();
        }
        
    }

    return (
        <div className='header'>
            <Link to="/">
            <img className="header_logo" src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='logo'></img>
            </Link>
           

            <div className="header_search">
                <input placeholder="Search..." className='header_searchInput' type='text'/>
                <SearchIcon className="header_searchIcon"/>
            </div>

            <div className="header_nav">
            <Link to={!user && '/login'}>
                <div onClick={handleLogOut} className="header_option">
                    <span className="header_optionLineone">Hello {user? (user.email): ('Guest')}</span>
                    <span className="header_optionLinetwo">{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
            </Link>
               
                <div className="header_option">
                    <span className="header_optionLineone">Returns</span>
                    <span className="header_optionLinetwo">& Orders</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineone">Your</span>
                    <span className="header_optionLinetwo">Prime</span>
                </div>

                <Link to="/checkout">
                <div className='header_optionBasket'>
                    
                    <ShoppingBasketIcon/>
                    <span className="header_optionLinetwo header_basketCount">{basket?.length}</span>
                </div>
                </Link>
                
            </div>
        </div>
    )
}

export default Header 