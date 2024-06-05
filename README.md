# Documentação do Projeto de Gerenciamento de Tarefas

## Índice

1. [Objetivo do Projeto](#objetivo-do-projeto)
2. [Tecnologias Utilizadas](#tecnologias-utilizadas)
3. [Descrição do Projeto](#descrição-do-projeto)
   - [Funcionalidades](#funcionalidades)
4. [Frontend](#frontend)
   - [React](#react)
   - [Vite](#vite)
   - [Styled-Components](#styled-components)
5. [Backend](#backend)
6. [Deploy](#deploy)
   - [Vercel](#vercel)
   - [Netlify](#netlify)
7. [Requisitos Técnicos](#requisitos-técnicos)
8. [Possíveis Extensões](#possíveis-extensões)

## Objetivo do Projeto

Desenvolver uma aplicação web para gerenciar tarefas, permitindo ao usuário criar, editar e excluir tarefas, além de visualizar uma lista de tarefas existentes.

## Tecnologias Utilizadas

- **Frontend**:
  - React
  - Styled-Components
  - Vite

## Descrição do Projeto

A aplicação será uma lista de tarefas simples, com as seguintes funcionalidades:

### Funcionalidades

- **Página inicial**:
  - Exibe uma lista de todas as tarefas existentes, permitindo que o usuário as visualize e as marque como concluídas.
  - Botão "Adicionar tarefa", que leva o usuário a uma página de criação de tarefas.

- **Página de criação de tarefas**:
  - Permite ao usuário adicionar uma nova tarefa à lista.
  - Formulário com campos para título da tarefa, descrição, data de conclusão e prioridade (alta, média, baixa).

- **Página de edição de tarefas**:
  - Permite ao usuário editar uma tarefa existente.
  - Formulário com os mesmos campos da página de criação de tarefas.

- **Página de exclusão de tarefas**:
  - Permite ao usuário excluir uma tarefa existente da lista.

## Frontend

### React

React será utilizado para construir a interface do usuário, oferecendo uma maneira eficiente de criar componentes reutilizáveis.

### Vite

Vite será utilizado como a ferramenta de construção, proporcionando um ambiente de desenvolvimento rápido e eficiente com suporte nativo a TypeScript.

### Styled-Components

Styled-Components será utilizado para estilizar os componentes do React, permitindo a utilização de CSS-in-JS.

#### Estrutura de Pastas

```bash
frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── App.tsx
│   ├── index.tsx
│   └── vite-env.d.ts
├── package.json
└── tsconfig.json
```

### Exemplos de Código

#### Componente de Tarefa (components/Task.tsx)

```typescript
import styled from 'styled-components';

const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
`;

const TaskTitle = styled.h2`
  margin: 0;
`;

const TaskDescription = styled.p`
  margin: 5px 0;
`;

interface TaskProps {
  title: string;
  description: string;
  dueDate: string;
  priority: string;
  completed: boolean;
}

const Task: React.FC<TaskProps> = ({ title, description, dueDate, priority, completed }) => (
  <TaskContainer>
    <TaskTitle>{title}</TaskTitle>
    <TaskDescription>{description}</TaskDescription>
    <p>Due Date: {dueDate}</p>
    <p>Priority: {priority}</p>
    <p>Status: {completed ? 'Completed' : 'Pending'}</p>
  </TaskContainer>
);

export default Task;
```

## Backend

O backend será desenvolvido com Node, ExpressJS, PostgreSQL e Prisma, fornecendo uma /API RESTful para a aplicação frontend.

- [Diretório Backend](https://github.com/Nthliacc/TaskFlow-backend)

## Deploy

### Vercel

Para realizar o deploy no Vercel, siga os passos abaixo:

1. Crie uma conta no [Vercel](https://vercel.com/).
2. Conecte seu repositório GitHub, GitLab ou Bitbucket.
3. Configure as variáveis de ambiente no painel de controle do Vercel.
4. Clique em "Deploy" para iniciar o processo.

### Netlify

Para realizar o deploy no Netlify, siga os passos abaixo:

1. Crie uma conta no [Netlify](https://www.netlify.com/).
2. Conecte seu repositório GitHub, GitLab ou Bitbucket.
3. Configure as variáveis de ambiente no painel de controle do Netlify.
4. Clique em "Deploy" para iniciar o processo.

## Requisitos Técnicos

- A aplicação deve ser desenvolvida usando React para a interface do usuário e Node, ExpressJS, PostgreSQL e Prisma para o backend.
- O projeto deve ser acessível online.
- Pode ser utilizado Docker e Docker Compose para empacotar e distribuir a aplicação.

## Possíveis Extensões

- Autenticação de usuários e permissões de acesso.
- Notificações por e-mail.
- Integração com outras ferramentas, como o Google Agenda.
- Utilização de Docker e Docker Compose para empacotar e distribuir a aplicação.

## Conclusão

Esta documentação fornece uma visão geral do projeto de gerenciamento de tarefas, incluindo o objetivo, tecnologias utilizadas, descrição do projeto, detalhes sobre o backend e frontend, instruções de deploy e possíveis extensões. Siga as instruções para configurar e desenvolver a aplicação, e considere implementar as extensões para adicionar funcionalidades adicionais.
