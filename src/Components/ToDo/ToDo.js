import React from 'react'
import styles from './todo.module.css'
import Tasks from '../Task.js/Task'
import {Container, Row, Col, Button } from "react-bootstrap"
// import IdGenerator from '../../Helpers/IdGeneratror'
import Confirm from '../ConfirmModal/ConfirmModal'
import EditModal from '../EditModal/EditModal'
import DateFormatter from '../../Helpers/DataFormatter'

class ToDo extends React.PureComponent{
    state={
    
    tasks:[
        // {
        //     _id: IdGenerator(),
        //     title:'Lorem1',
        //     description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry's. 
        //     Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
        //     when an unknown printer took a galley of type and scrambled it to make a type 
        //     specimen book.`
        // },
        // {
        //     _id: IdGenerator(),
        //     title:'Lorem2',
        //     description:`Lorem It is a long established fact that a reader will be distracted by the 
        //     readable content of a page when looking at its layout. The point of using Lorem Ipsum is that 
        //     it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'`
        // },
        // {
        //     _id: IdGenerator(),
        //     title:'Lorem3',
        //     description:`Lorem Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a 
        //     piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, 
        //     a Latin professor at Hampden-Sydney College in Virginia.`
        // }
    ],
    removeTasks:new Set(),
    isChecked:true,
    isConfirm:false,
    editTask:null,
    addModal:false
    }

    componentDidMount(){
        fetch('http://localhost:3001/task')
        .then(res=>res.json())
            .then(data=>{ 
                if(data.error){
                    throw data.error
                }
                this.setState({
                    tasks:data
                })
                
                })

                .catch(error=>{
                    console.error('error', error);
                })
    }

        submitBtn=(formData)=>{
        if(!formData.title || !formData.description) return
        formData.date=DateFormatter(formData.date)
        const tasks=[...this.state.tasks]
            fetch('http://localhost:3001/task',{
                method:'POST',
                body:JSON.stringify(formData),
                headers:{
                    'Content-Type':'application/json'
                }
            })
            .then(res=>res.json())
            .then(data=>{
                
                if(data.error){
                    throw data.error
                }
                tasks.push(data)
                this.setState({
                    tasks
                })
                })

                .catch(error=>{
                    console.error('error', error);
                })
        }

      deleteInput=(id)=>{
        let tasks=[...this.state.tasks]
        fetch('http://localhost:3001/task/'+id,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.error){
                throw data.error
            }
            tasks=tasks.filter(item=>item._id!==id)
      this.setState({
          tasks     
      })

        })

    .catch(error=>{
        console.error(error)
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
        fetch('http://localhost:3001/task', {
            method:'PATCH',
            body:JSON.stringify({tasks:Array.from(this.state.removeTasks)} ),
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.error){
                throw data.error
            }
        let tasks=[...this.state.tasks]
        let removeTasks=new Set(this.state.removeTasks)
        tasks=tasks.filter(item=>!removeTasks.has(item._id))
        this.setState({
            tasks,
            removeTasks:new Set(),
            isConfirm:false,
            isChecked:!this.state.isChecked
        })


        })
        .catch(error=>{
            console.error('You can not delete any tasks', error)
        })


    }

    selectAll=()=>{
        const {tasks, isChecked}=this.state
        const removeTasks= new Set()
        if(isChecked){
             tasks.forEach(task=>{
            removeTasks.add(task._id)
        })
        }
        this.setState({
            removeTasks,
            isChecked: !isChecked
        })
    }
    openAddTaskModal=(task)=>{
        const {addModal}=this.state
        this.setState({
            addModal:!addModal,
            editTask:task,
        }) 
    }

    editButton=(task)=>{
        this.setState({
            editTask:task,
        })
    }

    onHide=()=>{
         this.setState({
         editTask:null,
         addModal:false
     })
 }

    newEditedTask = (edit)=>{
     const tasks=[...this.state.tasks]
     edit.date=DateFormatter(edit.date)
    fetch('http://localhost:3001/task/'+edit._id,{
        method:'PUT',
        body:JSON.stringify(edit),
        headers:{
            'Content-Type':'application/json'
        }  

    })
    .then(res=>res.json())
    .then(data=>{
        if(data.error){
            throw data.error
        }
    const index=tasks.findIndex(task=>task._id===edit._id)
     tasks[index]=edit

     this.setState({
         tasks
     })
    })
    .catch(error=>{
        console.error('error', error)
    })
      
 }


    
render(){
    const {
            tasks, 
           removeTasks, 
           isConfirm, 
           addModal, 
           editTask
        }=this.state

    const handleToggleModal=()=>{
       this.setState({
        isConfirm:!isConfirm
       }) 
    }


    const el = tasks.map(task=>{
      return(
 
          <Col  
          className="d-flex justify-content-center mt-3 "
          key={task._id} 
          xs={12}
          md={4}
          xl={4}
          >
         
          <Tasks  
          deleteInput={this.deleteInput} 
          editButton={this.editButton}
          selectedId={this.selectedId}  
          task={task}
          disabled={!!removeTasks.size}
          checked={removeTasks.has(task._id)}
        />
          </Col>
      )
     
    })
    return (
        <div className={styles.el}>
            <Container>
                <Row className='justify-content-center'>
                    <Col>
                         <h1>ToDo</h1>
                <Button 
                onClick={this.openAddTaskModal}
                disabled={!!removeTasks.size}>
                    AddTask
                </Button>
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
                     onClick={handleToggleModal}
                     disabled={!!!removeTasks.size}
                     >
                   Remove Tasks
               </Button>
                    <Button
                    variant='primary'
                    className='mt-4 ml-3'
                    onClick={this.selectAll}
                    disabled={!!!tasks.length}>
                   {this.state.isChecked? 'Select All' :'Remove All'}
                </Button>
                </Col>
            </Row>
                  {isConfirm? 
                  <Confirm 
                  hide={handleToggleModal} 
                  deleteSelected={this.deleteSelected}/>: false} 
                 
                 {editTask && <EditModal 
                 editTask={editTask} 
                 onHide={this.onHide} 
                 submitBtn={this.newEditedTask}
                 addBtn={this.submitBtn}
                 addModal={addModal}
                 />}
            </Container>
        </div>
            
    )
    }
}



export default ToDo