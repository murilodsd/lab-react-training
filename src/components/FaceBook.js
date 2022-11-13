import { useState } from "react";
import "./FaceBook.css";

function FaceBook({firstName,lastName,image,type,country,btnClicked,displayInfo}){

    const [showInfo, setShowInfo] = useState(displayInfo)


    return(
        <div className="profile" style = {btnClicked==country?{backgroundColor:"blue"}:{ backgroundColor: 'red' }}>
        <img onClick={()=>setShowInfo(!showInfo)}  src={image} alt=""/>
            {showInfo &&
            <div>
                <p>First Name: <span>{firstName}</span></p>
                <p>Last Name: <span>{lastName}</span></p>
                <p>Country: <span>{country}</span></p>
                <p>Type: <span>{type}</span></p>
            </div>}
        </div>
    )
}

export default FaceBook;