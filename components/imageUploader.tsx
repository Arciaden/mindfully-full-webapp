import Script from 'next/script'
import { CldUploadWidget, CldImage } from 'next-cloudinary'
import { Button, Text } from '@chakra-ui/react'
import { useState } from 'react'

const ImageUploader = () => {
  const [previewImg, setPreviewImg] = useState('')
  const [imgUrl, setImgUrl] = useState('')

  return (
    <>
      <Script
        src="https://upload-widget.cloudinary.com/global/all.js"
        type="text/javascript"
      />
      <CldUploadWidget
        signatureEndpoint="/api/cldSig"
        onUpload={(result, widget) => setPreviewImg(result.info.public_id)}
      >
        {({ open }) => {
          function handleOnClick(e) {
            e.preventDefault()
            open()
          }
          return (
            <>
              {imgUrl.length > 0 ? (
                <CldImage
                  width="100"
                  height="100"
                  src={previewImg}
                  alt="Profile image for new client"
                />
              ) : (
                <Button onClick={handleOnClick}>Upload an Image</Button>
              )}
            </>
          )
        }}
      </CldUploadWidget>
    </>
  )
}

export default ImageUploader
