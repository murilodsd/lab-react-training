import { useState } from "react";
import diceEmpty from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'
import './Dice.css'

function Dice(){
    
    const srcList = {1: dice1,
    2: dice2,
    3: dice3,
    4: dice4,
    5: dice5,
    6: dice6,
    }
    
    
    const [src,setSrc] = useState(diceEmpty);

    function handleClick(){
        let randomNumber = Math.ceil(Math.random()*6);
        setSrc(diceEmpty);
        setTimeout(function(){
            setSrc(srcList[randomNumber])
        },1000)
        
    }
    
    
    return(
        <div className="dice">
            <img src={src} alt="" onClick={handleClick}/>
        </div>
    )
}

export default Dice;