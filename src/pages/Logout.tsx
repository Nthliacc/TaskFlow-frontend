import Button from '../components/common/Button'

const Logout = () => {
  const handleLogout = () => {
    localStorage.removeItem('token')
  }

  return (
    <div>
      <h1>Logout</h1>
      <p>Até logo!</p>
      <Button onClick={handleLogout}>Sair</Button>
    </div>
  )
}

export default Logout
