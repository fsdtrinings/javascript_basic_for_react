import productArr from "../arrays/AllProducts";


const PropsObject = (props)=>{


    function doTableRow()
    {
           let  allTableRow = []; // array contains table row <tr></tr>
            productArr.forEach((p)=>{
                    allTableRow.push(
                        <tr>
                            <td>{p.productName}</td>
                            <td>{p.cost}</td>
                            
                        </tr>
                    );
            });
            console.log("All Table row : "+allTableRow.length);

            return allTableRow;
    }

    return(
        <div>

            ProductName : <h3> {props.data.productName}</h3>
            ProductCost : <h3> {props.data.cost}</h3>
            <hr/>
            <table>
                <thead>
                    <th>product name </th>
                    <th> Cost </th>
                </thead>
                <tbody>
                    {doTableRow()}
                </tbody>
            </table>
            

        </div>
    );    

};

export default PropsObject;