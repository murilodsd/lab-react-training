import './Random.css'

function Random(props) {
    let randomNumber = Math.round(Math.random()*props.max + props.min);

    return(
        <div className='random-number'>
        <h1>Random value between {props.min} and {props.max} =&gt; {randomNumber}</h1>
        </div>
    )
};

export default Random;