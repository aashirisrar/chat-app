import axios from "axios";

export default async function createItem() {
  const { data } = await axios.post(`http://127.0.0.1:8000/items/createitem/`);

  return data;
}
