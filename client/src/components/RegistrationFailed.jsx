import { Link } from "react-router-dom"

export const RegistrationFailed = () => {
  return (
    <div>
      <p>Não foi possível realizar o cadastro! Email inválido ou já sendo utilizado.</p>
      <Link to='/registration'>Tela de cadastro</Link>
    </div>
  )
}
