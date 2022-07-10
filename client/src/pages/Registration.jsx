import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { useState } from 'react';

const fetch = require('node-fetch');

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

  return (
    <section>
      <div>Registrar conta</div>
      <Input type="text" placeholder="email" onChange={(e) => handleChange(e)} />
      <Input type="password" placeholder="password" onChange={(e) => handleChange(e)} />
      <Button>Registrar</Button>
    </section>
  );
}
