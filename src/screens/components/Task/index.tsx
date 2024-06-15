import React from 'react'

import {
  Check,
  Container,
  Delete,
  ImageCheck,
  ImageDelete,
  TextTask
} from './styles'

type Props = {
  task: string
  onRemove: () => void
  onCheck: () => void
}

export function Task({ task, onRemove, onCheck }: Props) {
  return (
    <Container>
      <Check onPress={onCheck}>
        <ImageCheck source={require('../../../image/check.png')} />
      </Check>

      <TextTask>{task}</TextTask>

      <Delete onPress={onRemove}>
        <ImageDelete source={require('../../../image/trash.png')} />
      </Delete>
    </Container>
  )
}
