import Axios from 'axios';

export const registrate = async (email: string, password: string) => {
  const fetch = await Axios.post('http://localhost:3001/users', {
    email: email,
    password: password
  }).then((response) => response.config.data).catch((e) => e.name);

  return fetch;
}

export const login = async (email: string, password: string) => {
  const fetch = await Axios.post('http://localhost:3001/login', {
    email: email,
    password: password
  }).then((response) => response.config.data).catch((e) => e.name);

  return fetch;
}
