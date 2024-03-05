
const initialState = {
    squaredValue: null,
    cubedValue: null
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SQUARE':
        return { ...state, squaredValue: action.square };
      case 'CUBE':
        return { ...state, cubedValue: action.cube };
      default:
        return state;
    }
  };
  
  export default reducer;
