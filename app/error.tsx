'use client'

interface Props {
  error: Error
  reset: () => void
}

const ErrorPage = ({ error, reset }: Props) => {
  console.error(error)

  return (
    <>
      <div>An unexpected error occurred </div>
      <button onClick={() => reset()}>Try again</button>
    </>
  )
}

export default ErrorPage
