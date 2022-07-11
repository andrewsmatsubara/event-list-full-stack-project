import Axios from 'axios';

export const registrate = async (email, password) => {
  const fetch = await Axios.post('http://localhost:3001/users', {
    email: email,
    password: password
  }).then((response) => response.config.data).catch((e) => e.name);

  return fetch;
}
