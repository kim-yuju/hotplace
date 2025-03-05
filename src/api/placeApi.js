import axios from "axios";

const BASE_URL = "http://localhost:3000";

export async function fetchPlaces() {
  try {
    const response = await axios.get(`${BASE_URL}/places`);
    return response.data.places
    // console.log(response);
  } catch (error) {
    console.error("데이터를 불러오는 중 오류 발생:", error);
    throw error
  }
}

