import { useEffect, useState } from "react";
import { sortPlacesByDistance } from "../../loc";
import "./List.css";

//파일 받아서 map으로 랜더링하기
const List = ({ places, error }) => {
  console.log(`맛집리스트`, places);

  const [sortedPlaces, setSortedPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  if (error) {
    return <h1>요청하신 데이터를 찾을 수 없습니다:{error}</h1>;
  }

  useEffect(() => {
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(async (position) => {
      const sorted = await sortPlacesByDistance(
        places,
        position.coords.latitude,
        position.coords.longitude
      );
      console.log(`솔티드`, sorted);
      setSortedPlaces(sorted);
      setIsLoading(false);
    });
  }, [places]);

  console.log(`정렬된맛집리스트:`, sortedPlaces);

  if (sortedPlaces.length === 0 && places && places.length > 0) {
    return <div>맛집 정보를 정렬하는 중...</div>;
  }

  return (
    <div className="list">
      <h2>맛집 목록</h2>
      <div>
        {isLoading &&
          sortedPlaces.length !== 0 &&
          sortedPlaces.map((place) => (
            <div key={place.id} className="place-item">
              <img
                // onClick={likeButton}
                src={`http://localhost:3000/${place.image.src}`}
                alt={place.image.alt}
              />
              <h3>{place.title}</h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export default List;
