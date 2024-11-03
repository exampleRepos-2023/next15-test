'use client'
import { CldImage, CldUploadWidget } from 'next-cloudinary'
import { useState } from 'react'

interface CloudinaryResult {
  public_id: string
}

const UploadPage = () => {
  const [publicID, setPublicID] = useState('')

  return (
    <>
      {publicID && (
        <CldImage src={publicID} width={400} height={400} alt='image' />
      )}
      <CldUploadWidget
        uploadPreset='ut1a376v'
        options={{
          sources: ['local'],
          multiple: false,
        }}
        onSuccess={(result, widget) => {
          if (result.event !== 'success') return

          const info = result.info as CloudinaryResult
          setPublicID(info.public_id)
        }}>
        {({ open }) => {
          return (
            <button className='btn btn-primary' onClick={() => open()}>
              Upload
            </button>
          )
        }}
      </CldUploadWidget>
    </>
  )
}
export default UploadPage
