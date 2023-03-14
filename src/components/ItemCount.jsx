import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { useState } from 'react';


const ItemCount = () => {
// funciones
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
        className="justify-content-between"
        aria-label="Toolbar with Button groups"
      >
    <ButtonGroup aria-label="Basic example">
      <Button variant="outline-danger" onClick={restar}> - </Button>
      <Button variant="outline-dark" > {counter} </Button>
      <Button variant="outline-success" onClick={sumar}> + </Button>
    </ButtonGroup>
    </ButtonToolbar>
    <ButtonToolbar
        className="justify-content-between"
        aria-label="Toolbar with Button groups"
      >
        <Button variant="outline-primary" > Agregar al carrito </Button>
            </ButtonToolbar>

    </>
)
}

export default ItemCount