import React from "react";
import PropTypes from "prop-types";

const Todos = ({ todos }) => {
	const todosList = todos.length ? (
		todos.map(todo => {
			return (
				<div key={todo.id}>
					<span>{todo.content}</span>
				</div>
			);
		})
	) : (
		<p> You have nothing left. Yay!</p>
	);
	return <div>{todosList}</div>;
};

export default Todos;
