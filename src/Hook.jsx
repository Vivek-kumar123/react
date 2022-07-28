import React,{useState} from "react";

const Hook = ()=>{
	const state=useState();
	const [count,setCount]=useState(100);
	
const IncNum = ()=>{
setCount(count-10);
	//console.log("clicked"+ count++);
};
	      return(
              <>
              <h1>{count}</h1>
              <button class="btn" onClick={IncNum}>click </button>
              </>

	              );
	     
              };

              export default Hook;