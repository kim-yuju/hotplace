import { useEffect, useState } from "react";
import LikeList from "./components/LikeList";
import List from "./components/List";
import { fetchPlaces } from "./api/placeApi";

function App() {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

 

  useEffect(() => {
    loadPlaces();
  }, []);
  
  if(loading){
    return <h1>로딩중...</h1>
  }

  async function loadPlaces() {
    try {
      setLoading(true);
      const placeData = await fetchPlaces();
      setPlaces(placeData);
    } catch (error) {
      console.error("장소 데이터 로딩 중 오류 발생:", error);
    } finally {
      setLoading(false);
    }
  }

  

  return (
    <>
      <LikeList />
      <List places={places} loading={loading}/>
    </>
  );
}

export default App;
