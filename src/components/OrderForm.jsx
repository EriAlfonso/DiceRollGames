import React, { useState } from 'react';
import {collection,addDoc, getFirestore, serverTimestamp} from "firebase/firestore"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CartDataContext } from '../context/CartContext';
import { useContext } from 'react';

const OrderForm = () => {
  const {cart,cartPriceTotal} = useContext(CartDataContext);
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



  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Form style={{width:'20rem',}} onSubmit={handleSubmit}>
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

      {/* <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </>
  )
}

export default OrderForm