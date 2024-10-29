import UserTable from './UserTable'

interface Props {
  searchParams: {
    sortOrder: string
  }
}

const UsersPage = async ({ searchParams }: Props) => {
  const { sortOrder } = await searchParams

  return (
    <>
      <h1 className='text-2xl uppercase'>Users</h1>
      <UserTable sortOrder={sortOrder} />
    </>
  )
}
export default UsersPage
