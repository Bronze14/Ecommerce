import React, { Fragment } from 'react'
import '../Styles/Nav.scss'
import Avatar from '../images/image-avatar.png'
import { useSelector,useDispatch } from 'react-redux'
import { clearCart } from '../Cart/cartSlice'
import Photomini1 from '../images/image-product-1-thumbnail.jpg'

function Nav() {
  const dispatch = useDispatch()
  const  [avatar, useAvatar] = React.useState(false)
  const [visible, useVisible] = React.useState(false)
  const {amount,id} = useSelector((state)=> state.cart)
  
  function displayOptions(){
    useAvatar(item=>!item)
  }
  function displayToolBar(){
    useVisible(item=>!item)
  }
  return (
    <div className='nav'>
        
        <div className='nav--Bar' >
                <button onClick={displayToolBar} className='btn--Open' >
                
                    <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>

                
                
                </button>
                <a > 

                    <h2>sneakers</h2>
                </a>
                

                <div className='Toolbar' style={{ display: visible ? 'none' : 'block' }}>
                    
                    
                        
                        
                        
                    <svg onClick={displayToolBar} className='btn--Close--Mobile' style={{display:'none'}} width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd"/></svg>
                        
                        
                        
                   
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
                </div>
                <div className='dark--Theme--Mobile'style={{ display: visible ? 'none' : 'block' }} onClick={displayToolBar}>
                
                

                </div>
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