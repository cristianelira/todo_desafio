import React from 'react'
import { Image } from 'react-native'

import { Container, Logo } from './styles'

export function Header() {
  return (
    <Container>
      <Logo source={require('../../../image/Logo.png')} />
    </Container>
  )
}
