import axios from 'axios'
import { createStore, action, thunk } from 'easy-peasy'

export const clientStore = createStore({
  clients: [],
  appointments: [],
  users: [],
})

export const clientModel = {
  clients: [],
  updateClient: action((state: any, payload) => {
    state.clients.push(payload)
  }),
  saveClient: thunk(async (actions: any, payload) => {
    const { data } = await axios.post('/client', payload)
    actions.updateClient(data)
  }),
}
