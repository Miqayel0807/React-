import React from 'react'
import styles from './singletask.module.css'
import {Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash} from '@fortawesome/free-solid-svg-icons'


class SingleTask extends React.Component{
    state={
        singleTask:null
    }

    componentDidMount(){
        const {id}=this.props.match.params
        fetch(`http://localhost:3001/task/${id}`)
        .then(res=>res.json())
        .then(data=>{
            if(data.error){
                throw data.error
            }

            this.setState({
                singleTask:data
            })
        })
       .catch(error=>{
           console.error('Request error', error)
       })

    }

    deleteButton=()=>{
            this.setState({
                singleTask:null
            })
    }


    render(){
     const {singleTask}=this.state
     if(!singleTask){
         return <div>
             <h1>...OOPS</h1>
         </div>
     }
     return(
         <div className={styles.page}>
             <h1>SingleTask Page</h1>
             <div className={styles.text}>
                <h2>{singleTask.title}</h2>
                <p>{singleTask.description}</p>

                <Button 

          variant="danger"
          onClick={this.deleteButton}
          
         
          ><FontAwesomeIcon icon={faTrash} />
          </Button>
         
          
             </div>
         </div>
     )
    }
}

export default SingleTask
