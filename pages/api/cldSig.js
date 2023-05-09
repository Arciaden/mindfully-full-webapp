import { v2 as cloudinary } from 'cloudinary'

export default async function handler(req, res) {
  const body = JSON.parse(req.body) || {}
  const { paramsToSign } = body

  const signatureConfig = {
    signature: process.env.CLOUDINARY_API_KEY,
  }

  try {
    const signature = cloudinary.utils.sign_request(
      paramsToSign,
      signatureConfig,
      process.env.CLOUDINARY_API_SECRET
    )
    res.status(200).json({
      signature,
    })
  } catch (error) {
    res.status(500).json({
      error: e.message,
    })
  }
}
