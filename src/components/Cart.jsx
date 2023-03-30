import Loader from './Loader';

const Cart = () => {
  const [loader,setloader]= useState(true)

  setloader (false);

  if (loader){
    return <Loader/>
  }
  return (
    <div>Cart</div>
  )
}

export default Cart