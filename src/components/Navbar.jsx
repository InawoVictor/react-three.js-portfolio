import React from 'react'
import { styled } from 'styled-components'

const Navbar = () => {
  return (
    <Section>
        <Container>
            <Links>
                <Logo src='./logo.png' />
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Studio</ListItem>
                    <ListItem>Work</ListItem>
                    <ListItem>Contact</ListItem>
                </List>
            </Links>
            <Icons>
                <Icon src='./search.png' />
                <Button>Hire Now</Button>
            </Icons>
        </Container>
    </Section>
  )
}

const Section = styled.div`
    display: flex;
    justify-content: center;
`
const Container = styled.div`
    width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
`
const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;

`
const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`
const Icon = styled.img`
    width: 20px;
    cursor: pointer;
`

const Logo = styled.img`
    height: 50px;
`

const List = styled.ul`
    list-style: none;
    display: flex;
    gap: 20px;
    align-items: center;
`
const ListItem = styled.li`
    cursor: pointer;
`

const Button = styled.button`
    padding: 10px;
    width: 100px;
    background: #da4ea2;
    color: white;
    border-radius: 10px;
    border: none;
    cursor: pointer;
`

export default Navbar