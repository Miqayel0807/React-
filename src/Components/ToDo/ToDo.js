import React from 'react'
import styles from './todo.module.css'
import AddNewTask from '../AddNewTask/AddNewTask'
import Tasks from '../Task.js/Task'
import {Container, Row, Col } from "react-bootstrap"
import IdGenerator from './IdGeneratror'
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
          <div className={styles.el} key={IdGenerator()}>
          <Col sm={3}>
          <Tasks    task={task}/>
          </Col>
          </div>
      )
     
    })
    return (
        <div>
            <Container>
                <Row className='justify-content-center'>
            <AddNewTask submitBtn={this.submitBtn} />
               </Row>
            <Row className='justify-content-center'>
            {el}
            </Row>
           
            </Container>
        </div>
    )
    }
}



export default ToDo