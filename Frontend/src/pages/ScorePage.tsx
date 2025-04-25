import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../app/authSlice";
import { RootState } from "../app/store";
import RawAndScaledScoreForm from "../components/RawAndScaledScoreForm";

const ScorePage = () => {

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
    <>
        <RawAndScaledScoreForm />
    </>
  )
}

export default ScorePage