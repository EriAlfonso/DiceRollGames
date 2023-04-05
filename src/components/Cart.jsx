import Loader from './Loader';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { CartDataContext } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, cartPriceTotal } = useContext(CartDataContext);
  return (
    <div>
      {cart.length !== 0 ? (
      <div>
      <Table responsive hover style={{ boxSizing: 'inherit', textAlign: 'left' }}>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Sub-Total</th>
          </tr>
        </thead>
        <tbody style={{ verticalAlign: 'middle' }}>
          {cart.map((game) => (
            <tr key={game.id}>
              <td>
                <Button variant="outline-danger" onClick={() => removeFromCart (game.id)} >
                <span className="material-symbols-outlined" style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                  delete
                </span>
                </Button>
              </td>
              <td><img src={game.image} alt="" style={{ width: '6rem' }} /> </td>
              <td>{game.title}</td>
              <td>${game.price}</td>
              <td>{game.buyTotal}</td>
              <td>${game.buyTotal * game.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      
      <Table responsive hover >
        <thead >
          <tr >
            <th colSpan={4}>Total De Compras</th>
          </tr>
        </thead>
        <tbody >
          <tr >
          <th>Total</th>
          <td>${cartPriceTotal()}</td>
          <td></td>
          <td></td>
          </tr>
        </tbody>
      </Table>
      </div>
            ):(
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop:'2rem'}}>
                <h3>El Carrito Esta Vacio</h3>
                <Button variant="outline-primary" size="lg" as={Link} to="/">Volver al Catalogo</Button>
              </div>
            )}
    </div>

  );
};


export default Cart