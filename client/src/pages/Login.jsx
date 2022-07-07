import { Button } from '../components/Button'
import { Input } from '../components/Input'
import '../style/Login.css'

export const Login = () => {
  return (
    <div className='login-page'>
      <form className='login-form'>
        <Input type='text' placeholder='email'
         />
        <Input type='password' placeholder='password' />
        <Button>Acessar</Button>
      </form>
    </div>
  )
}
