import React,{useState} from "react";
import App from "./todo.css";
import Todo1 from "./Todo1";



const Todo=()=>{

const [inputlist,setInputlist]=useState("");
 const[items,setItems] =useState([]);

const itemevent=(event)=>{
setInputlist(event.target.value);
}
  	
 const loi=()=>{
setItems((olditems)=>{
	return[...olditems, inputlist];
});
setInputlist("");
 };

	return(
		<>
		<div class="header">
		<h1 class="todo">TODO-LIST-APP</h1>
		<input type="text" placeholder="add an items"
		value={inputlist}
		onChange={itemevent}>
		
		</input>
		<button onClick={loi}>+</button>
		<ol>

		{/*<li>{inputlist}</li>*/}
		
		{items.map((itemval)=>{
			return <Todo1 text={itemval}/>;
		})}
		</ol>
		</div>
		</>
	)
}
export default Todo;