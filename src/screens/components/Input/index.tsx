import React, { useState } from 'react'

import { ButtonAdd, Container, ImageAdd, Input } from './styles'

interface TodoInputProps {
  addTask: (task: string) => void
}

export function TodoInput({ addTask }: TodoInputProps) {
  const [task, setTask] = useState('')
  const [active, setActive] = useState(false)

  function handleAddNewTask() {
    if (task != '') {
      addTask(task)
      setTask('')
    } else return
  }

  return (
    <Container>
      <Input
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        value={task}
        onChangeText={setTask}
        onFocus={() => setActive(true)}
        active={active}
        onBlur={() => setActive(false)}
      />
      <ButtonAdd onPress={handleAddNewTask}>
        <ImageAdd source={require('../../../image/plus.png')} />
      </ButtonAdd>
    </Container>
  )
}
