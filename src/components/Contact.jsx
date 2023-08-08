import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { styled } from 'styled-components'
import Map from "./Map"

import { toast } from 'react-toastify';


const Contact = () => {
  const [isSending, setIsSending] = useState(null) 
  const ref = useRef()

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSending(true)

    emailjs.sendForm('service_dylpin6', 'template_towyj7q', ref.current, 'u-IflYPesl_9-mn9R')
      .then((result) => {
          console.log(result.text);
          toast.success("Your message has been sent. We'll get back to you soon.");
          setIsSending(false)
      }, (error) => {
          console.log(error.text);
      });

 
  }

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input placeholder="Name" name="name"/>
            <Input placeholder="Email" name="email"/>
            <TextArea placeholder="Write your message" row="10" name="message"/>
            <Button type="submit" disabled={isSending}>Send</Button>
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  )
}

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`
const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px; 
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`
const Title = styled.h1`
  font-weight: 200;
`
const Input = styled.input`
  padding: 20px;
  background: #e8e6e6;
  border: none;
  border-radius: 5px;
`
const TextArea = styled.textarea`
  padding: 20px;
  background: #e8e6e6;
  border: none;
  border-radius: 5px;
`
const Button = styled.button`
background: #da4ea2;
color: #fff;
font-weight: 500;
padding: 10px;
border-radius: 5px;
border: none;
font-weight: bold;
font-size: 18px;
cursor: pointer;

&:disabled{
  cursor: not-allowed;
  background: #d771ae;
}
`
const Right = styled.div`
  flex: 1;
  height: 100%;
`

export default Contact