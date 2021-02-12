import styles from './task.module.css'
import ToDo from '../ToDo/ToDo'
function  Tasks({task}) {
    return (
        <div className={styles.tasks}> 
            <p >{task}</p>
        </div>
    )
    
}

export default Tasks