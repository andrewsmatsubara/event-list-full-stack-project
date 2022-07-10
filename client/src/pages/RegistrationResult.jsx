import { RegistrationFailed } from '../components/RegistrationFailed';
import { RegistrationSuccess } from '../components/RegistrationSuccess';
import { store } from '../redux/store';

export const RegistrationResult = () => {
  const state = store.getState().reducers.state.newValue;

  console.log(state);

  return (
    <div>
      {state ? <RegistrationFailed /> : <RegistrationSuccess />}
    </div>
  )
}
