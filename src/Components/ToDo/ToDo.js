import React from 'react'
import styles from './todo.module.css'
import AddNewTask from '../AddNewTask/AddNewTask'
import Tasks from '../Task.js/Task'
import {Container, Row, Col, Button } from "react-bootstrap"
import IdGenerator from './IdGeneratror'

class ToDo extends React.PureComponent{
    state={
    
    tasks:[
        {
            _id: IdGenerator(),
            text:`Lorem Ipsum is simply dummy text of the printing and typesetting industry's. 
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book.`
        },
        {
            _id: IdGenerator(),
            text:`Lorem It is a long established fact that a reader will be distracted by the 
            readable content of a page when looking at its layout. The point of using Lorem Ipsum is that 
            it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'`
        },
        {
            _id: IdGenerator(),
            text:`Lorem Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a 
            piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, 
            a Latin professor at Hampden-Sydney College in Virginia.`
        }
    ],
    removeTasks:new Set()
    }


    submitBtn=(value)=>{
        
        if(!value) return;
            const tasks=[...this.state.tasks]
            tasks.push(
                {
                    _id:IdGenerator(),
                    text: value
                }
            )
            this.setState({
                tasks
            })
          
      }

      deleteInput=(id)=>{
      let tasks=[...this.state.tasks]
      tasks=tasks.filter(item=>item._id!==id)
      this.setState({
          tasks
          
      })
      }

      selectedId=(_id)=>{
        let removeTasks=new Set(this.state.removeTasks)
        if(removeTasks.has(_id)){
           removeTasks.delete(_id)
        }else{
            removeTasks.add(_id)
        }
        
        this.setState({
            removeTasks
        })
      }

      deleteSelected=()=>{
        let tasks=[...this.state.tasks]
        let removeTasks=new Set(this.state.removeTasks)
        tasks=tasks.filter(item=>!removeTasks.has(item._id))
        this.setState({
            tasks,
            removeTasks:new Set()
        })
    }

    
render(){
    const {tasks, removeTasks}=this.state
    const el = tasks.map(task=>{
      return(
 
          <Col  
          className="d-flex justify-content-center mt-3 "
          key={task._id} 
          xs={12}
          md={4}
          xl={4}>
          <Tasks  
          deleteInput={this.deleteInput} 
          selectedId={this.selectedId}  
          task={task}
         disabled={!!removeTasks.size}/>
          </Col>
      )
     
    })
    return (
        <div className={styles.el}>
            <Container>
                <Row className='justify-content-center'>
                    <Col>
            <AddNewTask 
                 disabled={!!removeTasks.size}
                 submitBtn={this.submitBtn} 
                />
                    </Col>
               </Row>
            <Row className='justify-content-center mt-4'>
                {!el.length && <div>Tasks is empty</div>}
                     {el}
            </Row>
            <Row>
                <Col>
               <Button 
               className='mt-4'
               variant='danger'
               onClick={this.deleteSelected}>
                   Remove Tasks
               </Button>
                </Col>
            </Row>
            </Container>
        </div>
    )
    }
}



export default ToDo