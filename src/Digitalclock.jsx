import React,{useState} from "react";

 const Digitalclock=()=>{
 let time = new Date().toLocaleTimeString();

 const[ctime,setCtime]=useState(time);
const Updatetime=()=>{
	setCtime(time)
}
setInterval(Updatetime,2000);
 	return(
 		<>
 		<h1 class="heading">{time}</h1>
 		
 		</>
 		   )
 }
 
 export default Digitalclock ;