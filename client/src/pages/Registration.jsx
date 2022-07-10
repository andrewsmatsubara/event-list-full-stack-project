import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { useState } from 'react';
import fetch from 'node-fetch';
import { Link } from 'react-router-dom';

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

  const registrate = async () => {
    await fetch('localhost:3000/users', {
      method: 'POST',
      body: { email: email, password: password }
    });
  }

  const handleClick = () => {

  }

  return (
    <section>
      <div>Registrar conta</div>
      <Input type="text" placeholder="email" onChange={(e) => handleChange(e)} />
      <Input type="password" placeholder="password" onChange={(e) => handleChange(e)} />
      <Button>
        <Link>
          Registrar
        </Link>
      </Button>
    </section>
  );
}
