import './DriverCard.css';
import Rating from './Rating';

function DriverCard(props) {
  return (
    <div className="driver-card">
      <div className="drivers-info">
        <img src={props.img} alt="" />
        <div>
            <h1>{props.name}</h1>
            <Rating className="driver-rating">{props.rating}</Rating>
            <p>{props.car.model} - {props.car.licensePlate}</p>
        </div>
      </div>
    </div>
  );
}

export default DriverCard;
