import { Button } from '../components/Button'
import { Input } from '../components/Input'
import '../style/Login.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { login } from '../util/util'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstLoginTry, setFirstLoginTry] = useState(true);

  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.placeholder === 'email') {
      setEmail(e.target.value)
    } else if (e.target.placeholder === 'password') {
      setPassword(e.target.value);
    }
  }

  const handleClick = async () => {
    const result = await login(email, password);

    if (result === 'AxiosError' || (email === '' || password === '')) {
      const pw = document.getElementsByClassName('password');

      if (pw[0].classList.contains('password')) {
        pw[0].value = '';
      }

      setFirstLoginTry(false);
      navigate('/');
    } else if (result !== 'AxiosError' && (email !== '' && password !== '')) {
      navigate('/home');
    }
  }

  return (
    <div className='login-page'>
      <form className='login-form' onSubmit={(e) => e.preventDefault()}>
        <h1>Login</h1>
        {firstLoginTry === false ? <div className='login-issue-container'>
          <p>Coloque corretamente o email e senha nos campos requeridos!</p>
        </div> : ''}
        <Input type='text' placeholder='email' onChange={(e) => handleChange(e)} />
        <Input type='password' placeholder='password' className='password' onChange={(e) => handleChange(e)} />
        <Button onClick={() => handleClick()} >
          Acessar
        </Button>
        <Link to='/registration'>Registrar</Link>
      </form>
    </div>
  )
}
