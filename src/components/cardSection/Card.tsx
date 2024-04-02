import React, { useState } from 'react';
import deleteImage from "../../img/delete.svg";
import editeImage from "../../img/edit.svg";
import './card.scss';
import { CardType } from '../../type/CardType';
import cardStore from '../../store/cardStore';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


type Props = {
  card: CardType
}

export const Card: React.FC<Props> = ({ card }) => {
  const [show, setShow] = useState(false);
  const [textArea, setTextArea] = useState(card.description)
  
  const editHandler = () => {
    setShow(true)
  }
  
  const removeHandler = (id: number) => {
    cardStore.removeCard(id);
  }
  
  const submitHandler = () => {
    cardStore.editTextCard(card.id, textArea)
    setShow(false)
  }
  
  return (
    <>
      <section className="card">
        <section className="card-wrapper">
          <article className="card-wrapper-title">
            <h5>
              {card.title}
            </h5>
          </article>
          <article className="card-wrapper-description">
            <p className="text-style card-description-text">
              {card.description}
            </p>
          </article>
        </section>
        <section className="card-buttons">
          <button type="button" onClick={editHandler}>
            <img src={editeImage} alt="Edit button"/>

          </button>
          <button type="button" onClick={() => removeHandler(card.id)}>
            <img src={deleteImage} alt="Delete button"/>

          </button>
        </section>
      </section>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        className="modal"
      >
        <Modal.Header closeButton className="modal-header">
          <Modal.Title id="example-custom-modal-styling-title" >
            {card.title}
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
