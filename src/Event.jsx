import React,{useState} from "react";

const Event=()=>{
let purple="yellow";


	let[bg,setbg]=useState(purple)
	let[ctext,setNtext]=useState("click")

	const Bgchange=()=>{
		let newbg="#778899"
     setbg(newbg);
     
     setNtext("laughings");
   
	}


	return(
		   <>
		   <div style={{backgroundColor:bg}}>
		   <button onClick={Bgchange}>{ctext}</button>
		   </div>
		   </> )
}
export default Event;