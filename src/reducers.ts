import { combineReducers, Reducer } from 'redux';
import authReducer from './reducers/authReducer'; 
import dataReducer from './reducers/dataReducer'; 

// export interface RootState {
//   auth: AuthState;
//   data: DataState;
// }

const rootReducer: Reducer = combineReducers({
  auth: authReducer,
  data: dataReducer,
});

export default rootReducer;
