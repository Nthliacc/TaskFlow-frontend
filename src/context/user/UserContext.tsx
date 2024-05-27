import React, { createContext, useState, ReactNode } from 'react'
import { User, UserContextType } from './types'
import api from '../../services/api'

const baseURL = import.meta.env.VITE_BASE_URL + '/users'

export const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('')

  const fetchUsers = () => {
    api
      .get(baseURL + '/')
      .then((response) => setUsers(response.data))
      .catch((error) => setError(error))
  }

  const addUser = async (data: User) => {
    try {
      if (!data) return
      const response = await api.post(baseURL + '/signup', { ...data })
      setUsers([...users, response.data])
      setError('')
    } catch (error) {
      setError(error.response.data.message)
    }
  }

  const deleteUser = (id: string) => {
    api
      .delete(`${baseURL}/${id}`)
      .then(() => setUsers(users.filter((item) => item.id !== id)))
      .catch((error) => setError(error))
  }

  return (
    <UserContext.Provider value={{ users, addUser, deleteUser, fetchUsers, error }}>
      {children}
    </UserContext.Provider>
  )
}
