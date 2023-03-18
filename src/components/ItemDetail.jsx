import ItemCount from './ItemCount';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';


const ItemDetail = ({detail}) => {
  // filtro por id
  const {id}=useParams();
  const idFilter = detail.filter ((idData) => idData.id ===id);
  
useEffect(()=>{
    },[idFilter])
  return (
    <>
    
    <Row className="justify-content-md-center" >
    {idFilter.map((idData)=>
    <Card border="warning" style={{ width: '25rem', margin:'3rem',paddingTop:'1rem' }} key={idData.id} >
      <Card.Img variant="top" src= {idData.pictureUrl} />
      <Card.Body>
        <Card.Title> <h3>{idData.title}</h3> </Card.Title>
        <Card.Text>
        <h5>Descripcion:</h5>
        {idData.description}
        </Card.Text>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>Categoria: {idData.category}</ListGroup.Item>
        <ListGroup.Item>Stock: {idData.stock}</ListGroup.Item>
        <ListGroup.Item>Precio: {idData.price}</ListGroup.Item>
        </ListGroup >
        <ItemCount />
      </Card.Body>
    </Card>
    )}
    </Row>
    </>
  )
}

export default ItemDetail