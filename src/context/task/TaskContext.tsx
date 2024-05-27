import React, { createContext, useState, ReactNode } from 'react';
import axios from 'axios';
import { Task, TaskContextType, TaskResponse } from './types';
import api from '../../services/api';


export const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<TaskResponse[]>([]);
  const baseURL = '/tasks';

  const fetchTasks = () => {
    api.get(baseURL)
      .then(response => setTasks(response.data))
      .catch(error => console.error(error));
  };

  const fetchTaskId = async (id: TaskResponse['id']) => {
    try {
      const res = await api.get(`${baseURL}/${id}`)
      return {
        ...res.data,
        date: res.data.date || null,
        user: res.data.user || null,
      };
    } catch (error) {
      console.error(error);
    }
  };

  const addTask = (data: Task) => {
    if (!data) return;

    api.post(baseURL, { data })
      .then(response => setTasks([...tasks, response.data]))
      .catch(error => console.error(error));
  };

  const updateTask = (id: Task['id']) => {
    const taskFind = tasks.find(task => task.id === id);
    if (taskFind) {
      api.put(`${baseURL}/${id}`, { ...taskFind, completed: !taskFind.completed })
        .then(response => setTasks(tasks.map(t => t.id === id ? response.data : t)))
        .catch(error => console.error(error));
    }
  };

  const putTask = (data: Task) => {
    if (!data) return;

    api.put(`${baseURL}/${data.id}`, { ...data })
      .then(response => setTasks(tasks.map(task => task.id === data.id ? response.data : task))
      )
      .catch(error => console.error(error));
  };

  const deleteTask = (id: Task['id']) => {
    axios.delete(`${baseURL}/${id}`)
      .then(() => setTasks(tasks.filter(task => task.id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <TaskContext.Provider value={{ tasks, fetchTasks, fetchTaskId, addTask, updateTask, putTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
