import Navigation from "./components/Navigation";
import Container from 'react-bootstrap/Container'
import Home from "./views/Home";

export default function App() {
  return (
    <div>
      <Navigation />
      <Container>
          <Home />
      </Container>
    </div>
  )
}