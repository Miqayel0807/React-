import './App.css';
import NavBar from '../Components/NavBar/NavBar'
import {Route, Redirect, Switch} from 'react-router-dom'
import ToDo from './Pages/ToDo/ToDo';
import Contact from './Pages/Contact/Contact'
import AboutUs from './Pages/About/AboutUs'
import NotFound from '../Components/Pages/NotFound/NotFound'
import SingleTask from './Pages/SingleTask/SingleTask';






function App() {
    return (
        <div>
             <NavBar/>
            <Switch>
           
            <Route path='/' component={ToDo} exact/>
            <Route path='/contact' component={Contact} exact/>
            <Route path='/about' component={AboutUs} exact/>
            <Route path='/task/:id' component={SingleTask} exact/>
            <Route path='/err' component={NotFound} exact/>
            <Redirect to='/err'/>
            </Switch>
          
           
        </div>
    
        
    )
}

export default App;
