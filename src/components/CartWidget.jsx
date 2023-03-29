import Badge from 'react-bootstrap/Badge';
import { useContext } from 'react';
import { CartDataContext } from '../context/CartContext';

const CartWidget = () => {
    return (
        <div>
            <span className="material-symbols-outlined">
        shopping_cart
        </span>
        <Badge pill bg="danger">8</Badge>
        </div>
    )
}

export default CartWidget