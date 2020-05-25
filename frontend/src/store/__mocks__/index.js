import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';
import { comments } from '../../../tests/unit/mock-api/comments'

Vue.use(Vuex);

export const state = {
    user: {
        id: 1,
        username: 'foo',
        password: 'bar',
        email: 'foobar@gmail.com',
        created_on: moment(),
        last_login: moment()
    },
    currentVideo: {
        id: 9,
        title: 'Test Video',
        video_url: 'http://test.com',
        thumb_url: 'http://test.jpg',
        user_id: 1,
        likes: 5,
        dislikes: 2,
        views: 3,
        comment_id: 4
    }, 
    users: [{
            id: 1,
            username: 'foo',
            password: 'bar',
            email: 'foobar@gmail.com',
            created_on: moment(),
            last_login: moment()
        },
        {
            id: 2,
            username: 'test',
            password: 'mate',
            email: 'foobar@gmail.com',
            created_on: moment(),
            last_login: moment()
        },
        {
            id: 3,
            username: 'mr',
            password: 'meeseeks',
            email: 'foobar@gmail.com',
            created_on: moment(),
            last_login: moment()
        },
    ],
    videos: [
        {
            id: 9,
            title: 'Test Video',
            video_url: 'http://test.com',
            thumb_url: 'http://test.jpg',
            user_id: 1,
            likes: 5,
            dislikes: 2,
            views: 3,
            comment_id: 4
        },
        {
            id: 10,
            title: 'Test Schmideo',
            video_url: 'http://test.com',
            thumb_url: 'http://test.jpg',
            user_id: 1,
            likes: 5,
            dislikes: 2,
            views: 3,
            comment_id: 5
        },
        {
            id: 11,
            title: 'Test Gideo',
            video_url: 'http://test.com',
            thumb_url: 'http://test.jpg',
            user_id: 1,
            likes: 5,
            dislikes: 2,
            views: 3,
            comment_id: 6
        }
    ],
    comments
};

export const getters = {
    user: jest.fn().mockReturnValue(
       {
           id: 1,
           username: 'foo',
           password: 'bar',
           email: 'foobar@gmail.com',
           created_on: moment(),
           last_login: moment()
       } 
    ),
    currentVideo: jest.fn().mockReturnValue(
        {
            id: 9,
            title: 'Test Video',
            video_url: 'http://test.com',
            thumb_url: 'http://test.jpg',
            user_id: 1,
            likes: 5,
            dislikes: 2,
            views: 3,
            comment_id: 4
        }
    )
};

export const mutations = {
    SAVE_USERS: jest.fn(),
    SAVE_USER: jest.fn(),
    SAVE_VIDEOS: jest.fn(),
    SAVE_VIDEO: jest.fn(),
    SAVE_COMMENT: jest.fn(),
};

export const actions = {
    getUsers: jest.fn(),
    getUser: jest.fn(),
    getVideos: jest.fn(),
    getVideo: jest.fn(),
    incrementVideoField: jest.fn(),
    getVideoComments: jest.fn(),
};

export function __createMocks(custom = { getters: {}, mutations: {}, actions: {}, state: {} }) {
    const mockGetters = Object.assign({}, getters, custom.getters);
    const mockMutations = Object.assign({}, mutations, custom.mutations);
    const mockActions = Object.assign({}, actions, custom.actions);
    const mockState = Object.assign({}, state, custom.state);
  
    return {
      getters: mockGetters,
      mutations: mockMutations,
      actions: mockActions,
      state: mockState,
      store: new Vuex.Store({
        getters: mockGetters,
        mutations: mockMutations,
        actions: mockActions,
        state: mockState,
      }),
    };
  }
  
  export const store = __createMocks().store;
