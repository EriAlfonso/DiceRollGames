import Loader from './Loader';
import { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import {CartDataContext} from '../context/CartContext';

const Cart = () => {
  const {cart} = useContext(CartDataContext);

  // const [loader,setloader]= useState(true)

  // setloader (false);

  // if (loader){
  //   return <Loader/>
  // }
  return (
    <div>
    <Table responsive>
      <thead>
        <tr>
          <th></th>
          <th>Item</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((game) => (
          <tr key={game.id}>
            <td>{}</td>
            <td>{game.title}</td>
            <td>${game.price.toFixed(2)}</td>
            <td>{game.cartTotal}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
);
};


export default Cart