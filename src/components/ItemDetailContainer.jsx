import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { useState ,useEffect } from 'react';
import { doc, getDoc, getFirestore} from 'firebase/firestore';

const ItemDetailContainer = () => {
    // filtro por id
    const {id}=useParams();
  const [games,setGames]=useState([]);
  useEffect(()=>{
    const db = getFirestore();
    const oneItem = doc(db , "games",`${id}`)
    getDoc(oneItem).then ((snapshot)=> {
    if (snapshot.exists()){
      const docs=snapshot.data();
      setGames(docs)
    }
    });
  },[])

  return (
        <>
    <ItemDetail
    data= {games}
    />
    </>
  )
}

export default ItemDetailContainer