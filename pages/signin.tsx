import Image from 'next/image'
import { Box, Flex, useMediaQuery } from '@chakra-ui/react'
//need to upload this to a cloud eventually
import SigninForm from '../components/signinForm'
import backgroundImage from '../public/yoga-mat.jpeg'

// const backgroundImageLoader = ({ src }) => {
//   return `https://res.cloudinary.com/deveraux-design/image/upload/v1666372207/Mindfully%20Full/${src}`
// }

//Im using classnames to make it easier to read. We can access these through css if needed but I'm going to try and avoid that
const Signin = () => {
  const [isMobile] = useMediaQuery('(max-width: 600px)')

  return (
    <Flex
      className="signin-wrapper"
      width="100vw"
      height="100vh"
      position="relative"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        className="overlay"
        width="100%"
        height="100%"
        position="absolute"
        backgroundColor="brand.overlay"
        top="0"
        left="0"
        zIndex="1"
      ></Box>
      <SigninForm mode="signin" />
      {/* When we are getting ready to launch to production. We can use cloudinary to host images and also use it as an image uploader. */}
      {/* <Image
        loader={backgroundImageLoader}
        className="signin-background-image"
        src="blue-yoga-mat-equipment-for-yoga-concept-health-2022-10-07-22-06-23-utc_foubp8.jpg"
        layout="fill"
        objectPosition={isMobile ? '95%' : '50%'}
        objectFit="cover"
      /> */}
      <Image
        // loader={backgroundImageLoader}
        className="signin-background-image"
        src={backgroundImage}
        layout="fill"
        objectPosition={isMobile ? '95%' : '50%'}
        objectFit="cover"
      />
    </Flex>
  )
}

Signin.authPage = true

export default Signin
