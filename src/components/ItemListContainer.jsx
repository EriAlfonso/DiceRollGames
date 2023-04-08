import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import Loader from './Loader';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [games, setGames] = useState([]);
  const [loader, setLoader] = useState(true);
  const { category } = useParams();
  const { oferta } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, 'games');
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setGames(docs);
      setLoader(false);
    });
  }, []);

  const dataFilter = games.filter((cateData) => cateData.category === category);
  const ofertaFilter = games.filter((ofertaData) => ofertaData.oferta);

  useEffect(() => {}, [dataFilter, ofertaFilter]);

  if (loader) {
    return <Loader />;
  }

  return (
    <>
      {category ? (
        <ItemList data={dataFilter} />
      ) : oferta === 'true' ? (
        <ItemList data={ofertaFilter} />
      ) : (
        <ItemList data={games} />
      )}
    </>
  );
};

export default React.memo(ItemListContainer);