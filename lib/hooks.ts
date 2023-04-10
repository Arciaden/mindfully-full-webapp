import useSWR from 'swr'
import fetcher from './fetcher'

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

// export const useClient = (id) => {
//   const { data, error } = useSWR(`/getClient/${id}`, fetcher)

//   return {
//     client: data,
//     isLoading: !data && !error,
//     isError: error,
//   }
// }

export const useClientContext = () => {}
