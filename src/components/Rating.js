import './Rating.css'

function Rating(props) {
    
    let stars = Math.round(parseFloat(props.children));

    let rating ='';

    for(let i=1;i<=5;i++){
        if(i<=stars) {
            rating+='★'
        } else {
            rating+='☆'}
    }

    return(
        <div className='rating'>
            {rating}
        </div>
    )
}

export default Rating;