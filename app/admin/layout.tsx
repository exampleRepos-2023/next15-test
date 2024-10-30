interface Props {
  children: React.ReactNode
}

function AdminLayout({ children }: Props) {
  return (
    <div className='flex'>
      <aside className='bg-gray-950 p-5 mr-5'>Admin Sidebar</aside>
      <div>{children}</div>
    </div>
  )
}
export default AdminLayout
