import React from 'react'
import styles from './contact.module.css'
import {Form, } from 'react-bootstrap'

class Contact extends React.Component{
    render(){
        return(
            <div >
                <h1>Our Contacts</h1>
                <div className={styles.inp}>
                <Form className={styles.input}>
  <Form.Group controlId="exampleForm.ControlInput1">
  <Form.Label>Full name</Form.Label>
  <Form.Control type="text" placeholder="Your full name" />
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Your message here</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>
                </div>

            </div>
        )
    }
}

export default Contact