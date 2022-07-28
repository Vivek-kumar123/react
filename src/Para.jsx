import React,{useState} from "react"

    const Para=()=>{

    	const[num,setNum]=useState(0);
       
       const Inc=()=>{
      setNum(num+1);
       }
		return(
			<>
			<button onClick={Inc}>{num}</button>
			</>
			)
}
export default Para;