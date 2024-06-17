import React from 'react'

import {
  Container,
  EmptyContainer,
  ImageEmpty,
  TextEmpty,
  SubTextEmpty
} from './styles'
import { TaskItem } from '../Task'
import { FlatList } from 'react-native'

export interface Task {
  id: number
  title: string
  done: boolean
}

interface TasksListProps {
  tasks: Task[]
  toggleTaskDone: (id: number) => void
  removeTask: (id: number) => void
}

export function TaskList({
  tasks,
  toggleTaskDone,
  removeTask
}: TasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      contentContainerStyle={{ paddingBottom: 24 }}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => {
        return (
          <TaskItem
            task={item}
            toggleTaskDone={toggleTaskDone}
            removeTask={removeTask}
          />
        )
      }}
      ListEmptyComponent={() => (
        <EmptyContainer>
          <ImageEmpty source={require('../../../image/Clipboard.png')} />
          <TextEmpty>Você ainda não tem tarefas cadastradas</TextEmpty>
          <SubTextEmpty>
            Crie tarefas e organize seus itens a fazer
          </SubTextEmpty>
        </EmptyContainer>
      )}
      style={{
        marginTop: 32
      }}
    />
  )
}
