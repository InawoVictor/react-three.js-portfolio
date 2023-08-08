import Hero from "./components/Hero"
import Who from "./components/Who"
import Works from "./components/Works"
import Contact from "./components/Contact"
import { styled } from "styled-components"

import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function App() {
    
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
      <ToastContainer />
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: auto;
  background: url("./bg.jpeg");
  scrollbar-width: none;
  color: white;
  
  
  &::-webkit-scrollbar{
    display: none;
  }
`

export default App
