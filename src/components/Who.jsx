import { styled } from 'styled-components'
import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Cube from "./Cube"


const Who = () => {
  return (
    <Section>
      <Container>
        <Left>          
          <Canvas camera={{fov:25, position: [5,5,5]}}
          >
            <OrbitControls enableZoom={false}/>
            <ambientLight intensity={1}/>
            <directionalLight position={[3,2,1]} />
            <Cube />
          </Canvas>
        </Left>
        <Right>
          <Title>Think outside the square space</Title>
          <WhatWeDo>
            <Line src='./line.png'/>
            <SubTitle>Who we Are</SubTitle>
          </WhatWeDo>
          <Desc>A creative group of designers and developers with a passion for the arts</Desc>
          <Button>See our works</Button>
        </Right>
      </Container>
    </Section>
  )
}

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
 height: 100vh;
 scroll-snap-align: center;
 width: 1200px;
 display: flex;
 justify-content: space-between
`

const Left = styled.div`
  flex: 1;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`
const Title = styled.h1`
  font-size: 74px;
`

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`
const Line = styled.img`
  height: 5px;
`

const SubTitle = styled.h2`
  color: #da4ea2;
`
const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`
const Button = styled.button`
  background: #da4ea2;
  color: #fff;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`


export default Who
