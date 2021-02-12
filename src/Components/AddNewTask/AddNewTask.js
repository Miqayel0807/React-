import React from "react"
import styles from './addnewtask.module.css';
import ToDo from '../ToDo/ToDo'

class AddNewTask extends React.Component{
    state={
        inputValue:""
    } ;

    changeInputValue=(val)=>{
        this.setState({
            inputValue:val.target.value
        })
    }
 
render(){
    const {inputValue}=this.state
    const {submitBtn}=this.props
    const submit=()=>{
        submitBtn(inputValue);
        this.setState({
            inputValue: ''
        })
    } 
    return(
        <div >
        <div className={styles.todo}>
            <h1>TO DO</h1>
            <input type="text" 
                   placeholder="Add text"
                   value={inputValue}
                   onChange={this.changeInputValue}>
                   </input>
            <button onClick={submit}>Add</button>
        </div>
        
</div>
    )
}
    
}

export default AddNewTask