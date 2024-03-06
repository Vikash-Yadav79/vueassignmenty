interface DataState {
    data: any[]; 
  }
  
  const initialState: DataState = {
    data: []
  };
  
  const dataReducer = (state = initialState, action: any): DataState => {
       return state;
  };
  
  export default dataReducer;
  