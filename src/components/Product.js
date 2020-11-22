import React from 'react'
import './Product.css'
import StarIcon from '@material-ui/icons/Star'

function Product() {
    return (
        <div className="product">
            <div className="product_info">
                <p>Loungefly Star Wars Baby Yoda en cuna The Mandalorian Womens doble correa hombro bolso bolso</p>
                <p className="product_price">
                    <small>EUR</small>
                    <strong>73.31</strong>
                </p>
                <div className="product_rating">
                    <StarIcon style={{color:'yellow'}}/>
                    <StarIcon style={{color:'yellow'}}/>
                    <StarIcon style={{color:'yellow'}}/>
                    <StarIcon style={{color:'yellow'}}/>
                    <StarIcon style={{color:'yellow'}}/>
                </div>
            </div>
            <img src="https://m.media-amazon.com/images/I/71kbhZBe3TL._AC_UL320_.jpg"></img>

            <button style={{color:'red'}}>Add to basket</button>
        </div>
    )
}

export default Product
