import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("red")
	return (
		<div className="d-flex flex-column justify-content-center align-items-center">
			<div className="bg-dark" style={{ width: "25px", height: "80px" }}></div>
			<div className="bg-dark rounded-5 d-flex flex-column justify-content-evenly align-items-center p-2" style={{ width: "200px", height: "410px" }}>
				<div className={"bg-danger rounded-circle " + (color === "red" ? "onLightRed" : "")} style={{ width: "100px", height: "100px" }} onClick={()=>{setColor("red")}}></div>
				<div className={"bg-warning rounded-circle " + (color === "yellow" ? "onLightYellow" : "")} style={{ width: "100px", height: "100px" }} onClick={()=>{setColor("yellow")}}></div>
				<div className={"bg-success rounded-circle " + (color === "green" ? "onLightGreen" : "")} style={{ width: "100px", height: "100px" }} onClick={()=>{setColor("green")}}></div> 
			</div>
		</div>
	);
};

export default Home;
