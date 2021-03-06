import styles from './task.module.css'
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
          <Card.Title>{task.title}</Card.Title>
          <Card.Text className='text-justify'>{task.description} </Card.Text>
         
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