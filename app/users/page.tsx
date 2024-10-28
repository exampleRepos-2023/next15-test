import Link from 'next/link'

type User = {
  id: number
  name: string
  email: string
}

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    next: { revalidate: 10 },
  })
  const users: User[] = await res.json()

  return (
    <>
      <h1 className='text-2xl uppercase'>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
export default UsersPage
