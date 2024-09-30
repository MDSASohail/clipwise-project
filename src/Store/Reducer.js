

const initialstate={value:0}
export function Reducer(state=initialstate,action)
{
  switch(action.type)
  {
     case 1:
        return {value:state.value+1};
     case 2:
        return {value:state.value-1};
     default :
       return state;
  }
}