import React from 'react'
import {Modal,Button} from 'react-bootstrap'

const Confirm=(props)=>{
    const {hide}=props
    const {deleteSelected}=props
    return(
        <Modal show={true} onHide={hide}>
        <Modal.Header closeButton>
          <Modal.Title>Remove Selected </Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want delete these tasks?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hide}>
            Close
          </Button>
          <Button 
          variant="danger" 
          onClick={deleteSelected}>
            Delete 
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default Confirm