import React,{Component} from "react";
 class Props extends Component{
  render(props){
  return(
    <>
    <h1>hello{this.props.class}</h1>
    </>)
 } }
 Props.defaultProps={
  class="bca"
 }
 export default Props; 