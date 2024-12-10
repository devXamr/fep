import waffle_mob from './assets/assets-cafe/images/image-waffle-mobile.jpg'
import cart from './assets/assets-cafe/images/icon-add-to-cart.svg'
import {useEffect, useState} from "react";
import increment from './assets/assets-cafe/images/icon-increment-quantity.svg'
import decrement from './assets/assets-cafe/images/icon-decrement-quantity.svg'
import SingleMenuItem from "./cafe-components/SingleMenuItem.jsx";
import empty from './assets/assets-cafe/images/illustration-empty-cart.svg'
import cancel from './assets/assets-cafe/images/icon-remove-item.svg'
import neutral from './assets/assets-cafe/images/icon-carbon-neutral.svg'
import waffle_thumb from './assets/assets-cafe/images/image-waffle-thumbnail.jpg'
import done from './assets/assets-cafe/images/icon-order-confirmed.svg'


import {data} from "./data.js";

import creme from './assets/assets-cafe/images/image-creme-brulee-mobile.jpg'
import baklava from './assets/assets-cafe/images/image-baklava-mobile.jpg'
import brownie from './assets/assets-cafe/images/image-brownie-mobile.jpg'
import cake from './assets/assets-cafe/images/image-cake-mobile.jpg'
import macaron from './assets/assets-cafe/images/image-macaron-mobile.jpg'
import meringue from './assets/assets-cafe/images/image-meringue-mobile.jpg'
import cotta from './assets/assets-cafe/images/image-panna-cotta-mobile.jpg'
import tiramisu from './assets/assets-cafe/images/image-tiramisu-mobile.jpg'
import SingleCartItem from "./cafe-components/SingleCartItem.jsx";
import FinishPage from "./cafe-components/FinishPage.jsx";
import ScrollToBottom from "react-scroll-to-bottom";
import ScrollToEnd from "react-scroll-to-bottom";

