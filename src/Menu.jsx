import React from "react";
import menu from "./menu.css"
import {Link} from "react-router-dom";
const Menu=()=>{
	return(
		<div className="menusty">
		<ul>
		<li><Link to="Home">home page</Link></li>
		<li> <Link to="About">about page</Link></li>
		<li><Link to="Contact">contact page</Link></li>
		</ul>
		</div>
		)
}
export default Menu;               