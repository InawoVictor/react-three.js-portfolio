import React from 'react'
import { styled } from 'styled-components'

const Works = () => {
  const data = [
    "Web Design",
    "Development",
    "Illustration",
    "Product Design",
    "Social Media",
  ];

  return (
    <Section>
      <Container>
        <Left>
          <List>
            {
              data.map(item => <ListItem key={item} text={item}>{item}</ListItem>)
            }
          </List>
        </Left>
        <Right>

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
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
`
const Container = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`
const Left = styled.div`
  display: flex;
  flex: 1;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }

`
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  &::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: #fefefe;
    width: 0;
    overflow: hidden;
    transition: all .2s;
    white-space: nowrap;
  }

  &:hover{
    &::after{
      animation: animateText .6s linear both;

      @keyframes animateText {
        to {
          width: 100%
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }
`
const Right = styled.div`
  display: flex;
  flex: 1;
`

export default Works