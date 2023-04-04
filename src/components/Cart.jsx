import Loader from './Loader';
import { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { CartDataContext } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartDataContext);

  // const [loader,setloader]= useState(true)

  // setloader (false);

  // if (loader){
  //   return <Loader/>
  // }
  return (
    <div>
      <Table responsive style={{ boxSizing: 'inherit', textAlign: 'left' }}>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody style={{ verticalAlign: 'middle' }}>
          {cart.map((game) => (
            <tr key={game.id}>
              <td>
                <Button variant="outline-danger" onClick={() => removeFromCart(game.id)} >
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
    </div>
  );
};


export default Cart