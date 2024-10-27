import Link from 'next/link'

type User = {
  id: number
  name: string
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
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
export default UsersPage
