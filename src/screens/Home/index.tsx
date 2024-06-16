import React, { useState } from 'react'

import {
  Container,
  CountNumber,
  Counters,
  CountersView,
  Created,
  Done,
  Tasks
} from './styles'
import { Header } from '../components/Header'
import { Task, TaskList } from '../components/TaskList'
import { Alert } from 'react-native'
import { TodoInput } from '../components/Input'

export function Home() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState<Task[]>([])

  function handleTaskAdd(newTaskTitle: string) {
    const data = {
      id: Number(new Date().getTime()),
      title: newTaskTitle,
      done: false
    }
    const updatedTasks = tasks.map(task => ({ ...task }))
    const checkTask = updatedTasks.find(item => item.title === newTaskTitle)

    if (!checkTask) {
      setTasks(oldState => [...oldState, data])
    } else {
      Alert.alert('Você não pode cadastrar uma task com o mesmo nome!')
    }
  }

  function handleToggleTaskDone(id: number) {
    const updatedTasks = tasks.map(task => ({ ...task }))
    const toggleTask = updatedTasks.find(item => item.id === id)

    if (!toggleTask) return

    toggleTask.done = !toggleTask.done
    setTasks(updatedTasks)
  }

  function handleTaskRemove(id: number) {
    setTasks(prevState => prevState.filter(task => task.id !== id))
  }

  return (
    <Container>
      <Header />

      <TodoInput addTask={handleTaskAdd} />

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
        <TaskList
          tasks={tasks}
          toggleTaskDone={handleToggleTaskDone}
          removeTask={handleTaskRemove}
        />
      </Tasks>
    </Container>
  )
}
