export const LOADING_START = 'LOADING_START';
export const loadingStart = () => dispatch => {
  dispatch({
    type: LOADING_START
  });
};
