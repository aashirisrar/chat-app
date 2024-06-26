import axios from "axios";

export default async function getUsers() {
  const { data } = await axios.get("http://127.0.0.1:8000/users/allusers/");

  return data;
}
