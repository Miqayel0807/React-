import React from "react"
import {Button, Form} from "react-bootstrap";
import styles from './addnewtask.module.css';
import PropTypes from 'prop-types';

class AddNewTask extends React.Component{
    constructor(props){
        super(props);
        this.input=React.createRef()
        this.state={
            inputValue:""
        } ;

    }
   

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
    componentDidMount(){
        this.input.current.focus();
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
                   ref={this.input}
                   
                   
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
    
};

AddNewTask.propTypes= {
    submitBtn:PropTypes.func.isRequired,
    disabled:PropTypes.bool.isRequired

}


export default AddNewTask