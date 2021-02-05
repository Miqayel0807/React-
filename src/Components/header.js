
import './header.css'
import  NameInput from "./NameInput"
import SurnameInput from "./SurnameInput"



function  Header () {
    return (
        <div className="head">
            <h1>My first React App </h1>  
            <NameInput/>
            <SurnameInput/>
        </div>
        
    
    )
    
}

export default Header