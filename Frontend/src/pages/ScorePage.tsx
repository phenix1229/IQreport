import NameAndDateForm from "../components/NameAndDateForm";
import RawAndScaledScoreForm from "../components/RawAndScaledScoreForm";
import CompositeAndFullScoreForm from "../components/CompositeAndFullScoreForm";

const Login = () => {
  return (
    <>
        <NameAndDateForm />
        <RawAndScaledScoreForm />
        <CompositeAndFullScoreForm />
    </>
  )
}

export default Login