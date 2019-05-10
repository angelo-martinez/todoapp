import React from "react";
import PropTypes from "prop-types";
import { Row, Container } from "reactstrap";

const Todos = ({ todos, deleteTodo }) => {
	const todosList = todos.length ? (
		todos.map(todo => {
			return (
				<Container key={todo.id} className="todo">
					<Row>
						<h2>{todo.content}</h2>
						<i
							className="fas fa-times close-todo"
							onClick={() => {
								deleteTodo(todo.id);
							}}
						/>
					</Row>
				</Container>
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
