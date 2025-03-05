import "./List.css";

//파일 받아서 map으로 랜더링하기
const List = ({places}) => {
  return (
    <div className="list">
      <h1>맛집 목록</h1>
      <div>
        {places.map((place) => (
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
