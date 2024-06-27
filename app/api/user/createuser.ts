import axios from "axios";

export default async function createUser(email, password) {
  const d = {
    email: email,
    password: password,
  };

  const { data } = await axios.post(
    "http://127.0.0.1:8000/users/createuser/",
    d
  );

  return data;
}
