import { sort } from 'fast-sort'
import Link from 'next/link'

type User = {
  id: number
  name: string
  email: string
}

interface Props {
  sortOrder: string
}

async function UserTable({ sortOrder }: Props) {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    next: { revalidate: 10 },
  })

  const users: User[] = await res.json()

  const sortedUsers = sort(users).asc(
    sortOrder === 'email' ? (user) => user.email : (user) => user.name
  )

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>
            <Link href='/users?sortOrder=name'>NAME</Link>
          </th>
          <th>
            <Link href='/users?sortOrder=email'>EMAIL</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
export default UserTable
