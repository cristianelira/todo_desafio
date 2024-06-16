import React from 'react'

import {
  Check,
  Container,
  Delete,
  ImageCheck,
  ImageDelete,
  TextTask,
  TextTaskDone
} from './styles'

import { Task } from '../TaskList'

interface TaskItemProps {
  task: Task
  toggleTaskDone: (id: number) => void
  removeTask: (id: number) => void
}

export function TaskItem({ task, toggleTaskDone, removeTask }: TaskItemProps) {
  return (
    <Container>
      <Check onPress={() => toggleTaskDone(task.id)}>
        {task.done === true ? (
          <ImageCheck source={require('../../../image/checkOk.png')} />
        ) : (
          <ImageCheck source={require('../../../image/check.png')} />
        )}
      </Check>

      {task.done === true ? (
        <TextTaskDone>{task.title}</TextTaskDone>
      ) : (
        <TextTask>{task.title}</TextTask>
      )}

      <Delete onPress={() => removeTask(task.id)}>
        <ImageDelete source={require('../../../image/trash.png')} />
      </Delete>
    </Container>
  )
}
