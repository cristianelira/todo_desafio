import React, { useEffect, useState } from 'react'

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
  const [tasks, setTasks] = useState<Task[]>([])
  const [countTasks, setCountTasks] = useState(0)
  const [countTasksDone, setCountTasksDone] = useState(0)

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

  async function counter() {
    try {
      const countTasks = tasks.length
      const countTasksDone = tasks.filter(task => task.done === true).length
      setCountTasks(countTasks)
      setCountTasksDone(countTasksDone)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    counter()
  })

  return (
    <Container>
      <Header />

      <TodoInput addTask={handleTaskAdd} />

      <Counters>
        <CountersView>
          <Created>Criadas</Created>
          <CountNumber>{countTasks}</CountNumber>
        </CountersView>

        <CountersView>
          <Done>Concluídas</Done>
          <CountNumber>{countTasksDone}</CountNumber>
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
