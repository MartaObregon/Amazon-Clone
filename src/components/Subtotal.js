import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from '../StateProvider'

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    console.log(basket)
    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value)=>(
                <>
                <p>
                    Subtotal ({basket?.length} items): 
                    {
                        basket.forEach((elem)=>{
                            console.log(elem.price)
                            return <strong>0{elem.price}</strong>
                        })
                    }
                    
                    
                </p>
                <small className="subtotal_gift">
                    <input type="checkbox"/> This order contains a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={0}//subtotal of basket function get basket
            displayType={'text'}
            thousantSeparator={true}
            prefix={'EUR'}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
