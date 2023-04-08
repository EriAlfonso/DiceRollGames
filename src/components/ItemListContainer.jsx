import React from 'react';
import ItemList from './ItemList';
import Loader from './Loader';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const ItemListContainer = () => {
  const [loader, setLoader] = useState(true);
  const [games, setGames] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, 'games');

    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setGames(docs);
      setLoader(false);
    });
  }, []);

  const { category, oferta } = useParams();

  const filteredGames = games.filter((game) => {
    if (category && game.category !== category) {
      return false;
    }
    if (oferta && !game.oferta) {
      return false;
    }
    return true;
  });

  if (loader) {
    return <Loader />;
  }

  return <ItemList data={filteredGames} />;
};

export default React.memo(ItemListContainer);