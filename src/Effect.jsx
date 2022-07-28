import React,{useState,useEffect} from 'react';

const Effect=()=>{
	const [num,setNum]=useState(0);
   useEffect(()=>{
    	alert("i am clicable")
    });

	const Inc=()=>{
		setNum(num+1);
	}
	return(
		<button onClick={Inc}>{num}</button>)
}
export default Effect;