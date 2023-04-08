import React, { useState } from 'react';
import {collection,addDoc, getFirestore, serverTimestamp} from "firebase/firestore"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { CartDataContext } from '../context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const OrderForm = () => {
  const {cart, cartPriceTotal, clearCart} = useContext(CartDataContext);
  const [show, setShow] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [name , SetName] = useState ("")
  const [email , SetEmail] = useState ("")
  const db = getFirestore();

  const handleSubmit=(e)=>{
    e.preventDefault();
    addDoc(orderCollection, order).then (({id})=>setOrderId(id));
  };
  const order={
    name,
    email,
    cart:({cart}),
    total:cartPriceTotal(),
    date:serverTimestamp(),
  };
const orderCollection=collection(db, "order");

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);



  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Form style={{width:'20rem',}} onSubmit={(e) => {
  handleSubmit(e);
  handleShow();
}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="ingrese su email" onChange={(e)=>SetEmail(e.target.value)} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="ingrese su nombre" onChange={(e)=>SetName(e.target.value)} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Recibo</Modal.Title>
        </Modal.Header>
        <Modal.Body>Su total es de :${cartPriceTotal()}
        </Modal.Body>
        <Modal.Body>El ID de su compra es: {orderId}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" onClick={() => {
  handleClose();
  clearCart();
}} as={Link} to="/">
            Volver al Catalogo
          </Button>
        </Modal.Footer>
      </Modal>

      <Button variant="outline-primary" type="submit" >
        Comprar
      </Button>
    </Form>
    </div>
    </>
  )
}

export default OrderForm