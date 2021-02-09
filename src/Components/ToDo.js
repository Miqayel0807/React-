import React from 'react'
import AddNewTask from './AddNewTask'
import Tasks from './Task'
class ToDo extends React.Component{
    state={
    inputValue:"",
    tasks:["Drink cofee", "Study", "Work", "Sleep"]
    }

    importInputValue=(inputValue)=>{
        this.setState({
            inputValue
        }, ()=>{
            console.log(this.state.inputValue)
        })
        
    }
 
    
render(){
    const{inputValue}=this.state
    const {tasks}=this.state
    const el = tasks.map((task, index)=>{
      return(
          <Tasks  key={index} task={task}/>
      )
     
    })
    return (
        <div>
            <AddNewTask  importInputValue={this.importInputValue} />
            <div className="tasks">
            {el}
           
        </div>  
        </div>
    )
    
}
} 


export default ToDo