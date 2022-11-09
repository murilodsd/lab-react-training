import "./IdCard.css"

function IdCard(props) {
    return(
        <div className="id-card-container">
            <img src={props.picture} alt=""/>
            <div>
                <p>First Name: <span>{props.firstName}</span></p>
                <p>Last Name: <span>{props.lastName}</span></p>
                <p>Gender: <span>{props.gender}</span></p>
                <p>Height: <span>{props.height}</span></p>
                <p>Birth: <span>{props.birth}</span></p>
            </div>
        </div>
    )
};

export default IdCard;