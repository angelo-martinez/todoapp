import React from "react";

//include images into your bundle
import Todos from "./todos";
import CardFoot from "./CardFoot.jsx";

//create your first component
export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [{ id: 0, content: "testv1" }, { id: 1, content: "testv2" }]
		};
	}
	render() {
		return (
			<div className="text-center mt-5">
				<h1>TODOS</h1>
				<div>
					<Todos todos={this.state.todos} />
				</div>
				<CardFoot />
			</div>
		);
	}
}
