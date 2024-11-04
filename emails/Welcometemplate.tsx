import {
  Body,
  Container,
  Html,
  Link,
  Preview,
  Tailwind,
  Text,
} from '@react-email/components'
import { CSSProperties } from 'react'

const Welcometemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome!</Preview>
      <Tailwind>
        <Body className='bg-white'>
          <Container>
            <Text className='font-bold'>
              Welcome to our store. We are glad that you joined us. Please click
              on the button below to activate your account.
            </Text>
            <br />
            <Link href='#'>Activate your account</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default Welcometemplate
