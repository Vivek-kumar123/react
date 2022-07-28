import React,{useState} from "react"
 const Event=()=>{
 	
 	const[fullname,setFullName]=useState({
 		fname:"",
 		lname:"",

 	})
 	
 	const inputevent=(event)=>{
 		console.log(event.target.value)
 		 		console.log(event.target.name)
   const value= event.target.value;
      const name= event.target.name;


 	}

 const onsubmits=()=>{
 	event.preventDefault();
 	alert("form submitted")
 		
 }
 	return(
 		<>
 		<form onSubmit={onsubmits}>
        <h1>Hello{fullname.fname} {fullname.lname}</h1>
        
        <input onChange={inputevent}
        placeholder="enter your fname"
        type="text"
         name="fname" 
       // value={fullname.fname}
       </>
        <br/>

        <input onChange={inputevent}
        placeholder="enter your lname"
        type="text"
        name="lname"
       // value={fullname.lname}
       />
                <br/>

 		<button type="submit">submit</button>
 		 		</form>

 		</>
 		)
 }
 export default Event;