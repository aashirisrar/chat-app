import axios from "axios";

export default async function createUser() {
  const { data } = await axios.post(`http://127.0.0.1:8000/users/createuser/`);

  return data;
}
