import React from "react"
import ToDo from "./ToDo";

class AddNewTask extends React.Component{
    state={
        inputValue:""
    } ;

    changeInputValue=(val)=>{
        this.setState({
            inputValue:val.target.value
        })
    }
    submitBtn=(val, )=>{
      
      const {inputValue}=this.state
      const {importInputValue}=this.props
      importInputValue(inputValue)
     
        

    }
render(){
    const {inputValue}=this.state
    
    return(
        <div>
        <div className="todo">
            <h1>TO DO</h1>
            <input type="text" 
                   placeholder="Add text"
                   value={inputValue}
                   onChange={this.changeInputValue}>
                   </input>
            <button onClick={this.submitBtn}>Add</button>
        </div>
        
</div>
    )
}
    
}

export default AddNewTask