interface Props {
  params: {
    id: number
  }
}

function UserDetailPage({ params: { id } }: Props) {
  return <div>UserDetailPage {id}</div>
}
export default UserDetailPage
