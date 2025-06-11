const initialState = {
    isLoggedIn: localStorage.getItem('isAuthenticated') === 'true',
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        localStorage.setItem('isAuthenticated', 'true');
        return {
          ...state,
          isLoggedIn: true,
        };
      case 'LOGOUT':
        localStorage.removeItem('isAuthenticated');
        return {
          ...state,
          isLoggedIn: false,
        };
      default:
        return state;
    }
  };
  
  // Selector
  export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
  
  export default authReducer;
  