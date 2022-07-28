import React,{useState} from "react"


const head={color:"#01e700",
textAlign:"center",
backgroundColor:"#ee0000",
display:"inlineBlock",
margin:"10px 200px",
borderStyle:"dotted ",
borderColor:"blue"}




const Proj2=()=>{
	const[num,setNum]=useState(0)


	const inc=()=>{
setNum(num + 1);
	}
	const dec=()=>{
		if(num>0){
setNum(num-1)}
else{
	alert("Sorry , limit of 0 is over")
}
	}
	return(
<>
<div style={head}>

	<h1 >{num}</h1>
	<button onClick={inc}>
 + </button>
	<button onClick={dec}>-</button>
	
	</div>
<h1 className="text-capitalize text-center m-5">hello</h1>
	</>
)}
export default Proj2;