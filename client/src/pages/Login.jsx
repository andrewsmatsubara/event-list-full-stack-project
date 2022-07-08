import { Button } from '../components/Button'
import { Input } from '../components/Input'
import '../style/Login.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstLoginTry, setFirstLoginTry] = useState(true);

  const handleChange = (e) => {
    if (e.target.placeholder === 'email') {
      setEmail(e.target.value)
    } else if (e.target.placeholder === 'password') {
      setPassword(e.target.value);
    }
  }

  const handleClick = () => {
    if (email === '' || password === '') {
      setFirstLoginTry(false)
    }
  }

  return (
    <div className='login-page'>
      <form className='login-form'>
        <h1>Login</h1>
        {firstLoginTry === false ? <div className='login-issue-container'>
          <p>Coloque corretamente o email e senha nos campos requeridos!</p>
        </div> : ''}
        <Input type='text' placeholder='email' onChange={(e) => handleChange(e)} />
        <Input type='password' placeholder='password' onChange={(e) => handleChange(e)} />
        <Button onClick={() => handleClick()} >
          <Link to={(email === '' || password === '') ? '/' : '/home'}>
            Acessar
          </Link>
        </Button>
        <Link to='/registration'>Registrar</Link>
      </form>
    </div>
  )
}
