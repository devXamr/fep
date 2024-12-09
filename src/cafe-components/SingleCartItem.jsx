import cancel from "../assets/assets-cafe/images/icon-remove-item.svg";

export default function SingleCartItem({itemName, rate, totalItemPrice, quantity, delFunc}) {
    return <div className='flex justify-between border-b pb-3'>
        <div>
            <div className='text-left font-bold mb-1'>{itemName}</div>

            <div className='flex'>
                <div className='mr-4 text-[#87635a] font-bold'>{quantity}x</div>
                <div className='mr-3 font-light'>@${rate}</div>
                <div className='mr-2 font-bold'>${totalItemPrice}</div>
            </div>
        </div>
        <img src={cancel} className='border-2 rounded-full mb-4 mt-3 px-1.5 py-1.5 text-[#87635a] border-[#87635a]' onClick={() => delFunc(itemName)}/>

    </div>
}