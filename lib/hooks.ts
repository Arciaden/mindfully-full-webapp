import useSWR from 'swr'
import fetcher from './fetcher'
import { useRouter } from 'next/router'

//This custom hook is specific to using SWR

export const useProfile = () => {
  //swr takes a cache key usually a route and a fetcher function
  const { data, error } = useSWR('/profile', fetcher)

  return {
    user: data,
    isLoading: !data && !error,
    isError: error,
  }
}

// Brain isn't wanting to work, I also need to do quite a bit of research to and get a better understanding of how these hooks work
// And how to make them dynamic.
// export const useClient = () => {
//   const router = useRouter()
//   const { id } = router.query
//   const { data, error } = useSWR(id ? `/getClient/${id}` : null, fetcher)

//   return {
//     client: data,
//     isLoading: !data && !error,
//     isError: error,
//   }
// }

export const useClientContext = () => {}
