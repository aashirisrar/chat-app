import axios from "axios";

export default async function getItemById(id: number | undefined) {
  const { data } = await axios.get(
    `http://127.0.0.1:8000/items/getitem/${id}/`
  );

  return data;
}
