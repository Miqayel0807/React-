import React from 'react'
import {Modal,Button, Form} from 'react-bootstrap'

class EditModal extends React.Component{
  constructor(props){
    super(props)
    this.input=React.createRef()
      this.state={
        ...props.editTask, 
            
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
  const {addBtn, onHide}=this.props
  const {title, description}=this.state
  if((type==='keypress' && key!== 'Enter') || 
  ( !type || !description)) return;

  addBtn(title,  description);
  this.setState({
     title: '',
     description:'',
  })
  onHide()
} 
componentDidMount(){
  this.input.current.focus();
}

 
  render(){
    const {onHide, addModal}=this.props
    const {title,description}=this.state
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
  