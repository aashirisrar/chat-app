import axios from "axios";

export default async function getItems() {
  const { data } = await axios.get("http://127.0.0.1:8000/items/allitems/");

  return data;
}
