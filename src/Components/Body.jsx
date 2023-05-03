import React from 'react'
import Photo1 from '../images/image-product-1.jpg'
import Photo2 from '../images/image-product-2.jpg'
import Photo3 from '../images/image-product-3.jpg'
import Photo4 from '../images/image-product-4.jpg'





import Photomini1 from '../images/image-product-1-thumbnail.jpg'
import Photomini2 from '../images/image-product-2-thumbnail.jpg'
import Photomini3 from '../images/image-product-3-thumbnail.jpg'
import Photomini4 from '../images/image-product-4-thumbnail.jpg'
import { useSelector,useDispatch } from 'react-redux'
import { increaseCart } from '../Cart/cartSlice'

import '../Styles/Body.scss'




function Body() {
  const [photos, useStatePhotos] = React.useState([Photo1,Photo2,Photo3,Photo4])
  const [value, useStateValue] = React.useState(0)
  const [valueMini, useStateValueMini] = React.useState(0)
  const [dark, useStateDark] = React.useState(false)
  const [number, useStateNumber] = React.useState(0)
  const dispatch = useDispatch()
  const {amount,id} = useSelector((state)=> state.cart)
  function handleChange(){
    useStateDark(item=>!item)
    useStateValueMini(item=>item=value)
  }
  function changeValueMinus(){
    if(number>0){
        useStateNumber(item=> item-1)


    }

  }
  function changeValuePlus(){
    useStateNumber(item=> item+1)
  }
  function firstPhoto(){
    useStateValue(item=>item=0)
  }
  function secondPhoto(){
    useStateValue(item=>item=1)
  }
  function thirdPhoto(){
    useStateValue(item=>item=2)
  }
  function fourthPhoto(){
    useStateValue(item=>item=3)
  }
  function firstPhotoMini(){
    useStateValueMini(item=>item=0)
  }
  function secondPhotoMini(){
    useStateValueMini(item=>item=1)
  }
  function thirdPhotoMini(){
    useStateValueMini(item=>item=2)
  }
  function fourthPhotoMini(){
    useStateValueMini(item=>item=3)
  }
  function myCustomFunction(){
    useStateNumber(item=>item=0)
  }
  function increaseValue(){
    if(valueMini>=3){
        useStateValueMini(item=>item=0)
    }
    else{
        useStateValueMini(item=>item+1)
    }
  }
  function decreaseValue(){
    if(valueMini==0){
        useStateValueMini(item=>item=3)
    }
    else{
        useStateValueMini(item=>item-1)
    }
  }
  function increaseValueMobile(){
    if(value>=3){
      useStateValue(item=>item=0)
    }
    else{
      useStateValue(item=>item+1)
    }
  }
  function decreaseValueMobile(){
    if(value==0){
        useStateValue(item=>item=3)
    }
    else{
        useStateValue(item=>item-1)
    }
  }
  return (
    <section className='body--Cart'>
        <div className='image--Mobile'>
            <button onClick={decreaseValueMobile} className='left--Mobile' style={{display:'none'}}>
                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
            <button onClick={increaseValueMobile} className='right--Mobile' style={{display:'none'}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
            <img src={photos[value]} onClick={handleChange}/>
            <div className='photo--Bar'>
                <img src={Photomini1} onClick={firstPhoto}/>
                <img src={Photomini2} onClick={secondPhoto}/>
                <img src={Photomini3} onClick={thirdPhoto}/>
                <img src={Photomini4} onClick={fourthPhoto}/>
            </div>

        </div>  
        {dark && (
        <div className='photo--absolute'>
            <section>
                
                    <img src={photos[valueMini]} className='main--Photo--Absolute' />
                    <button className='svg--Left' onClick={decreaseValue}>
                        <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>


                    </button>
                    <button className='svg--Right' onClick={increaseValue}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>

                    </button>


                    <button onClick={handleChange} className='btn--Close'>

                        <svg width="14" height="15"   xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="white" fill-rule="evenodd"/></svg>


                    </button>
                    <div className='photo--Bar--Absolute'>
                        <img src={Photomini1} onClick={firstPhotoMini}/>
                        <img src={Photomini2} onClick={secondPhotoMini}/>
                        <img src={Photomini3} onClick={thirdPhotoMini}/>
                        <img src={Photomini4} onClick={fourthPhotoMini}/>
                    </div>
            </section>
            <div className='dark--Theme' onClick={handleChange}>
                
                

            </div>
            
        </div>
        )}
        <div className='body--Description'>
            <h5>SNEKAER COMPANY</h5>
            <h1>Fall Limited Edition Sneakers</h1>
            <h4>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</h4>
            <span>
                <h3>$125.00</h3>
                <h4>50%</h4>
                <h5><del>$250.00</del></h5>
            </span>
            <div className='body--Btn'> 
                <button className='minus--Btn' onClick={changeValueMinus}>-</button>
                <h4 class>{number}</h4>
                <button className='plus--Btn' onClick={changeValuePlus}>+</button>
                <button className='add--Btn' onClick={()=>{dispatch(increaseCart(number)); myCustomFunction();}}>
                    <svg  width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="white" fill-rule="nonzero"/>
                    </svg>
                    <h4>Add to cart</h4>   
                </button>
            </div>

        </div>

    </section>
  )
}

export default Body