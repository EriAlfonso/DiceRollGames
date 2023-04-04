import ItemDetail from './ItemDetail';
import Loader from './Loader';
import { useParams } from 'react-router-dom';
import { useState ,useEffect } from 'react';
import { doc, getDoc, getFirestore} from 'firebase/firestore';

const ItemDetailContainer = () => {
  // filtro por id
  const {id}=useParams();
  const [games,setGames]=useState([]);
  const [loader,setloader]= useState(true)
  useEffect(()=>{
    const db = getFirestore();
    const oneItem = doc(db , "games",`${id}`)
    getDoc(oneItem).then ((snapshot)=> {
    if (snapshot.exists()){
      const docs=snapshot.data();
      setGames(docs)
      setloader (false);
    }
    });
  },[id])

  if (loader){
    return <Loader/>
  }
  return (
        <>
    <ItemDetail
    data= {games}
    id={id}
    />
    </>
  )
}

export default ItemDetailContainer