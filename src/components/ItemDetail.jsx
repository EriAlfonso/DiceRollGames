import ItemCount from './ItemCount';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams } from 'react-router-dom';


const ItemDetail = ({detail}) => {
  const {id}=useParams();
  const idFilter = detail.filter ((idData) => idData.id ===id);

  return (
    <>
    {idFilter.map((idData)=>
    <Card style={{ width: '18rem' }} key={idData.id}>
      <Card.Img variant="top" src= {idData.image} />
      <Card.Body>
        <Card.Title>{idData.title}</Card.Title>
        <Card.Text>
        {idData.description}
        </Card.Text>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>precio:{idData.price}</ListGroup.Item>
        <ListGroup.Item>stock:{idData.stock}</ListGroup.Item>
        <ListGroup.Item>cetegoria:{idData.category}</ListGroup.Item>
      </ListGroup>
        <ItemCount/>
      </Card.Body>
    </Card>
    )}
    </>
  )
}

export default ItemDetail