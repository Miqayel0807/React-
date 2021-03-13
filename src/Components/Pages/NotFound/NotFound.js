import styles from './notfound.module.css'
import pingvin from '../../../Files/pingvin.jpg'

const NotFound=()=>{
    return (
        <div className={styles.notfound}>
              <h1>
            Page Not Found
        </h1>
        <img src={pingvin} alt="Error 404 Not Found"/>

        </div>
      
    )
}

export default NotFound