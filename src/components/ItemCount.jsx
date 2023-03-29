import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { useState,useContext } from 'react';
import { CartDataContext } from '../context/CartContext';

const ItemCount = () => {
// funciones de suma y resta
const [counter, setCounter] = useState (0);
const sumar = () => {
    setCounter (counter + 1)
}
const restar = () =>{
    setCounter (counter - 1)
}
return (
    <>
          <ButtonToolbar
        className="justify-content-between "
        aria-label="Toolbar with Button groups"
      >
    <ButtonGroup style={{ width: '10rem', margin:'2rem' }} aria-label="Basic example" className="justify-content-md-center" >
      <Button variant="outline-danger" onClick={restar}> - </Button>
      <Button variant="outline-dark" > {counter} </Button>
      <Button variant="outline-success" onClick={sumar}> + </Button>
    </ButtonGroup>
    </ButtonToolbar>
    <ButtonToolbar
        className="justify-content-between"
        aria-label="Toolbar with Button groups"
      >
        <Button style={{ width:"10rem" ,marginLeft:'2rem' }} variant="outline-primary" className="justify-content-md-center" > Agregar al carrito </Button>
            </ButtonToolbar>

    </>
)
}

export default ItemCount