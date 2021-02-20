// import styles from './task.module.css'
import {Form, Card, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit} from '@fortawesome/free-solid-svg-icons'

function  Tasks({task, deleteInput, selectedId, disabled}){
  
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Body>
        <Form.Check type="checkbox" 
                    label=""  
                    className='d-flex justify-content-end' 
                    onClick={()=>selectedId(task._id)}
                   />
          <Card.Title>{task.text.slice(0,6)}</Card.Title>
          <Card.Text className='text-justify'>{task.text} </Card.Text>
         
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
             <FontAwesomeIcon icon={faEdit} />
        </Button>
        </Card.Body>
      </Card>
    
    )
    
}

export default Tasks