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
    videos: [],
    comments:[]
  },
  mutations: {
    SAVE_USERS(state, users) {
      state.users = users;
    },
    SAVE_VIDEOS(state, videos) {
      state.videos = videos;
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
    getVideos({commit}) {
      Vue.axios.get('videos').then(result => {
        commit('SAVE_VIDEOS', result.data);
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    },
    getComments({commit}) {
      Vue.axios.get('comments').then(result => {
        commit('SAVE_COMMENTS', result.data);
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    }
  },
  modules: {
  }
})
