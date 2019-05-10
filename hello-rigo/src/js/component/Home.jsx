import React from "react";

//include images into your bundle
import Todos from "./todos";

export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [
				{
					id: 0,
					content:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
				},
				{
					id: 1,
					content:
						"testv2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
				}
			]
		};
	}
	deleteTodo = id => {
		const todos = this.state.todos.filter(todo => {
			return todo.id !== id;
		});
		this.setState({
			todos
		});
	};
	render() {
		return (
			<div className="text-center mt-5">
				<h1>TODOS</h1>
				<div>
					<Todos
						todos={this.state.todos}
						deleteTodo={this.deleteTodo}
					/>
				</div>
			</div>
		);
	}
}
