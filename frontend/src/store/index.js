import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios);

Vue.axios.defaults.baseURL = 'http://localhost:3000/';

export default new Vuex.Store({
  state: {
    users: [],
    user: {},
    videos: [],
    comments:[],
    currentVideo: {}
  },
  mutations: {
    SAVE_USERS(state, users) {
      state.users = users;
    },
    SAVE_USER(state, user) {
      state.user = user;
    },
    SAVE_VIDEOS(state, videos) {
      state.videos = videos;
    },
    SAVE_VIDEO(state, video) {
      state.currentVideo = video;
    },
    SAVE_COMMENTS(state, comments) {
      state.comments = comments;
    }
  },
  actions: {
    getUsers({commit}) {
      Vue.axios.get('users').then(result => {
        commit('SAVE_USERS', result.data);
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    },
    getUser({commit}, id) {
      Vue.axios.get(`users/${id}`).then(result => {
        commit('SAVE_USER', result.data);
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    },
    getVideos({commit}) {
      Vue.axios.get('videos').then(result => {
        commit('SAVE_VIDEOS', result.data);
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    },
    getVideo({commit}, id) {
      Vue.axios.get(`videos/${id}`).then(result => {
        commit('SAVE_VIDEO', result.data);
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    },
    incrementVideoField({commit}, id, field) {
      Vue.axios.put(`videos/${id}/${field}`).then(result => {
          commit('SAVE_VIDEO', result.data);
      }).catch(error => {
          throw new Error(`API ${error}`);
      });
    },
    getVideoComments({commit}, id) {
      Vue.axios.get(`comments/${id}`).then(result => {
        commit('SAVE_COMMENTS', result.data);
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    }
  },
  getters: {
    user: state => state.user,
    currentVideo: state => state.currentVideo
  },
  modules: {
  }
})
