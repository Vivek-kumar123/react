import React from "React";
import ReactDOM from "ReactDOM";
ReactDOM.render(<h1>hello world</h1>,document.getElementById('reet'));
	let currDate= new Date();
 currDate=currDate.getHours();
 let greeting="";
 if(currDate>=1 && currDate<12){
 greeting="good morning";
 }
 else if(currDate>=12 && currDate<19)
 {
 greeting="Good Afternoon";
 }
 else{
 greeting="Goodnight";
 }