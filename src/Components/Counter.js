import { useSelector,useDispatch } from "react-redux"

function Counter() {
    const value=useSelector(state=>state.value);
    const dispatch=useDispatch();
    
  return (
    <div>
        <p>Value is {value}</p>
        <button onClick={()=>{dispatch({type:1})}}>Inc</button>
        <button onClick={()=>{dispatch({type:2})}}>Inc</button>
    </div>
  )
}

export default Counter