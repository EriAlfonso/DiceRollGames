import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { useState ,useEffect } from 'react';

const ItemDetailContainer = () => {




  // filtro por id
  const {id}=useParams();
  const idFilter = detail.filter ((idData) => idData.id ===id);
  
useEffect(()=>{
    },[idFilter])
  return (
    <>
    <ItemDetail
    />
    </>
  )
}

export default ItemDetailContainer