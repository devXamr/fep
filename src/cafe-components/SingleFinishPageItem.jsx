import waffle_thumb from "../assets/assets-cafe/images/image-waffle-thumbnail.jpg";

export default function SingleFinishPageItem({thumbnail, name, qty, rate, itemTotal}) {
    return <div className='bg-amber-50 mx-6 flex justify-between px-6 pt-5 pb-4 border-b'>
        <div className='flex'>
            <img src={thumbnail} className='w-1/4 rounded-lg'/>
            <div className='ml-4'>
                <div className='mb-2 font-bold'>{name}</div>
                <div className='flex'>
                    <div className='mr-6 text-red-600'>{qty}x</div>
                    <div className='font-light'>@ ${rate}</div>
                </div>

            </div>
        </div>
        <div className='font-bold mt-4'>${itemTotal}</div>
    </div>

}