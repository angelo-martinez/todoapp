import React from "react";
import { Col, Container, Form, FormGroup, Label, Input } from "reactstrap";
import PropTypes from "prop-types";

class AddTodo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			content: ""
		};
	}

	handleChange = e => {
		this.setState({
			content: e.target.value
		});
	};
	handleSubmit = e => {
		e.preventDefault();
		this.props.addTodo(this.state);
		this.setState({
			content: ""
		});
	};
	render() {
		return (
			<Container>
				<Form onSubmit={this.handleSubmit}>
					<FormGroup row>
						<Label for="Todo-content" sm={2}>
							Todo?
						</Label>
						<Col sm={10}>
							<Input
								type="text"
								name="todo"
								id="Todo-content"
								placeholder="Write the todo"
								value={this.state.content}
								onChange={this.handleChange}
							/>
						</Col>
					</FormGroup>
				</Form>
			</Container>
		);
	}
}
AddTodo.propTypes = {
	addTodo: PropTypes.func
};

export default AddTodo;
