import './ClickablePicture.css';
import {useState} from 'react';

function ClickablePicture({img,imgClicked}){
const [src,setSrc] = useState('maxence.png');

function handleClick(e){
    if(src===img) setSrc(imgClicked)
    else setSrc(img);
}

    return(
        <div className='ClickablePicture'>
            <img src={src} alt="" onClick={handleClick}/>
        </div>
    )
}

export default ClickablePicture;
