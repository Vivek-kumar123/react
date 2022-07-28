import React from "react"

export default function Textform(){
const apple=()=>{
	alert("function called")
	
}
const change=()=>{
	alert("onchange")
}
	return(
   <>
   <div className="container my-3">
   <textarea className="" rows="8" onChange={change} ></textarea><br/>
   <button className="btn" onClick={apple}>content for upprecase</button>
   </div>
   </>
	)
}