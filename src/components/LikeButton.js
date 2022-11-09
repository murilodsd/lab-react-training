import { useState } from 'react';
import './LikeButton.css'

function LikeButton () {
    const backgroundColors =['purple','blue','green','yellow','orange','red']
    const [text,setText] = useState('0 Likes');
    const [backgroundColor,setBackgroundColor] = useState(`${backgroundColors[Math.ceil(Math.random()*5)]}`);

    function add() {
        let count = parseInt(text.split(' ')[0]);
        setText(`${count+1} Likes`)
        setBackgroundColor(`${backgroundColors[Math.ceil(Math.random()*5)]}`)
    }

    return (
        <div className='like-button'>
            <button onClick={add} style={{backgroundColor:`${backgroundColor}`}}>{text}</button>
        </div>
    )
}

export default LikeButton;