import waffle_mob from "../assets/assets-cafe/images/image-waffle-mobile.jpg";
import cart from "../assets/assets-cafe/images/icon-add-to-cart.svg";
import decrement from "../assets/assets-cafe/images/icon-decrement-quantity.svg";
import increment from "../assets/assets-cafe/images/icon-increment-quantity.svg";
import {useEffect, useState} from "react";

export default function SingleMenuItem({image, category, name, price, addFunc, subFunc, count}) {




    return <div className='mb-5'>
        <img src={image} className={`rounded-xl drop-shadow-sm ${count > 0 && 'border-2 border-[#87635a]'}`}/>
        {count === 0 && <div onClick={() => addFunc(name)}
                             className='bg-white rounded-full px-6 py-2 border border-[#87635a] w-max relative mx-auto bottom-5 flex'>
            <img src={cart}/>
            <div className='ml-2 font-medium'>Add to Cart</div>
        </div>}
        {count > 0 &&
            <div className='flex text-white bg-[#87635a] rounded-full px-3 py-2 w-max mx-auto relative bottom-5'>
                <img src={decrement} onClick={() => {

                    subFunc(name)

                }} className='border rounded-full px-1.5 py-1'/>
                <div className='ml-12 mr-12'>{count}</div>
                <img src={increment} onClick={() => {

                    addFunc(name)

                }} className='border rounded-full px-1.5 py-1'/>
            </div>}
        <div className='text-left ml-1 mb-1'>{category}</div>
        <div className='text-left ml-1 font-semibold mb-1'>{name}</div>
        <div className='text-[#87635a] font-bold text-left ml-1'>${price}</div>
    </div>
}