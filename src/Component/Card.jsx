import './card.css'

const Card=({title,children,border,style}) =>{
    return(<>
    {/* <div className='card'>
        <div className='card-title'>
            <h1> {title}</h1>
        </div>
        <div className='children'>
            {children}
        </div>
    </div>    
        <div className='row-0'>
            row 0 elements
        </div>
    <div className='row3'>
            row3
    </div>
    <div className='row4'>
        row 4
    </div>
    <div>
    <div className='row-two'>
            row2
        </div>
    </div> */}

    <div className='MainClass'>
        <div className='Title'>
            <h2>Obesity</h2>
            <h4>Child statistics</h4>
        </div>
        <div className='FirstClass'>
            <div className='subFirstClass'>
            <div className='firstOne'>
                <h3>1 IN 3</h3>
            </div>
            <div className="secondOne">
                <h3>12.5 <br />Million</h3>
            </div>
            </div>
        </div>
        <div className="SecondClass">
            <h2>checking second class</h2>
            
        </div>
        <div className="ThirdClass">
            <h2>checking third class</h2>
        </div>
    </div>
</>
)
}


export default Card;