import ItemCount from './ItemCount'

const ItemDetail = () => {
  return (
    <>
        <Card style={{ width: '18rem' }} key={id}>
      <Card.Img variant="top" src= {image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        <p>descripcion:{description}</p> 
          <p>precio:{price}</p>
          <p>stock:{stock}</p>
        </Card.Text>
        <ItemCount/>
      </Card.Body>
    </Card>
    </>
  )
}

export default ItemDetail