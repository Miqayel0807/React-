import './App.css';
import NavBar from '../Components/NavBar/NavBar'
import {Route, Redirect, Switch} from 'react-router-dom'

import ToDo from './Pages/ToDo/ToDo';
import Contact from './Pages/Contact/Contact'
import AboutUs from './Pages/About/AboutUs'






function App() {

    return (
        <div>
             <NavBar/>
            <Switch>
           
            <Route path='/' component={ToDo} exact/>
            <Route path='/contact' component={Contact} exact/>
            <Route path='/about' component={AboutUs} exact/>
            <Redirect to='/'/>
            </Switch>
          
           
        </div>
    
        
    )
}

export default App;
