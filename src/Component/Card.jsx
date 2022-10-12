import './card.css'
import { FaBeer } from 'react-icons/fa'
import {MdSmokeFree, MdCleanHands} from 'react-icons/md'

const Card=({title,children,border,style}) =>{
    return(<>
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
            <div className='subSecondClass'>
            <h2>Obesity is linked to more chronic conditions than:</h2>
            <div className="dangerClass">
                {/* include images later */}
                <div>
                    <MdSmokeFree />
                    <h5>Smoking</h5>
                </div>
                <div> 
                    <MdCleanHands />
                    <h5>Poverty</h5>
                </div>
                <div>
                <FaBeer />
                    <h5>Drinking</h5>
                </div>
            </div>
            </div>
            <p>increasing the risk of more than <b>20 preventable diseases</b>, including sleep apnea, heart disease, asthma, Type 2 diabetes, high blood pressure</p>
        </div>
        <div className="ThirdClass">
            <h2>checking third class</h2>
        </div>
    </div>
</>
)
}


export default Card;