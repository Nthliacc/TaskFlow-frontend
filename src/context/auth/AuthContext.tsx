import React, { createContext, useState, ReactNode } from 'react'
import { AuthContextType } from './types'
import axios from 'axios'

const baseURL = import.meta.env.VITE_BASE_URL

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState('' as string | null)
  const token = localStorage.getItem('token')

  const verifyToken = async () => {
    if (!token) {
      setIsAuthenticated(false)
      return
    }
    try {
      const res = await axios.get(`${baseURL}/auth/verify`, {
        headers: {
          Authorization: `${token}`,
        },
      })
      if (res) {
        setIsAuthenticated(true)
        // localStorage.setItem('token', res.data.token)
      }
    } catch (error) {
      localStorage.removeItem('token')
      setIsAuthenticated(false)
    }
  }

  const login = async ({
    email,
    password,
  }: {
    email: string
    password: string
  }) => {
    try {
      const response = await axios.post(`${baseURL}/auth/login`, {
        email,
        password,
      })
      localStorage.setItem('token', response.data.token)
      setIsAuthenticated(true)
      setError(null)
    } catch (error: any) { // eslint-disable-line
      setIsAuthenticated(false)
      setError(error.response.data.error)
      throw error
    }
  }

  const logout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('token')
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, error, setError, verifyToken }}
    >
      {children}
    </AuthContext.Provider>
  )
}
