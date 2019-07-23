import React from "react";
import {
	Col,
	Container,
	Form,
	FormGroup,
	Label,
	Input,
	Button
} from "reactstrap";
import PropTypes from "prop-types";

class AddTodo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: "",
			content: ""
		};
	}

	handleChange = e => {
		this.setState({
			content: e.target.value
		});
	};
	handleDateChange = e => {
		this.setState({
			date: e.target.value
		});
	};
	handleSubmit = e => {
		e.preventDefault();
		this.props.addTodo(this.state);
		this.setState({
			date: "",
			content: ""
		});
	};
	render() {
		return (
			<Container>
				<Form>
					<FormGroup row>
						<Label for="Todo-date" sm={1}>
							Date
						</Label>
						<Col sm={5}>
							<Input
								type="text"
								name="date"
								id="Todo-date"
								placeholder="Date"
								value={this.state.date}
								onChange={this.handleDateChange}
							/>
						</Col>
						<Label for="Todo-content" sm={1}>
							Todo?
						</Label>
						<Col sm={5}>
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
					<Button onClick={this.handleSubmit}>Submit</Button>
				</Form>
			</Container>
		);
	}
}
AddTodo.propTypes = {
	addTodo: PropTypes.func
};

export default AddTodo;
