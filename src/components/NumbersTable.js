import './NumbersTable.css';

function NumbersTable({limit}) {
    let array = new Array(limit).fill(null)

    return (
        <div className='number-table'>
        {array.map(function(element,index){
            return(
                <div className={(index+1)%2==0?'even':'odd'} >{index+1}
                </div>
            )
        })}
        </div>
    )
}

export default NumbersTable;