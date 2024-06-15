import React, { useState } from 'react'

import {
  ButtonAdd,
  Container,
  ContainerAdd,
  CountNumber,
  Counters,
  CountersView,
  Created,
  Done,
  ImageAdd,
  Input,
  Tasks
} from './styles'
import { Header } from '../components/Header'
import { Task } from '../components/Task'
import { FlatList } from 'react-native'

export function Home() {
  const [tasks, setTasks] = useState<string[]>([])
  const [taskDescr, setTaskDescr] = useState('')

  function handleTaskAdd() {
    setTasks(prevState => [...prevState, taskDescr])
    setTaskDescr('')
  }

  function handleTaskRemove(taskDescr: string) {
    setTasks(prevState => prevState.filter(tasks => tasks !== taskDescr))
  }

  return (
    <Container>
      <Header />
      <ContainerAdd>
        <Input
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onChangeText={text => setTaskDescr(text)}
          value={taskDescr}
        />
        <ButtonAdd onPress={handleTaskAdd}>
          <ImageAdd source={require('../../image/plus.png')} />
        </ButtonAdd>
      </ContainerAdd>
      <Counters>
        <CountersView>
          <Created>Criadas</Created>
          <CountNumber>0</CountNumber>
        </CountersView>

        <CountersView>
          <Done>Concluídas</Done>
          <CountNumber>0</CountNumber>
        </CountersView>
      </Counters>

      <Tasks>
        <FlatList
          data={tasks}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Task
              key={item}
              task={item}
              onRemove={() => handleTaskRemove(item)}
              onCheck={() => handleTaskRemove}
            />
          )}
        />
      </Tasks>
    </Container>
  )
}
