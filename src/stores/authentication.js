import axios from 'axios'

export default {
    namespaced: true,
    state: {
        status: '',
        token: localStorage.getItem('token') || '',
        email: '',
        roleId: '',
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
        },
        INIT(state, {email, roleId}) {
            state.status = 'success';
            state.email = email;
            state.roleId = roleId;
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
    },
    actions: {
        LOGIN({commit}, user) {
            return new Promise((resolve, reject) => {
                commit('REQUEST');
                axios({url: 'http://localhost:8080/user/login', data: user, method: 'POST'})
                    .then(response => {

                        const token = response.data.dto.accessToken;
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
            axios({url: 'http://localhost:8080/user/checkLogin', method: 'POST'})
              .then(response => {
                const email = response.data.dto.email;
                const roleId = response.data.dto.roleId;
                console.log(email, roleId);
                commit('INIT',{email, roleId});
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
