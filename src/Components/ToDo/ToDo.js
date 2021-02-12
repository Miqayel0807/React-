import React from 'react'
import styles from './todo.module.css'
import AddNewTask from '../AddNewTask/AddNewTask'
import Tasks from '../Task.js/Task'
class ToDo extends React.Component{
    state={
    
    tasks:["Drink cofee", "Study", "Work"]
    }


    submitBtn=(value)=>{
        if(!value) return;
             const tasks=[...this.state.tasks]
            tasks.push(value)
            this.setState({
                tasks
            })
      }
      


    
render(){
    const{inputValue}=this.state
    const {tasks}=this.state
    const el = tasks.map((task, index)=>{
      return(
          <Tasks   key={index} task={task}/>
      )
     
    })
    return (
        <div>
            <AddNewTask submitBtn={this.submitBtn} />
            <div className={styles.task}>
            {el}
            </div>
        
        </div>
    )
    
}
} 


export default ToDo