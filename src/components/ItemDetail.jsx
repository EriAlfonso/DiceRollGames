import ItemCount from './ItemCount';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const ItemDetail = (detail) => {
  return (
    <>
    <Card style={{ width: '18rem' }} key={detail.id}>
      <Card.Img variant="top" src= {detail.image} />
      <Card.Body>
        <Card.Title>{detail.title}</Card.Title>
        <Card.Text>
        {detail.description}
        </Card.Text>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>precio:{detail.price}</ListGroup.Item>
        <ListGroup.Item>stock:{detail.stock}</ListGroup.Item>
        <ListGroup.Item>cetegoria:{detail.category}</ListGroup.Item>
      </ListGroup>
        <ItemCount/>
      </Card.Body>
    </Card>
    </>
  )
}

export default ItemDetail