import React from 'react'
import Tasks from './Task'
class ToDo extends React.Component{
    state={
    tasks:["Drink cofee", "Study", "Work", "Sleep"]
    }
    
render(){
    const {tasks}=this.state
    const el = tasks.map((task, index)=>{
      return(
          <Tasks key={index} task={task}/>
      )
      
    })
    return (
        <div>
            <div className="todo">
                <h1>TO DO</h1>
                <input type="text" placeholder="Add text"></input>
                <button>Add</button>
            </div>
            
            <div className="tasks">
                {el}
            </div>   
</div>
    )
    
}
} 


export default ToDo