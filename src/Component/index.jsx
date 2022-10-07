import React from 'react';
import './index.css'
//import img1 from './Component/child.png'

function Card({title,border,style,children}){
    return <div className= 'card' style = {style}>
    
    <div className='card-title'>
      <h2>{title}</h2> 

    </div>


    <div className='body-children'>
    {children}  
          
    
    </div>     
    <div className='row-two'>
       {/* <img src={img1} alt=''/> */}
        content of row 2

    </div>

    <div className='row-three'>
        row 3
    </div>

    </div>

}

export default Card;