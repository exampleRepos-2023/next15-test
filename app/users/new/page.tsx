'use client'

import { useRouter } from 'next/navigation'

function NewUserPage() {
  const router = useRouter()

  return (
    <button className='btn btn-primary' onClick={() => router.push('/users')}>
      Add new user
    </button>
  )
}
export default NewUserPage
