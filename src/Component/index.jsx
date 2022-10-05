import React from 'react';
import './index.css'

function Card({title,border,style,children}){
    return <div className= 'card' style = {style}>
    
    <div className='card-title'>
      {title}

    </div>


    <div className='body-children'>
    {children}        
    
    </div>     
    

    </div>

}

export default Card;