import React from "react";
import PropTypes from "prop-types";

const Todos = ({ todos, deleteTodo }) => {
	const todosList = todos.length ? (
		todos.map(todo => {
			return (
				<li key={todo.id}>
					<a href="#">
						<h2>{todo.date}</h2>
						<p>{todo.content}</p>
						<p
							onClick={() => {
								deleteTodo(todo.id);
							}}>
							Finished
						</p>
					</a>
				</li>
			);
		})
	) : (
		<p> You have nothing left. Yay!</p>
	);
	return <div>{todosList}</div>;
};
Todos.propTypes = {
	todos: PropTypes.array,
	deleteTodo: PropTypes.func
};

export default Todos;
