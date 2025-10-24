import React , {useContext, useRef} from 'react';
import FruitContext from './FruitContext';

const A = ()=>{

const {setFruit} = useContext(FruitContext);
let inputFruit = useRef(null);
function handler1(e)
{
     setFruit(inputFruit.current.value); // inserting data into global scope
}
return(
    <div>
        Enter Fruit Name 
        <input type='text' placeholder='Enter Fruit Name' ref={inputFruit}/>
        <button onClick={handler1}>Add Fruit</button> 
    </div>
)
};
export default A;