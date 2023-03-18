import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';



const Item = ({id , title, price, category, image}) => {
  return (
    <>
    {/* tarjeta con props */}
    <Card className="text-center"  border="success" style={{ width: '18rem', margin:'3rem', paddingTop:'1rem' }} key={id}>
      <Card.Img variant="top" src= {image} />
      <Card.Body>
        <Card.Title >{title}</Card.Title>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>Categoria: {category}</ListGroup.Item>
        <ListGroup.Item>Precio: {price}</ListGroup.Item>
      </ListGroup>
      <Link to={`/itemdetail/${id}`}>
        <Button  variant="outline-success"> Detalles</Button>
      </Link>
      </Card.Body>
    </Card>
    </>
  )
}

export default Item