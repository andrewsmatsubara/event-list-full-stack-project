import { Button } from '../components/Button'
import '../style/Login.css'

export const Login = () => {
  return (
    <div className='login-page'>
      <form className='login-form'>
        <input type='text' placeholder='email' />
        <input type='password' placeholder='password' />
        <Button>Acessar</Button>
      </form>
    </div>
  )
}
