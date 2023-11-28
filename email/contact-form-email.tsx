import React from 'react'
import {Html,Body,Head,Heading,Hr,Container,Preview,Section,Text} from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'

type ContactFormEmailProps={
  message:string,
  email:string,
}
const ContactFormEmail = ({message,email}:ContactFormEmailProps) => {


  return (
    <Html>
      <Head/>
      <Preview>New message from your portfolio</Preview>
      <Tailwind >
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className='bg-white borderBlack my-10 px-10 py-4 rounded-md'>
              <Heading className='leading-tight'>you recieved the following message frpm the contact form</Heading>
              <Text>{message}</Text>
              <Hr/>
              <Text>the sender's email is :{email}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default ContactFormEmail