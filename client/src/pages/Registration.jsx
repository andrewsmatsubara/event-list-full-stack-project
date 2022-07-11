import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from '../redux/actions';
import { registrate } from '../util/util';
import '../style/Registration.css';

const Registration = ({ clickButton }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.placeholder === 'email') {
      setEmail(e.target.value)
    } else if (e.target.placeholder === 'password') {
      setPassword(e.target.value);
    }
  }

  const handleClick = async () => {
    const result = await registrate(email, password);

    if (result === 'AxiosError') {
      await clickButton(true);
      navigate('/registration/registration-result');
    } else if (result !== 'AxiosError') {
      await clickButton(false);
      navigate('/registration/registration-result');
    }
  }

  return (
    <section className='registration-page'>
      <form className='registration-form' onSubmit={(e) => e.preventDefault()}>
        <h1>Registrar conta</h1>
        <Input type="text" placeholder="email" onChange={(e) => handleChange(e)} />
        <Input type="password" placeholder="password" onChange={(e) => handleChange(e)} />
        <Button onClick={() => handleClick()}>
          Registrar
        </Button>
      </form>
    </section>
  );
}

const mapStateToProps = store => ({
  newValue: store.state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
