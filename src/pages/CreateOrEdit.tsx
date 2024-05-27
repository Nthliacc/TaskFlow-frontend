import styled from 'styled-components'
import InputForm from '../components/InputForm'
import Title from '../components/common/Title'
import { useParams } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

const CreateOrEdit = () => {
  const { id } = useParams()

  return (
    <Container>
        <Title>{id ? "Editar tarefa": "Criar nova tarefa"}</Title>
        <InputForm />
    </Container>
  )
}

export default CreateOrEdit
