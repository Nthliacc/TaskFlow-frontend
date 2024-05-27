import React from 'react'
import styled from 'styled-components'
import { Task, TaskResponse, PriorityType } from '../context/task/types'
import Icon from './common/Icon'
import { Link } from 'react-router-dom'

interface TaskItemProps {
  task: TaskResponse
  onComplete: (id: Task['id']) => void
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onComplete }) => {
  const [showDescription, setShowDescription] = React.useState(false)
  const date = task.date ? new Date(task.date).toLocaleDateString() : ''

  const ElementDescription = () => {
    const descriptionLength = task.description.length > 380 ? true : false
    const description = !showDescription
      ? task.description.slice(0, 380) + '...'
      : task.description

    return (
      <Description>
        {description}
        {descriptionLength && (
          <ButtonSeeMoreLess
            onClick={() => setShowDescription(!showDescription)}
          >
            {showDescription ? 'ver menos' : 'ver mais'}
          </ButtonSeeMoreLess>
        )}
      </Description>
    )
  }

  return (
    <TaskItemContainer
      completed={task.completed}
      descriptionLength={showDescription}
    >
      <Item>
        <CheckBox
          type="checkbox"
          checked={task.completed ? true : false}
          onChange={() => onComplete(task.id)}
        />
        <TextBox>
          <Title completed={task.completed}>
            {task.title} <DateItem>{date}</DateItem>{' '}
            <Tag status={task.priority}>{task.priority}</Tag>
          </Title>
          <ElementDescription />
        </TextBox>
      </Item>
      <Actions>
        <EditButton as={Link} to={`/authentic/edit/${task.id}`}>
          <Icon name="edit" />
        </EditButton>
        <DeleteButton as={Link} to="/authentic/delete">
          <Icon name="delete" />
        </DeleteButton>
      </Actions>
    </TaskItemContainer>
  )
}

const TaskItemContainer = styled.div<{
  completed: boolean
  descriptionLength: boolean
}>`
  opacity: ${({ completed }) => (completed ? 0.5 : 1)};
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 8px;
  gap: 8px;
  border-bottom: 1px solid #ccc;
  height: ${({ descriptionLength }) => (!descriptionLength ? '100px' : 'auto')};

  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
`

const Item = styled.div`
  display: flex;
  align-items: start;
  gap: 8px;
  width: 100%;
`
const DateItem = styled.span`
  font-size: 12px;
  color: #666;
  padding-left: 10px;
  align-self: end;
`

const Tag = styled.span<{ status: PriorityType }>`
  font-size: 12px;
  color: white;
  background-color: ${({ theme, status }) =>
    status === 'Alta'
      ? theme.colors.danger
      : status === 'Media'
        ? theme.colors.warning
        : theme.colors.success};
  padding: 2px 4px;
  border-radius: 2px;
  align-self: end;
`

const CheckBox = styled.input`
  cursor: pointer;
`
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Title = styled.span<{ completed: boolean }>`
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
  font-size: 16px;
  width: 100%;
  font-weight: 600;
`

const Description = styled.p`
  font-size: 14px;
  color: #666;
  width: 100%;
`
const ButtonSeeMoreLess = styled.span`
  margin-left: 10px;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
  font-size: 14px;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`
const Actions = styled.div`
  display: flex;
  gap: 10px;
`

const EditButton = styled.button`
  background-color: ${(props) => props.theme.colors.tertiary};
  color: white;
  border: none;
  border-radius: 2px;
  padding: 8px;
  cursor: pointer;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`

const DeleteButton = styled.button`
  background-color: ${(props) => props.theme.colors.danger};
  color: white;
  border: none;
  border-radius: 2px;
  padding: 8px;
  cursor: pointer;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`

export default TaskItem
