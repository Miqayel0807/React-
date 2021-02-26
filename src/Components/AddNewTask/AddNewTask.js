import React from "react"
import {Button, Form} from "react-bootstrap";
import styles from './addnewtask.module.css';

class AddNewTask extends React.Component{
    state={
        inputValue:""
    } ;

    changeInputValue=(val)=>{
        this.setState({
            inputValue:val.target.value
        })
    };
    submit=({key, type})=>{
        if(type==='keypress' && key!== 'Enter') return;
        const {submitBtn}=this.props
        const {inputValue}=this.state
        submitBtn(inputValue);
        this.setState({
            inputValue: ''
        })
    } 
 
render(){
    const {inputValue}=this.state
    const {disabled}=this.props
  
 
    return(
        <div >
        <div className={styles.todo}>
            <h1>TO DO</h1>
            <div className='d-flex justify-content-center'>
            <Form.Control 
                   type="text" 
                   placeholder="Add text"
                   value={inputValue}
                   onKeyPress={this.submit}
                   onChange={this.changeInputValue} 
                   disabled={disabled}
                   
                   
                   />
                   
            <Button 
            onClick={this.submit}
            disabled={disabled}>
                Add
            </Button>
            </div>
         
        </div>
        
</div>
    )
}
    
}

export default AddNewTask