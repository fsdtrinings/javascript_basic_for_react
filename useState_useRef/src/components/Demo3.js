import React , {useRef, useState}from "react";
const Demo3 = ()=>{

    let myInput = useRef(null);
    let [str,setStr] = useState("");
    let [str2,setStr2] = useState("");
    function doAction()
    {
        setStr(myInput.current.value);
        console.log("myInput "+myInput.current.value);
    }
    function doRead()
    {
        setStr2(myInput.current.value);
        console.log("myInput "+myInput.current.value);
    }
    return(
        <div>
            Enter Some Value : 
            <input type="text" ref={myInput}/><br/>
            <input type="text" ref={myInput} onChange={doRead}/>
            
            <button onClick={doAction}>Click</button>
                <br/>
            {str}<br/>
            {str2}
        </div>
        
    );
}
export default Demo3;