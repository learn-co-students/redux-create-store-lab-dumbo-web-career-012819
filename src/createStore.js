
export default function createStore(reducer) {
  let state;
  
  const dispatch = (action) => {
    state = reducer(state, action);
    render();
  } 
  
  
  state === undefined ? 
  dispatch({ type: '@@INIT' }) : null

  const getState = () => {
    return state
  }
  return {getState, dispatch}
}

function render() {
  const container = document.getElementById('container');
}


