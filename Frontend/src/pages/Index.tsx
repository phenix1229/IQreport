import { Container } from "@mui/material"
import { Link } from "react-router-dom"


const Index = () => {
  return (
    <Container>
      <h2>Welcome to the IQ Report system.</h2>
      <h3>Please <Link to={'/Login'}>log in</Link></h3>
    </Container>
  )
}

export default Index