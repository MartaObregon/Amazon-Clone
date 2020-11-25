import React from 'react'
import './CheckoutProduct.css'
import StarIcon from '@material-ui/icons/Star'
import {useStateValue} from '../StateProvider'
function CheckoutProduct({id, image, title, price, rating, hideButton}) {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image} alt=""/>
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    <strong>{price}</strong>
                    <small>EUR</small>
                </p>
                <div className="checkoutProduct_rating">
                {Array(rating).fill().map(()=>(
                    <StarIcon style={{color:'#f0c14b'}}/>
                ))}
                </div>
                {!hideButton && (<button onClick={removeFromBasket}>Remove from basket</button> )}
                
            </div>
        </div>
    )
}

export default CheckoutProduct
