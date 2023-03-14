import ItemCount from './ItemCount';
import ItemList from './ItemList';
import Data from './data.json';

const ItemListContainer = () => {

  const getData = () =>{
    return new Promise (( resolve , reject) => {
      if(Data.length === 0){
        reject (new Error ('No Data Present'));
      }
      setTimeout(()=> {
        resolve(Data);
        }, 2000);
    });
  };

  async function fetchData (){
    try{
      const dataFetched= await getData();
      console.log(dataFetched)
    }catch(err){
      console.log(err);
    }
  }

  fetchData();

  return (
    <>
    <ItemCount/>
    <ItemList
    data= {Data}

    // prop con data de json
    />
    </>
  )
}

export default ItemListContainer