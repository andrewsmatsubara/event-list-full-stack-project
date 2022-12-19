const initialState = {
  newValue: ''
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'UPDATE_VALUE':
      return {
        ...state,
        newValue: action.newValue
      };
    default:
      return state;
  }
};
