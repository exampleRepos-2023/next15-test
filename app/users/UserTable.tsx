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
  const res = await new Promise<Promise<Response>>((resolve) =>
    setTimeout(
      () => resolve(fetch('https://jsonplaceholder.typicode.com/users')),
      1000
    )
  ).then((res) => res)

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
