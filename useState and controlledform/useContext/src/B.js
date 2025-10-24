import { useContext } from "react";
import FruitContext from "./FruitContext";

const B = () =>{
    let {fruit} = useContext(FruitContext); // Extracting the data from the global context
    return(
        <div>
                Component B<br/>
                Entered Fruits Value is {fruit}
        </div>
    );
};
export default B;
