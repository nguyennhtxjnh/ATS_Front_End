import axios from 'axios'

export default {
    namespaced: true,
    state: {
        status: '',
        token: localStorage.getItem('token') || '',
        email: '',
        roleId: '',
        fullName: '',
    },
    mutations: {
        REQUEST(state) {
            state.status = 'loading';
        },
        SUCCESS(state, token) {
            state.status = 'success';
            state.token = token;
        },
        ERROR(state) {
            state.status = 'error';
        },
        LOGOUT(state) {
            state.status = '';
            state.token = '';
            state.email = '';
            state.roleId = '';
          state.fullName = '';
        },
        INIT(state, {email, roleId, fullName}) {
            state.status = 'success';
            state.email = email;
            state.roleId = roleId;
            state.fullName = fullName;
        }
    },
    getters: {
        isLoggedIn: state => !!state.token,
        isInit: state => !!state.email && !!state.roleId,
        // isAdmin: state => state.roleId === 'ADMIN',
        // isManager: state => state.roleId === 'MANAGER',
        // isStaff: state => state.roleId === 'STAFF',
        // isArchivist: state => state.roleId === 'ARCHIVIST',npm
        email: state => state.email,
        roleId: state => state.roleId,
        fullName: state => state.fullName,
    },
    actions: {
        LOGIN({commit}, user) {
            return new Promise((resolve, reject) => {
                commit('REQUEST');
                axios({url: 'http://localhost:8080/user/login', data: user, method: 'POST'})
                    .then(response => {

                        const token = response.data.data.accessToken;
                        console.log(response);
                        localStorage.setItem('token', token);
                        commit('SUCCESS', token);
                        console.log('log success ');
                        resolve(response);
                    })
                    .catch(error => {
                        commit('ERROR');
                        localStorage.removeItem('token');
                        reject(error);
                    })
            })
        },
        LOGINGOOGLE({commit}, user) {
          return new Promise((resolve, reject) => {
            commit('REQUEST');
            axios({url: 'http://localhost:8080/user/loginGoogle', data: user, method: 'POST'})
              .then(response => {
                const token = response.data.data.accessToken;
                console.log(response);
                localStorage.setItem('token', token);
                commit('SUCCESS', token);
                console.log('log success ');
                resolve(response);
              })
              .catch(error => {
                commit('ERROR');
                localStorage.removeItem('token');
                reject(error);
              })
          })
        },
        LOGOUT({commit}) {
            return new Promise((resolve) => {
                commit('LOGOUT');
                localStorage.removeItem('token');
                resolve()
            })
        },
        INIT({commit}) {
          return new Promise((resolve, reject) => {
            commit('REQUEST');
            axios.interceptors.request.use(
              (config) => {
                console.log(config);
                let token = localStorage.getItem('token');
                if (token) {
                  config.headers['accessToken'] = `${token}`;
                }
                else {
                  config.headers['accessToken'] = "";
                }
                return config;
              },
              (error) => {
                return Promise.reject(error);
              }
            );
            axios({url: 'http://localhost:8080/user/checkLogin', method: 'POST'})
              .then(response => {
                const email = response.data.data.email;
                const roleId = response.data.data.roleId;
                const fullName = response.data.data.fullname;
                commit('INIT',{email, roleId, fullName});
                resolve(response);
              })
              .catch(error => {
                commit('ERROR');
                reject(error);
              })
          })
        }
    }
};
