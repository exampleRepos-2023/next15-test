import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex bg-gray-950'>
      <Link className='mr-5' href='/'>
        Next.js
      </Link>
      <Link href='/users'>Users</Link>
    </div>
  )
}
export default Navbar
