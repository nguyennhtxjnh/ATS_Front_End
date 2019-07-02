import axios from 'axios'

export default {
  namespaced: true,
  state: {
    status: '',
    token1: localStorage.getItem('token1') || '',
    email1: '',
    roleId1: '',
    fullName1: '',

    token2: localStorage.getItem('token2') || '',
    email2: '',
    roleId2: '',
    fullName2: '',
  },
  mutations: {
    REQUEST (state) {
      state.status = 'loading'
    },
    SUCCESS1 (state, token) {
      state.status = 'success'
      state.token1 = token
    },
    SUCCESS2 (state, token) {
      state.status = 'success'
      state.token2 = token
    },
    ERROR (state) {
      state.status = 'error'
    },
    LOGOUT (state) {
      state.status = ''
      state.token1 = ''
      state.email1 = ''
      state.roleId1 = ''
      state.fullName1 = ''

      state.token2 = ''
      state.email2 = ''
      state.roleId2 = ''
      state.fullName2 = ''
    },
    INIT1 (state, {email, roleId, fullName}) {
      state.status = 'success'
      state.email1 = email
      state.roleId1 = roleId
      state.fullName1 = fullName
    },
    INIT2 (state, {email, roleId, fullName}) {
      state.status = 'success'
      state.email2 = email
      state.roleId2 = roleId
      state.fullName2 = fullName
    },

  },
  getters: {
    isLoggedIn1: state => !!state.token1,
    isLoggedIn2: state => !!state.token2,
    isInit1: state => !!state.email1 && !!state.roleId1,
    isInit2: state => !!state.email2 && !!state.roleId2,
    // isAdmin: state => state.roleId === 'ADMIN',
    // isManager: state => state.roleId === 'MANAGER',
    // isStaff: state => state.roleId === 'STAFF',
    // isArchivist: state => state.roleId === 'ARCHIVIST',npm
    email1: state => state.email1,
    roleId1: state => state.roleId1,
    fullName1: state => state.fullName1,

    email2: state => state.email2,
    roleId2: state => state.roleId2,
    fullName2: state => state.fullName2,
  },
  actions: {
    LOGIN1 ({commit}, user) {
      return new Promise((resolve, reject) => {
        commit('REQUEST')
        axios({url: 'http://localhost:8080/user/login', data: user, method: 'POST'})
          .then(response => {

            const token = response.data.data.accessToken
            console.log(response)
            if (response.data.data.roleId === 1) {
              localStorage.setItem('token1', token)
              commit('SUCCESS1', token)
            } else {
              reject()
            }

            console.log('log success ')
            resolve(response)
          })
          .catch(error => {
            commit('ERROR')
            localStorage.removeItem('token1')
            reject(error)
          })
      })
    },
    LOGIN2 ({commit}, user) {
      return new Promise((resolve, reject) => {
        commit('REQUEST')
        axios({url: 'http://localhost:8080/user/login', data: user, method: 'POST'})
          .then(response => {

            const token = response.data.data.accessToken

            if (response.data.data.roleId === 2) {
              localStorage.setItem('token2', token)
              commit('SUCCESS2', token)
            } else {
              reject()
            }

            console.log('log success ')
            resolve(response)
          })
          .catch(error => {
            commit('ERROR')
            localStorage.removeItem('token2')
            reject(error)
          })
      })
    },
    LOGINGOOGLE ({commit}, user) {
      return new Promise((resolve, reject) => {
        commit('REQUEST')
        axios({url: 'http://localhost:8080/user/loginGoogle', data: user, method: 'POST'})
          .then(response => {
            const token = response.data.data.accessToken
            console.log(response)
            localStorage.setItem('token1', token)
            commit('SUCCESS1', token)
            console.log('log success ')
            resolve(response)
          })
          .catch(error => {
            commit('ERROR')
            localStorage.removeItem('token1')
            reject(error)
          })
      })
    },
    LOGOUT1 ({commit}) {
      return new Promise((resolve) => {
        commit('LOGOUT')
        localStorage.removeItem('token1')
        resolve()
      })
    },
    LOGOUT2 ({commit}) {
      return new Promise((resolve) => {
        commit('LOGOUT')
        localStorage.removeItem('token2')
        resolve()
      })
    },
    INIT1 ({commit}) {
      return new Promise((resolve, reject) => {
        commit('REQUEST')
        // await axios.interceptors.request.use(
        //   (config) => {
        //     // console.log(config);
        //     let token = localStorage.getItem('token1');
        //     if (token) {
        //       config.headers['accessToken'] = `${token}`;
        //     }
        //     else {
        //       config.headers['accessToken'] = "";
        //     }
        //     return config;
        //   },
        //   (error) => {
        //     return Promise.reject(error);
        //   }
        // );
        let token = localStorage.getItem('token1')
        if (!token) {
          token = '';
        }
        let config = {
          headers: {
            accessToken: token
          }
        }
        axios.post('http://localhost:8080/user/checkLogin',null,config)
          .then(response => {
            const email = response.data.data.email
            const roleId = response.data.data.roleId
            const fullName = response.data.data.fullname
            commit('INIT1', {email, roleId, fullName})
            resolve(response)
          })
          .catch(error => {
            commit('ERROR')
            reject(error)
          })
      })
    },

    INIT2 ({commit}) {
      return new Promise( (resolve, reject) => {
        commit('REQUEST')
        // await axios.interceptors.request.use(
        //   (config) => {
        //     // console.log(config);
        //     let token = localStorage.getItem('token2')
        //     console.log(token)
        //     if (token) {
        //       config.headers['accessToken'] = `${token}`
        //       console.log(config.headers['accessToken'])
        //     } else {
        //       config.headers['accessToken'] = ''
        //     }
        //     console.log(config)
        //     console.log(config.headers['accessToken'])
        //     return config
        //   },
        //   (error) => {
        //     return Promise.reject(error)
        //   }
        // )

        let token = localStorage.getItem('token2')
        if (!token) {
          token = '';
        }
        let config = {
          headers: {
            accessToken: token
          }
        }
        axios.post('http://localhost:8080/user/checkLogin',null,config)
          .then(response => {
            // console.log(response)
            const email = response.data.data.email
            const roleId = response.data.data.roleId
            const fullName = response.data.data.fullname
            commit('INIT2', {email, roleId, fullName})
            // console.log(email + "," + roleId + "," + fullName)
            resolve(response)
          })
          .catch(error => {
            commit('ERROR')
            reject(error)
          })
      })
    }

  }
}
