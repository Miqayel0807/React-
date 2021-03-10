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
        ...props.editTask, 
        date:new Date(props.editTask)
            
      }    
  }
  changeInputValue=(e)=>{
    const {name, value}=e.target
    this.setState({
      [name]:value
    })
  }

  handle=({type, key})=>{
  const {onHide}= this.props
  if(type==='keypress' && key!== 'Enter') return;
        const {submitBtn}=this.props
        submitBtn(this.state);
        onHide()
}

submit=({key, type})=>{
  const {addBtn,  onHide}=this.props
  const {title, date, description}=this.state
  if((type==='keypress' && key!== 'Enter') || 
  ( !title || !description)) return;

  const formData={
    title, 
    description, 
    date
  }
  addBtn(formData);
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
    console.log(this.state);
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
                   onKeyPress={this.handle}
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
            onKeyPress={this.handle}
            />
            <DatePicker selected={date} onChange={date => this.setDate(date)} />

      </Modal.Body>
      <Modal.Footer>
      <Button variant='primary' 
      onClick={addModal?this.submit: 
      this.handle}>
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
  