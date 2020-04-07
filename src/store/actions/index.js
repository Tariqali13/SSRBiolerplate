export let LOADING_START = 'LOADING_START';

export let loadingStart = () => dispatch => {
  dispatch({
    type: LOADING_START
  });
};
