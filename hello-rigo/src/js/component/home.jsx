import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import TaskList from "./task.jsx";
import Test from "./test.jsx";
import CardFooter from "./cardfooter.jsx";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<h1>TODOS</h1>
				<div className="card">
					<Test />
					<CardFooter />
				</div>
			</div>
		);
	}
}
