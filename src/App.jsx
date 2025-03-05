import { useEffect, useState } from "react";
import LikeList from "./components/LikeList";
import List from "./components/List";
import axios from "axios";



function App() {
  const [places, setPlaces] = useState([]);
  const [userPlaces,setUserPlaces]=useState([])

  useEffect(() => {
    
    fetchPlaces();
    fetchUserPlaces()
  }, []);

  async function fetchPlaces() {
    try {
      const response = await axios.get("http://localhost:3000/places");
      setPlaces(response.data.places);
      // console.log(response);
    } catch (error) {
      console.error("데이터를 불러오는 중 오류 발생:", error);
    }
  }

  async function fetchUserPlaces() {
    try {
      const response = await axios.get("http://localhost:3000/users/places");
      setUserPlaces(response.data.places);
      // console.log(response);
    } catch (error) {
      console.error("데이터를 불러오는 중 오류 발생:", error);
    }
  }

  // async function handlePlaceClick(place) {
  //   try {
  //     const response = await axios.post("http://localhost:3000/users/places",{place});
  //     fetchUserPlaces()
  //     console.log(response);
  //   } catch (error) {
  //     console.error("장소 추가 중 오류 발생:", error);
  //   }
  // }


  return (
    
    <>
      <LikeList userPlaces={userPlaces}/>
      <List places={places} />
    </>
  );
}

export default App;
