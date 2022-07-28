import React,{Component} from "react";
 
 export default class Student extends Component{

 constructor(){
 	super()
 	this.state={name:"namaste"}
 }
   render(){
	return(
 <div>
 <h1>hello {this.state.name}</h1>
 </div>
		)
 }}
