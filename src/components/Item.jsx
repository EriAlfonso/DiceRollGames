import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Item = (key, id , title, description, stock, price, category, image) => {
  return (
    <>
    {/* tarjeta con props */}
    <Card style={{ width: '18rem' }} key={id}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default Item