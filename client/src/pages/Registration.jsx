import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

export const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    if (e.target.placeholder === 'email') {
      setEmail(e.target.value)
    } else if (e.target.placeholder === 'password') {
      setPassword(e.target.value);
    }
  }

  const registrate = () => {
    Axios.post('http://localhost:3001/users', {
      email: email,
      password: password
    }).then((response) => response.config.data);
  }

  const handleClick = () => {
    registrate();
  }

  return (
    <section>
      <div>Registrar conta</div>
      <Input type="text" placeholder="email" onChange={(e) => handleChange(e)} />
      <Input type="password" placeholder="password" onChange={(e) => handleChange(e)} />
      <Link to='registration-result'>
        <Button onClick={() => handleClick()}>
          Registrar
        </Button>
      </Link>
    </section>
  );
}
