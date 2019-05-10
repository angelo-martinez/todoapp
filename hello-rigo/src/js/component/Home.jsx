import React from "react";

//include images into your bundle
import Todos from "./todos";
import AddTodo from "./AddTodo";

export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [
				{
					id: 1,
					content:
						"This is a simple ReactJS Todo App that I built @GeeksAcademy"
				},
				{
					id: 2,
					content:
						"Feel free to play around with it and let me know what you think about it!"
				},
				{
					id: 3,
					content:
						"No really! Play around with it if you can, its part of my portfolio and I'm trying to make it awesome!!"
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
			<div className="text-center mt-5">
				<h1>TO DO:</h1>
				<div className="todos-list">
					<Todos
						todos={this.state.todos}
						deleteTodo={this.deleteTodo}
					/>
				</div>
				<AddTodo addTodo={this.addTodo} />
			</div>
		);
	}
}
