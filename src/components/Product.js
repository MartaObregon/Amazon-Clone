import React from 'react'
import './Product.css'
import StarIcon from '@material-ui/icons/Star'
import {useStateValue} from '../StateProvider'

function Product({title, image, price, rating, id}) {



    const [{basket}, dispatch] = useStateValue();

    console.log('this is the basket >>>', basket)

    const addToBasket =() =>{
        //dispatch the action into the datalayer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price:price, 
                rating: rating,
            }
        })
    }
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>EUR</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                {Array(rating).fill().map((_,id)=>(
                    <StarIcon style={{color:'#f0c14b'}}/>
                ))}
                    
                </div>
            </div>
            <img src={image}></img>

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
