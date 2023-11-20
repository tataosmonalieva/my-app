import React from "react";
import MyButton from "./MyButtons";
import Image from './Assets/rectangle-39.png'


const Card = () => {
    return (
        <div>
            <img src={Image} alt=""/>
            <MyButton/>
            <input type="text"/>
        </div>
)
}
export default Card;
