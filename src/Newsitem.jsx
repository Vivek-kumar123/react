import React,{Component} from "react";

class Newsitem extends Component{
   

	render(){
		 const{title,description,imgUrl} = this.props;
		return(
   <div>
        <div className="my-3">

        <div className="card" style={{width:"18rem"}}>
        <img className="card-img-top" src={imgUrl} />
        <div className="card-body">
        <h5 className="card-title"> {title}</h5>
        <p className="card-text"> {description} </p>
        <a href="/newsdetail" className="btn btn-sm btn-primary">Read More</a>
        </div>
        </div>
        
        </div>
   </div>
			 )
	}
}
export default Newsitem;