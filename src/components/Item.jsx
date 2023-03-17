import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';


const Item = ({id , title, description, stock, price, category, image}) => {
  return (
    <>
    {/* tarjeta con props */}
    <Card style={{ width: '18rem' }} key={id}>
      <Card.Img variant="top" src= {image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {description}
        </Card.Text>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>precio:{price}</ListGroup.Item>
        <ListGroup.Item>stock:{stock}</ListGroup.Item>
        <ListGroup.Item>cetegoria:{category}</ListGroup.Item>
      </ListGroup>
      <Link to={`/itemdetail/${id}`}>
        <Button variant="outline-success"> Detalles</Button>
      </Link>
      </Card.Body>
    </Card>
    </>
  )
}

export default Item