export const initialState={ a:0 , b:0 ,c:0};

export function reducer(state, action) {
  

    switch (action.type) {
      case 'ADD':
        return {
          ...state,
          c: parseFloat(state.a) + parseFloat(state.b),
        };
  
      case 'SUBTRACT':
        return {
          ...state,
        c: parseFloat(state.a) - parseFloat(state.b),
      };

      case 'DIVIDE' :
        return {
          ...state,
        c: parseFloat(state.a) / parseFloat(state.b),
      };

  
      case 'MULTIPLICATION' :
        return {
          ...state,
        c: parseFloat(state.a) * parseFloat(state.b),
      };


      case  'UPDATE':
        return {
          ...state,
          [action.name]: action.value
        };
  
      
  
      default:
        return state;
    }
  }