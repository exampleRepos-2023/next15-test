import { notFound } from 'next/navigation'

interface Props {
  params: {
    id: number
  }
}

function UserDetailPage({ params: { id } }: Props) {
  if (id > 10) notFound()

  return <div>UserDetailPage {id}</div>
}
export default UserDetailPage
