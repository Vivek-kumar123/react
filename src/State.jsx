import React,{Component} from "react"

export default class Student extends Component {
	constructor(){
super()
this.state={name:"vivek"
}	
}
update(){
	this.setState({name:"baibhav"})
}
render(){
return(
	<div>
	<h1>hello {this.state.name}</h1>
	<button onClick={()=>{this.update()}}>click</button>
	</div>
	)
}}
