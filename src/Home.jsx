import {useNavigate} from "react-router-dom";

export default function Home(){
    const navigate = useNavigate()

    function handleClick(loc){
        navigate(`/${loc}`)
    }
    return <div>
        <div onClick={() => {handleClick('bento')}}>bento</div>
        <div onClick={() => {handleClick('cafe')}}>cafe</div>

    </div>
}