
import './header.css'
import  Name from "./NameInput"
import Surname from "./SurnameInput"



function  Header () {
    return (
        <div className="head">
            <h1>My first React App </h1>  
            <Name/>
            <Surname/>
        </div>
        
    
    )
    
}

export default Header