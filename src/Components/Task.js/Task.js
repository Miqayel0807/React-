import styles from'./task.module.css'
import React, {memo} from 'react'
import {Form, Card, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit} from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

function  Tasks({task, 
                 deleteInput, 
                 selectedId, 
                 disabled, 
                 checked,
                 editButton}){
  
    return (
        <Card className={`${styles.card} ${checked && styles.checked}`}>
        <Card.Body>
        <Form.Check type="checkbox" 
                    label=""  
                    className='d-flex justify-content-end' 
                    onChange={()=>selectedId(task._id)}
                    checked={checked}
                   />
          <Card.Title> <h2> {task.title}</h2></Card.Title>
          <Card.Text className='text-justify'><h4>Description</h4>{task.description} </Card.Text>
          <Card.Text className='text-justify'>Created At:{task.created_at.slice(0,10)} </Card.Text>
          <Card.Text className='text-justify'>Date:{task.date.slice(0,10)} </Card.Text>

         
          <Button 
           disabled={disabled}
          variant="danger"
          onClick={()=>deleteInput(task._id)}
         
          ><FontAwesomeIcon icon={faTrash} />
          </Button>
         
          <Button 
          className='ml-3'
          variant="warning"
          disabled={disabled}
         >
             <FontAwesomeIcon 
             icon={faEdit}
             onClick={()=>editButton(task)} />
        </Button>
        </Card.Body>
      </Card>
    
    )
    
}
Tasks.propTypes= {
  deleteInput:PropTypes.func.isRequired,
  selectedId:PropTypes.func.isRequired,
  tasks:PropTypes.shape({
    _id:PropTypes.string,
    text:PropTypes.string

  })
}

export default memo(Tasks)