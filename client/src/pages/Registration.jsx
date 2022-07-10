import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from '../redux/actions';

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

  const registrate = async () => {
    const fetch = await Axios.post('http://localhost:3001/users', {
      email: email,
      password: password
    }).then((response) => response.config.data).catch((e) => e.name);

    return fetch;
  }

  const handleClick = async () => {
    const result = await registrate();

    if (result === 'AxiosError') {
      await clickButton(true);
      navigate('/registration/registration-result');
    } else if (result !== 'AxiosError') {
      await clickButton(false);
      navigate('/registration/registration-result');
    }
  }

  return (
    <section>
      <div>Registrar conta</div>
      <Input type="text" placeholder="email" onChange={(e) => handleChange(e)} />
      <Input type="password" placeholder="password" onChange={(e) => handleChange(e)} />
      {/* <Link to='registration-result'> */}
      <Button onClick={() => handleClick()}>
        Registrar
      </Button>
      {/* </Link> */}
    </section>
  );
}

const mapStateToProps = store => ({
  newValue: store.state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
