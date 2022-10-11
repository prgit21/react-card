
import Card from './Component/index'
import './App.css';
import {Box} from '@mui/material'

function App() {
  return (
    
    <div className ='grey-box'style={{ margin: '50px' }}>
      
      <Card
          
          title='Obesity Childhood statistics'

          style={{ width: '45%' }}>
          
          <h2>1 in 3 </h2>
          children are at a risk of being overweight<br></br>



          subcontent 2
        </Card>
  

{/* <div className='box-model' style= {{ marginLeft: '40%', marginTop: '60px', width: '30%' }}>
    <Box color="white" bgcolor="palevioletred" p={1}>
      Obesity in children
      
    </Box>
    </div>
  */}




      </div>
  );
}

export default App;

//check fa library for icon
//positioning css
//use flex and set 50%