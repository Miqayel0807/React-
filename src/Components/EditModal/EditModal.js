import React from 'react'
import {Modal,Button, Form} from 'react-bootstrap'
import DatePicker from "react-datepicker"

class EditModal extends React.Component{
  constructor(props){
    super(props)
    this.input=React.createRef()
      this.state={
        title:'',
        description:'',
        date:  new Date(),
        ...props.editTask, 
            
      }    
  }
  changeInputValue=(e)=>{
    const {name, value}=e.target
    this.setState({
      [name]:value
    })
  }



submit=({key, type})=>{
  const {submitBtn,  onHide}=this.props
  const {title,  description}=this.state
  if((type==='keypress' && key!== 'Enter') || 
  ( !title || !description)) return;
  const formData={...this.state}
  submitBtn(formData);
  onHide()
} 
componentDidMount(){
  this.input.current.focus();
}

setDate=(date)=>{
  this.setState({
    date
  })
}

 
  render(){
   const {onHide, addModal}=this.props
    const {title,description, date}=this.state
    return(
      <Modal
      show={true}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header onClick={onHide} closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control 
                   className='my-3'
                   name='title'
                   type="text" 
                   placeholder="Add title"
                   value={title}
                   onKeyPress={this.submit}
                   onChange={this.changeInputValue} 
                   ref={this.input}
                   />

       <Form.Control 
            className='my-3'
            name='description'
            value={description}
            placeholder='Add description'
            as="textarea" 
            onChange={this.changeInputValue}
            onKeyPress={this.submit}
            />
            <DatePicker selected={new Date(date)} onChange={date => this.setDate(date)} />

      </Modal.Body>
      <Modal.Footer>
      <Button variant='primary' 
      onClick={this.submit}>
        {addModal? 'Add': 'Save' }
      </Button>
        <Button 
        variant='secondary' 
        onClick={onHide}>
          Close
          </Button>
      </Modal.Footer>
    </Modal>
    
  );
  }

  }

  export default EditModal
  