import { useDispatch, useSelector } from "react-redux";
import NameAndDateForm from "../components/NameAndDateForm"
import { useEffect } from "react";
import { setAuth } from "../app/authSlice";
import { RootState } from "../app/store";

const NameAndDate = () => {
  
  const dispatch = useDispatch();
    
  useEffect(()=>{
    if(sessionStorage.user){
      dispatch(setAuth(true))
    }
  });

  const auth:boolean = useSelector((state:RootState) => state.auth.value)

  if(!auth){
    return (
      <h2>Access denied</h2>
    )
  }

  return (
    <NameAndDateForm />
  )
}

export default NameAndDate