import { useState } from "react";

function Carousel({images}) {
    const [index,setIndex] = useState(0)


    function goRight() {
        setIndex((index+1)%4)
    }

    function goLeft() {
        if(index==0) {setIndex((images.length-1))}
        else 
        setIndex((index-1)%4)
        
    }
    
    
    return (
        <div>
        <button onClick={goLeft}> esquerda </button>
        <img src={images[index]} alt=""/>
        <button onClick={goRight}> direita </button>
        </div>
    )
}

export default Carousel;