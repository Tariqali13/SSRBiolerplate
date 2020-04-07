import { LOADING_START } from '../actions';

const initialState = {
  loading: false
};

const common = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_START:
      return {
        ...state,
        loading: !state.loading
      };

    default:
      return state;
  }
};

export default common;
