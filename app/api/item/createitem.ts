import axios from "axios";

export default async function createItem(id, title, description, owner_id) {
  const d = {
    id: id,
    title: title,
    description: description,
    owner_id: owner_id,
  };
  const { data } = await axios.post(
    `http://127.0.0.1:8000/items/createitem/`,
    d
  );

  return data;
}