export default function Cafe(){

    const [cart, setCart] = useState(data)
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalQty, setTotalQty] = useState(0)

    const [confirmClicked, setConfirmClicked] = useState(false)

    useEffect(() => {
        console.log(cart)
        let total = 0
        let totalQty = 0

        cart.forEach((obj) => {total += obj.qty * obj.price})
        cart.forEach((obj) => {totalQty += obj.qty})

        setTotalPrice(total)
        setTotalQty(totalQty)


    }, [cart]);

    function addToCart(name){
        let arr = [...cart]
        console.log('before', arr)
        const index = arr.findIndex(obj => obj.name === name)
        console.log(index)
        arr[index].qty = arr[index].qty + 1
        console.log('q now: ', arr[index].qty)
        console.log('after', arr)
        setCart(arr)

    }

    function removeFromCart(name){
        let arr = [...cart]
        console.log('before', arr)
        const index = arr.findIndex(obj => obj.name === name)
        console.log(index)
        arr[index].qty = arr[index].qty - 1
        console.log('q now: ', arr[index].qty)
        console.log('after', arr)
        setCart(arr)

    }

    function deleterFunc(name){
        let arr = [...cart]
        console.log('before', arr)
        const index = arr.findIndex(obj => obj.name === name)
        console.log(index)
        arr[index].qty = 0
        console.log('q now: ', arr[index].qty)
        console.log('after', arr)
        setCart(arr)

    }

    function newOrder(){
        let arr = [...cart]

        arr.forEach(obj => obj.qty = 0)


        setCart(arr)
        setConfirmClicked(false)
    }



    return <div className='lg:flex mx-5 lg:px-28 mt-7 mb-5 lg:mt-0'>

        <div className={`${confirmClicked && 'overflow-hidden fixed lg:mr-16 lg:pl-5 lg:pr-24'}`}>

            <div className='lg:flex lg:mt-14'>

                <div className='lg:w-3/4 pr-6'>
                <div className='font-black text-5xl text-left mb-7'>Desserts</div>
                <div className='lg:flex lg:flex-wrap'>
                    <SingleMenuItem category='Waffle' name='Waffle with Berries' image={waffle_mob} price='6.50'
                                    addFunc={addToCart} subFunc={removeFromCart} count={cart[0].qty}/>
                    <SingleMenuItem category='Creme Brulee' name='Vanilla Bean Creme Brulee' image={creme} price='7.00'
                                    addFunc={addToCart} subFunc={removeFromCart} count={cart[1].qty}/>
                    <SingleMenuItem category='Macaron' name='Macaron Mix of Five' image={macaron} price='8.00'
                                    addFunc={addToCart} subFunc={removeFromCart} count={cart[2].qty}/>
                    <SingleMenuItem category='Tiramisu' name='Classic Tiramisu' image={tiramisu} price='5.50'
                                    addFunc={addToCart} subFunc={removeFromCart} count={cart[3].qty}/>
                    <SingleMenuItem category='Baklava' name='Pistachio Baklava' image={baklava} price='4.00'
                                    addFunc={addToCart} subFunc={removeFromCart} count={cart[4].qty}/>
                    <SingleMenuItem category='Pie' name='Lemon Meringue Pie' image={meringue} price='5.00'
                                    addFunc={addToCart} subFunc={removeFromCart} count={cart[5].qty}/>
                    <SingleMenuItem category='Cake' name='Red Velvet Cake' image={cake} price='4.50' addFunc={addToCart}
                                    subFunc={removeFromCart} count={cart[6].qty}/>
                    <SingleMenuItem category='Brownie' name='Salted Caramel Brownie' image={brownie} price='5.50'
                                    addFunc={addToCart} subFunc={removeFromCart} count={cart[7].qty}/>
                    <SingleMenuItem category='Panna Cotta' name='Vanilla Panna Cotta' image={cotta} price='6.50'
                                    addFunc={addToCart} subFunc={removeFromCart} count={cart[8].qty}/>
                </div>
            </div>
                <div className='rounded-lg bg-white px-6 py-9 lg:w-1/4 lg:h-max'>
                    <div className='text-left font-bold text-2xl mb-5'>Your Cart ({totalQty})</div>
                    {cart.filter(i => i.qty > 0).length === 0 && <div><img src={empty} className='mx-auto mb-3'/>
                        <div className='text-center'>Your added items will appear here</div>
                    </div>}

                    {cart.filter(i => i.qty > 0).map(e => <SingleCartItem rate={e.price} itemName={e.name}
                                                                          quantity={e.qty}
                                                                          totalItemPrice={e.price * e.qty}
                                                                          delFunc={deleterFunc}/>)}


                    {totalQty > 0 && <div>
                        <div className='flex justify-between mb-6'>
                            <div className='text-xl mt-2 font-light'>Order Total</div>
                            <div className='text-3xl font-bold'>${totalPrice}</div>
                        </div>
                        <div className='flex bg-amber-50 justify-center text-center px-3 py-4 rounded-md mb-5'>
                            <img src={neutral}/>
                            <div className='ml-2'>This is a <span className='font-bold'>carbon-neutral</span> delivery
                            </div>
                        </div>
                        <div className='bg-amber-800 text-white text-xl py-4 px-4 rounded-full text-center hover:cursor-pointer'
                             onClick={() => setConfirmClicked(true)}>Confirm Order
                        </div>
                    </div>}

                </div>
            </div>
        </div>


        {confirmClicked && <div className='inset-0 fixed bg-black bg-opacity-30'>

            <div className='bg-white mt-24 h-full rounded-t-xl z-30 lg:w-1/3 lg:mx-auto lg:h-max lg:pb-10 lg:rounded-b-xl'>
                <img src={done} className='pl-6 pb-4 pt-7'/>
                <div className='text-left font-bold text-5xl pl-6 pb-3'>Order <br/>Confirmed</div>
                <div className='pl-6 text-left font-light mb-5'>We hope you enjoy your food!</div>

                <FinishPage allInfo={cart} total={totalPrice}/>

                <div className='bg-amber-800 text-white text-xl py-4 px-4 rounded-full mx-6 mt-8 text-center hover:cursor-pointer' onClick={newOrder}>Start New Order</div>
            </div>

        </div>}


    </div>
}