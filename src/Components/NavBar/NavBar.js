import {Nav} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import styles from './navbar.module.css'


const NavBar=()=>{
    return(
        <Nav
  activeKey="/home"
>
  <Nav.Item>
    <NavLink to="/" activeClassName={styles.activeNavLink} exact={true}>Home</NavLink>
  </Nav.Item>
  <Nav.Item>
    <NavLink to="/contact" activeClassName={styles.activeNavLink} exact={true}>Contact</NavLink>
  </Nav.Item>
  <Nav.Item>
    <NavLink to="/about" activeClassName={styles.activeNavLink} exact={true}>About</NavLink>
  </Nav.Item>
</Nav>
    )
}

export default NavBar