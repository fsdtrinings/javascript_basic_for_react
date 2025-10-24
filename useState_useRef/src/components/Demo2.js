import { useState } from 'react';
import productArr from '../data/AllProducts'

const Demo2 = ()=>{

    let [count,setCount] = useState(0);

    function doRenderProducts()
    {

        let allTableRow = [];
        
        productArr.map((p)=>{
             allTableRow.push(
                        <tr>
                            <td>{p.productName}</td>
                            <td>{p.cost}</td>
                            <td>
                                    <button onClick={handlerIncrement}>+</button>
                                    {count}
                                    <button onClick={handlerDecrement}>-</button>
                                    
                            </td>
                            
                        </tr>
                    );
        });

        return allTableRow;
    }// end of table rows method

    function handlerIncrement()
    {
        setCount(count+1);
    }
    function handlerDecrement()
    {
        setCount(count-1);
    }
    



return(
    <div>
        <table>
            <tbody>
                {doRenderProducts()}
            </tbody>
        </table>
    </div>
)

};

export default Demo2;