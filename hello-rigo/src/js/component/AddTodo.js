import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class AddTodo extends React.Component{
    constructor(props){
        super(props);
        this.state ={
           content: "" 
        };
        
    }
    
    handleChange = (e) => {
        this.setState({
           content: e.target.value 
            
        });
    }
    handleSubmit = (e) => {
        console.log(this.state);
    }
    render(){
        return(
          <Form>
          Add new todo
          </Form>  
            
        );
    }
}

export default AddTodo;