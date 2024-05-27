export interface TaskResponse {
  id: string
  title: string
  description: string
  date?: string | null
  priority: PriorityType
  user?: {
    id: number
    name: string
  } | null
  completed: boolean
}

export interface Task {
  id?: string
  title: string
  description: string
  date: string | null
  priority: PriorityType
  user: {
    id: number
    name: string
  } | null
  completed?: boolean
}

export interface TaskContextType {
  tasks: TaskResponse[]
  fetchTasks: () => void
  fetchTaskId: (id: TaskResponse['id']) => Promise<TaskResponse>
  addTask: (task: Task) => void
  updateTask: (id: Task['id']) => void
  putTask: (task: Task) => void
  deleteTask: (id: Task['id']) => void
}

export type PriorityType = "Baixa" | "Media" | "Alta"