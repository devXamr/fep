import thumb0 from "../assets/assets-cafe/images/image-waffle-thumbnail.jpg";
import thumb1 from "../assets/assets-cafe/images/image-creme-brulee-thumbnail.jpg";
import thumb2 from "../assets/assets-cafe/images/image-macaron-thumbnail.jpg";
import thumb3 from "../assets/assets-cafe/images/image-tiramisu-thumbnail.jpg";
import thumb4 from "../assets/assets-cafe/images/image-baklava-thumbnail.jpg";
import thumb5 from "../assets/assets-cafe/images/image-meringue-thumbnail.jpg";
import thumb6 from "../assets/assets-cafe/images/image-cake-thumbnail.jpg";
import thumb7 from "../assets/assets-cafe/images/image-brownie-thumbnail.jpg";
import thumb8 from "../assets/assets-cafe/images/image-panna-cotta-thumbnail.jpg";
import SingleFinishPageItem from "./SingleFinishPageItem.jsx";
import BasicScrollToBottom from "react-scroll-to-bottom";
import ScrollToBottom from "react-scroll-to-bottom"
import ScrollToEnd from "react-scroll-to-bottom";

export default function FinishPage({allInfo, total}) {

    return <div><ScrollToEnd>
        <div className='max-h-80 rounded-lg pb-7'>

            {allInfo[0].qty > 0 &&
                <SingleFinishPageItem name={allInfo[0].name} qty={allInfo[0].qty} rate={allInfo[0].price}
                                      itemTotal={allInfo[0].price * allInfo[0].qty} thumbnail={thumb0}/>}
            {allInfo[1].qty > 0 &&
                <SingleFinishPageItem name={allInfo[1].name} qty={allInfo[1].qty} rate={allInfo[1].price}
                                      itemTotal={allInfo[1].price * allInfo[1].qty} thumbnail={thumb1}/>}
            {allInfo[2].qty > 0 &&
                <SingleFinishPageItem name={allInfo[2].name} qty={allInfo[2].qty} rate={allInfo[2].price}
                                      itemTotal={allInfo[2].price * allInfo[2].qty} thumbnail={thumb2}/>}
            {allInfo[3].qty > 0 &&
                <SingleFinishPageItem name={allInfo[3].name} qty={allInfo[3].qty} rate={allInfo[3].price}
                                      itemTotal={allInfo[3].price * allInfo[3].qty} thumbnail={thumb3}/>}
            {allInfo[4].qty > 0 &&
                <SingleFinishPageItem name={allInfo[4].name} qty={allInfo[4].qty} rate={allInfo[4].price}
                                      itemTotal={allInfo[4].price * allInfo[4].qty} thumbnail={thumb4}/>}
            {allInfo[5].qty > 0 &&
                <SingleFinishPageItem name={allInfo[5].name} qty={allInfo[5].qty} rate={allInfo[5].price}
                                      itemTotal={allInfo[5].price * allInfo[5].qty} thumbnail={thumb5}/>}
            {allInfo[6].qty > 0 &&
                <SingleFinishPageItem name={allInfo[6].name} qty={allInfo[6].qty} rate={allInfo[6].price}
                                      itemTotal={allInfo[6].price * allInfo[6].qty} thumbnail={thumb6}/>}
            {allInfo[7].qty > 0 &&
                <SingleFinishPageItem name={allInfo[7].name} qty={allInfo[7].qty} rate={allInfo[7].price}
                                      itemTotal={allInfo[7].price * allInfo[7].qty} thumbnail={thumb7}/>}
            {allInfo[8].qty > 0 &&
                <SingleFinishPageItem name={allInfo[8].name} qty={allInfo[8].qty} rate={allInfo[8].price}
                                      itemTotal={allInfo[8].price * allInfo[8].qty} thumbnail={thumb8}/>}

        </div>
    </ScrollToEnd>
    <div className='flex justify-between mx-6 mt-7'>
        <div className='text-lg mt-1'>Order Total</div>
        <div className='text-2xl font-bold'>$ {total}</div>
    </div>
    </div>
}