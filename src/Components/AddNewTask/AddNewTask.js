import React from "react"
import {Button, Form} from "react-bootstrap";
import styles from './addnewtask.module.css';
import PropTypes from 'prop-types';

class AddNewTask extends React.Component{
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
        if(type==='keypress' && key!== 'Enter') return;
        const {submitBtn}=this.props
        const {title, description}=this.state
        submitBtn(title, description);
        this.setState({
           title: '',
           description:''
        })
    } 
    componentDidMount(){
        this.input.current.focus();
    }


 
render(){
    const {title, description}=this.state
    const {disabled}=this.props


  
 
    return(
        <div >
        <div className={styles.todo}>
            <h1>TO DO</h1>
            <div className='d-flex flex-column'>
            <Form.Control 
                   className='my-3'
                   name='title'
                   type="text" 
                   placeholder="Add title"
                   value={title}
                   onKeyPress={this.submit}
                   onChange={this.changeInputValue} 
                   disabled={disabled}
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
                   
            <Button 
            onClick={this.submit}
            disabled={!(!!title && !!description)}>
                Add
            </Button>
            </div>
         
        </div>
        
</div>
    )
}
    
};

AddNewTask.propTypes= {
    submitBtn:PropTypes.func.isRequired,
    disabled:PropTypes.bool.isRequired

}


export default AddNewTask