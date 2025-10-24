import { useState } from "react";


const Demo1 = (props)=>{

   //  var username = "abc"; // will not update the values on runtime
   var [username,setUsername] = useState("");
    

    function doAction()
    {
        let amount = props.amount;
        let percentange = props.percentange;
        //username = props.username;
        setUsername(props.username);
        console.log("do Action called by "+username+""+((amount*percentange)/100));
    }

    console.log("Username "+username);
    
    function doSomething()
    {
        console.log("inside extra method doSomthing "+username);
    }

    return(
        <div>
            <h3> Welcome : {username}</h3>
            <button onClick={doAction}> Click </button>
            <hr/>
            {doSomething()}
        </div>
    );


};

export default Demo1;