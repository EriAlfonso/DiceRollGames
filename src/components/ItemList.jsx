import Item from './Item';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';



const ItemList = ({data}) => {
  return (
    <>
    <Container fluid >
    <Row >
    {data.map((game) => (
    <Item
    key={game.id}
    id={game.id}
    title={game.title}
    description={game.description}
    price={game.price}
    stock={game.stock}
    category={game.category}
    image={game.image}
    oferta={game.oferta}
    />
    ))}
    </Row>
    </Container>
    </>
  );
};

export default ItemList