import React,{Component} from "react"
import Newsitem from "./Newsitem";

class News extends Component{
	constructor(){
	super();
	console.log("hello i am a constructor");
   this.state={
   	articales:this.articales,
   	loading:false
   }
  }
 async componentDidMount(){
  console.log("cdm");
  let Url= "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1a87ae6b3bbd4e31be06e501c54cde62"
  let data=await fetch(Url)
  let parsedData=await data.json()
  console.log(data);
}


  render(){
	console.log("render");
	return(
		<>
	<div className="container my-3">
	<h2>Newsmonkey-Top Headlines</h2>
	<div className="row">
	<div className="col-md-4 ">
	<Newsitem title="myTitle" description="myDescription" imgUrl="https://static.toiimg.com/thumb/msid-74945036,imgsize-189791,width-400,resizemode-4/74945036.jpg" />
		</div>
		<div className="col-md-4 ">
	<Newsitem title="myTitle" description="myDescription" imgUrl="https://static.toiimg.com/thumb/msid-74945036,imgsize-189791,width-400,resizemode-4/74945036.jpg" />
		</div>
		<div className="col-md-4 ">
	<Newsitem title="myTitle" description="myDescription" imgUrl="https://static.toiimg.com/thumb/msid-74945036,imgsize-189791,width-400,resizemode-4/74945036.jpg" />
		</div>
	
	</div>
    </div>
	    </>
	)}
}
export default News;