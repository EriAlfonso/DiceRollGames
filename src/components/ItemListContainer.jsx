import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore} from 'firebase/firestore';



const ItemListContainer = () => {

  const [games,setGames]=useState([]);

  useEffect(()=>{
    const db = getFirestore();

    const itemsCollection = collection(db , "games")
    getDocs(itemsCollection).then ((snapshot)=> {
    const docs = snapshot.docs.map((doc)=>doc.data())
    setGames(docs);
    });


  },[])

  // category y filtro
const {category} =useParams();
const datafilter = games.filter ((catedata) => catedata.category ===category);

useEffect(()=>{
    },[datafilter])

  return (
    <>
    {category?<ItemList data = {datafilter} />:
    <ItemList
    data= {games}
    />}
    </>
  )
}

export default ItemListContainer