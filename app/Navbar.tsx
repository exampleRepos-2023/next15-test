import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex space-x-4 bg-gray-950 p-4'>
      <Link className='mr-5' href='/'>
        Next.js
      </Link>
      <Link href='/users'>Users</Link>
      <Link href='/api/auth/signin'>Login</Link>
    </div>
  )
}
export default Navbar
