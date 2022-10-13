import './card.css'
import { FaBeer,FaChild} from 'react-icons/fa'
import {MdSmokeFree, MdCleanHands,MdSettingsRemote} from 'react-icons/md'
import{CgBoy} from 'react-icons/cg'
import {GiMasonJar} from 'react-icons/gi'
import{AiOutlineWarning} from 'react-icons/ai'
import{VscRemoteExplorer} from 'react-icons/vsc'

const Card=({title,children,border,style}) =>{
    return(<>
    <div className='MainClass'>
        <div className='Title'>
            
            <h2> <FaChild />Obesity</h2>
            <h4>Child statistics</h4>
        </div>
        <div className='FirstClass'>
            <div className='subFirstClass'>
            <div className='firstOne'>
                <div className="icons-one-3">
                <h2><CgBoy /><CgBoy /><CgBoy /></h2>
                </div>
                <h3>1 IN 3</h3>
                <p >
                    <h5>children and adoloscents</h5>
                    <h4>Are obese or overweight</h4>
                    <h5>and almost</h5> None<h5> meet excercise requirements </h5>
                    
                </p>
            </div>
            <div className="secondOne">
                <h2><GiMasonJar/>12.5 <br />Million</h2>
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
            <h2> <AiOutlineWarning />Risk Factors</h2>
            <div className="subSecondClass">
             <div className="leftSubThree">
            <p>
                Children in their early ages who are obese and have high triglycerides
            </p>
              </div>  
              <div className="rightSubThree">
                Children who are overweight from age of 7 to 13 may develop HEART DISEASES as early as age 25  
              </div>   
            </div>
        </div>
        <div className="fourthClass">
            <div className="subFourth">
                    <h3>FRENCH FRIES</h3><br></br>
                <div className="fourthLeft">
                    <p>
                        the most common vegetable children eat
                    </p>
                </div>
                <div className="fourthRight">
                    <h3>JUICE</h3>
                    <p>
                        (which may lack the most important fibre found in whole fruit makes up)<b></b>
                        <h3>40%</h3>
                        of a childs daily fruit intake
                    </p>
                </div>
            </div>
        </div>
        <div className="fifthClass">
            <div className="fifthLeft">
            <h2>40-50% of toddlers   </h2>
            <h3>watch more telivision than recomended</h3>
            </div>
            <div className="fifthRight">
            <h1><VscRemoteExplorer /> </h1>
            <h2> <MdSettingsRemote/></h2>               
            </div>       
        </div>
        <div className="sixthClass">
            <div className="sixLeft">
            <h2>Nearly 1/2 of all preschoolers</h2>
            <h4>Do not get enough physical activity</h4>
            <div className="sixRight">
                
            </div>
            </div>
        </div>
    </div>
</>
)
}


export default Card;