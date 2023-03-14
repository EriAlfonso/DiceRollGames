import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


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
          {price}
          {stock}
        </Card.Text>
        <Button variant="primary">Detalles</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default Item