import fetcher from './fetcher'

export const auth = (mode: 'signin' | 'signup', body) => {
  return fetcher(`/${mode}`, body)
}
