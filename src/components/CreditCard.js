import './CreditCard.css'
import MasterLogo from './MasterLogo';
import VisaLogo from './VisaLogo';

let cardType = {'Master Card': <MasterLogo />,
Visa: <VisaLogo />};


function CreditCard(props) {
    return (
        <div className='credit-card' style={{backgroundColor:`${props.bgColor}`,color:`${props.color}`}}>
            <span>{cardType[props.type]}</span>
            <p className='credit-card-number'>•••• •••• •••• {props.number.substring(12,16)}</p>
            <div>
            <p className='credit-card-info'>Expires {props.expirationMonth}/{props.expirationYear}   {props.bank}</p>
            <p className='credit-card-info'>{props.owner}</p>
            </div>
        </div>
    )
}

export default CreditCard;