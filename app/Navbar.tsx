'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

const Navbar = () => {
  const { status, data: session } = useSession()

  return (
    <div className='flex space-x-4 bg-gray-950 p-4'>
      <Link className='mr-5' href='/'>
        Next.js
      </Link>
      <Link href='/users'>Users</Link>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'authenticated' && (
        <div>
          {session?.user?.name}

          <Link href='/api/auth/signout' className='ml-3'>
            Logout
          </Link>
        </div>
      )}
      {status === 'unauthenticated' && (
        <Link href='/api/auth/signin'>Login</Link>
      )}
    </div>
  )
}
export default Navbar
