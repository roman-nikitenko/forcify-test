import React, { useState } from 'react';
import "./AddNewCard.scss"
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import card from '../../store/cardStore';
import Spinner from 'react-bootstrap/Spinner';
import { CardType } from '../../type/CardType';

export const AddNewCard: React.FC = () => {
  const [show, setShow] = useState(false);
  const [titlePopup, setTitlePopup] = useState('')
  const [textArea, setTextArea] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  
  const handler = async () => {
    setShow(true)
    setIsLoading(true)
    const response = await fetch('https://www.boredapi.com/api/activity')
    const { activity } = await response.json()

    setIsLoading(false)
    setTitlePopup(activity)
  }
  
  const submitHandler = () => {
    if (!textArea) return 
      
    const newCard: CardType = {
      id: Math.floor(Math.random() * 1000),
      title: titlePopup,
      description: textArea,
    }
    
    card.addCard(newCard)
    setTextArea('')

    setShow(false)
  }
  
  return (
    <>
      <div onClick={handler} className="card-new">
        <span>+</span>
      </div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        className="modal"
      >
        <Modal.Header closeButton className="modal-header">
          <Modal.Title id="example-custom-modal-styling-title" >
            {isLoading && <Spinner />}
            {!isLoading && titlePopup}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: '100px' }}
              value={textArea}
              onChange={(e) => {
                setTextArea(e.target.value)
              }}
            />
          </FloatingLabel>
        </Modal.Body>
        
        <button 
          onClick={submitHandler} 
          className="submit-button"
        >
          Submit
        </button>
      </Modal>
    </>
  );
};
