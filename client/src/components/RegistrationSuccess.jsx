import { Link } from "react-router-dom"

export const RegistrationSuccess = () => {
  return (
    <section>
      <p>Cadastro realizado com sucesso!</p>
      <Link to='/'>Tela de login</Link>
    </section>
  )
}
