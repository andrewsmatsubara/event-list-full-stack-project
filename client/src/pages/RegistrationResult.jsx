import { Link } from "react-router-dom"
import { RegistrationFailed } from '../components/RegistrationFailed';
import { RegistrationSuccess } from '../components/RegistrationSuccess';
export const RegistrationResult = () => {
  return (
    <div>
      {'something stored in redux' ? <RegistrationFailed /> : <RegistrationSuccess />}
      <Link to='/'>Tela de login</Link>
    </div>
  )
}
