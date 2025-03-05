import { useEffect, useState } from "react";
import List from "./components/List";
import { fetchPlaces } from "./api/placeApi";

function App() {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadPlaces();
  }, []);

  if (loading) {
    return <h1>로딩중...</h1>;
  }

  async function loadPlaces() {
    try {
      setLoading(true);
      const placeData = await fetchPlaces();
      setPlaces(placeData);
      setError(null)
    } catch (error) {
      console.error("장소 데이터 로딩 중 오류 발생:", error);
      setError(error.message || "데이터를 불러오는 데 실패했습니다.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
    <h1>🍕전국 맛집 뿌수기🍔</h1>
      <List places={places}  error={error}/>
    </>
  );
}

export default App;
