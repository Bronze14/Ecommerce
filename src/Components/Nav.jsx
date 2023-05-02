import React, { Fragment } from 'react'
import '../Styles/Nav.scss'
import Avatar from '../images/image-avatar.png'
import { useSelector,useDispatch } from 'react-redux'
import { clearCart } from '../Cart/cartSlice'
import Photomini1 from '../images/image-product-1-thumbnail.jpg'

function Nav() {
  const dispatch = useDispatch()
  const  [avatar, useAvatar] = React.useState(false)
  const {amount,id} = useSelector((state)=> state.cart)
  console.log(amount)
  function displayOptions(){
    useAvatar(item=>!item)
  }
  return (
    <div className='nav'>
        
        <div className='nav--Bar'>
                <a > 

                    <h2>sneakers</h2>
                </a>
                <a > 
                    <h4>Collections</h4>
                </a>
                <a > 
                    <h4>Man</h4>
                </a>
                <a > 
                    <h4>Women</h4>
                </a>
                <a > 
                    <h4>About</h4>
                </a>
            <div>
                <section className='numberOfProducts'>
                    <svg onClick={displayOptions} width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero"/>
                    </svg>
                    {amount > 0  ?
                        <span>
                            <h4>{amount}</h4>
                        </span>
                    :
                        null}

                </section>

                <img src={Avatar} onClick={displayOptions}/>
                {avatar ? <div className='shopping--Cart'>
                    <section>


                        <h1>Cart</h1>

                    </section>
                        
                    <div className='nav--Cart'>
                        {amount > 0  ?
                            <span>
                                
                                <div>
                                    <img src={Photomini1}/>
                                    <section>    
                                        <h5>Fall Limited Edition Sneakers</h5>
                                        <p >                                                        
                                            <h3>$125.00 x {amount}</h3>
                                            <h4>${125.00 * amount}.00</h4>
                                        </p>

                                    </section>
                                   
                                    <svg  onClick={() => {dispatch(clearCart())}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    
                                </div>
                                <button>Checkout</button>
                            </span>
                        :
                        <h3>Your cart is empty.</h3>}
                        
                        
                    </div>
                    
                    
                </div> : null}

            </div>
        </div>
    </div>
  )
}

export default Nav