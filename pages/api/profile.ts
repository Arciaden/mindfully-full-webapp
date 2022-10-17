import { validateRoute } from '../../lib/auth'

//calls the validate route function from the auth.ts file and returns the user object
export default validateRoute((req, res, user) => {
  res.json(user)
})
