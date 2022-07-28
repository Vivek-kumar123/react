import React,{useState} from "react";
 const Form1=()=>{
 	const[data,setData]=useState({fname=""})
 	return(
      <>
       <div className="contact">
       <h1>contact</h1>
       Name:<input type="text"
        name="fname"
        value={data.fname}
        onChange="inputEvent" 
        placeholder="input name"/>
        </div>
     </>
 		)
 }
 export default Form1;