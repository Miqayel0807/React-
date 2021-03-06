import React from "react"
import {Button, Form, Modal} from "react-bootstrap";

class AddTaskModal extends React.Component{
    constructor(props){
        super(props);
        this.input=React.createRef()
        this.state={
            title:"",
            description:""
        } ;

    }
   

    changeInputValue=(event)=>{
        this.setState({
            title:event.target.value
        })
    };

    changeDescription=(value)=>{
        this.setState({
            description:value.target.value
        })
    }
    submit=({key, type})=>{
        const {submitBtn, onHide}=this.props
        const {title, description}=this.state
        if((type==='keypress' && key!== 'Enter') || 
        ( !type || !description)) return;

        submitBtn(title, description);
        this.setState({
           title: '',
           description:''
        })
        onHide()
    } 
    componentDidMount(){
        this.input.current.focus();
    }

    


 
render(){
    const {title, description}=this.state
    const {onHide}=this.props

  
 
    return(
        <Modal
        show={true}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
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
              onChange={this.changeDescription}
              onKeyPress={this.submit}
              />
  
        </Modal.Body>
        <Modal.Footer>
        <Button 
            variant='primary' 
            onClick={this.submit}
            disabled={!title || !description}>
                Add
            </Button>
          <Button variant='secondary' onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
      
    )
}
    
};



export default AddTaskModal