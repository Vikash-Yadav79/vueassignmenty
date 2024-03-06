
interface AuthState {
    isAuthenticated: boolean;
    user: any; 
  }
  
  const initialState: AuthState = {
    isAuthenticated: false,
    user: null
  };
  
  const authReducer = (state = initialState, action: any): AuthState => {
        return state;
  };
  
  export default authReducer;
  