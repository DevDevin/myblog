import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Email.css';
import axios from 'axios';



class Email extends Component {
constructor(props) {
  super(props)

  this.state = {
    name: '',
    email: '',
    message: '',
    modal: false
  }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.toggle = this.toggle.bind(this);
}




  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  async handleSubmit(e) {
    e.preventDefault()

    const  { name, email, message } = this.state

    const form = await axios.post('/api/form', {
      name,
      email,
      message
    });


   }

   toggle() {
     this.setState({
       modal: !this.state.modal
     });
   }


  render() {
    return(
    <div>


    <Button className="modalButton" color="secondary" onClick={this.toggle}>Send Email</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Send An Email</ModalHeader>
          <ModalBody>
          <Form className="emailForm" onSubmit={this.handleSubmit} style={{ width: '600px'}}>

            <FormGroup id="formElement">
              <Label for="name">Name:</Label>
              <Input
                type="text"
                name="name"
                onChange={this.handleChange} />
            </FormGroup>

            <FormGroup id="formElement">
              <Label for="email">Email:</Label>
              <Input
                type="email"
                name="email"
                onChange={this.handleChange} />
            </FormGroup>

            <FormGroup className="messageElement" id="formElement">
              <Label for="message">Message:</Label>
              <Input
                type="textArea"
                name="message"
                onChange={this.handleChange} />
            </FormGroup>


        <Button color="primary">Send</Button>

          </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>

      </div>
    );
  }
}


export default Email;
