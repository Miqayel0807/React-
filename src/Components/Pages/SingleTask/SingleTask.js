import React from 'react'
import styles from './singletask.module.css'
import {Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash} from '@fortawesome/free-solid-svg-icons'
import DateFormatter from '../../../Helpers/DataFormatter'


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
        const {id}=this.props.match.params
        fetch('http://localhost:3001/task/'+id,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.error){
                throw data.error
            }
            this.setState({
                singleTask:null
            })
            this.props.history.goBack()
        })
        .catch(error=>{
            console.log(error);
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
                <p>{DateFormatter(singleTask.created_at)}</p>
                <p>{DateFormatter(singleTask.date)}</p>
                

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
