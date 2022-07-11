import { RegistrationFailed } from '../components/RegistrationFailed';
import { RegistrationSuccess } from '../components/RegistrationSuccess';
import { store } from '../redux/store';
import '../style/RegistrationResult.css';

export const RegistrationResult = () => {
  const state = store.getState().reducers.state.newValue;

  return (
    <div className='registration-result-page'>
      {state ? <RegistrationFailed /> : <RegistrationSuccess />}
    </div>
  )
}
