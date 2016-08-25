import axios from 'axios'
import RouteActions from './actions/RouteActions'
import UserActions from './actions/UserActions'
import ServerActions from './actions/ServerActions'

const API = {
  register(user) {
    axios.post('/api/users/register', user)
      .then(res => {
        RouteActions.route('/login');
      })
      .catch(console.error)
  },

  login(user) {
    axios.post('/api/users/login', user)
      .then(UserActions.getProfile)
      .catch(console.error)
  },

  getProfile() {
    axios.get('/api/users/profile')
      .then(res => res.data)
      .then(ServerActions.receiveProfile)
      .catch(console.error)
  }

}

export default API;
