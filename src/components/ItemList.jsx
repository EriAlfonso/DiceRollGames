import Item from './Item';
import Container from 'react-bootstrap/Container';


const ItemList = ({data}) => {
  return (
    <>
    <Container>
    {data.map((game) => (
    <Item
    key={game.id}
    id={game.id}
    title={game.title}
    description={game.description}
    price={game.price}
    stock={game.stock}
    category={game.category}
    image={game.pictureUrl}
    />
    ))}
    </Container>
    </>
  );
};

export default ItemList