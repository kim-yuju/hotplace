import { useState } from "react";
import { sortPlacesByDistance } from "../../loc";
import "./List.css";

//파일 받아서 map으로 랜더링하기
const List = ({ places, error }) => {
  // console.log(places);

  const [sortedPlaces, setSortedPlaces] = useState([]);
  if (error) {
    return <h1>요청하신 데이터를 찾을 수 없습니다:{error}</h1>;
  }


  navigator.geolocation.getCurrentPosition((position) => {
    const sorted = sortPlacesByDistance(
      places,
      position.coords.latitude,
      position.coords.longitude
    );
    setSortedPlaces(sorted)
  });

  return (
    <div className="list">
      <h2>맛집 목록</h2>
      <div>
        {sortedPlaces.map((place) => (
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
