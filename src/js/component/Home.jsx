import React from "react";

//include images into your bundle
import Todos from "./Todos";
import AddTodo from "./AddTodo";

export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [
				{
					id: 1,
					date: "5/3",
					content: "Graduate 4Geeks"
				},
				{
					id: 2,
					date: "5/4",
					content: "Make awesome projects"
				},
				{
					id: 3,
					date: "5/10",
					content: "Master React"
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
	addTodo = todo => {
		todo.id = Math.random();
		let todos = [...this.state.todos, todo];
		this.setState({
			todos
		});
	};
	render() {
		return (
			<div className="mt-5">
				<h1>TO DO:</h1>
				<ul>
					<Todos
						todos={this.state.todos}
						deleteTodo={this.deleteTodo}
					/>
				</ul>
				<AddTodo addTodo={this.addTodo} />
			</div>
		);
	}
}
