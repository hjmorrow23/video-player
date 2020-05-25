import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex';
import SingleComment from '@/components/SingleComment.vue'
import { __createMocks as createStoreMocks } from '@/store';
import VueRouter from 'vue-router'
import { comments } from './mock-api/comments'
import { users } from './mock-api/users'
import moment from 'moment'
import axios from 'axios'
import VueAxios from 'vue-axios'
import MockAdapter from "axios-mock-adapter";
const mock = new MockAdapter(axios);

jest.mock('@/store');

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(VueAxios, axios);
localVue.use(VueRouter);

const router = new VueRouter()

describe('test suite for SingleComment.vue', () => {
    let storeMocks;
    let wrapper;
    const INIT_USER = {};

    beforeEach(() => {
        mock.reset();
        // Create a fresh store and wrapper
        // instance for every test case.
        storeMocks = createStoreMocks();
        wrapper = shallowMount(SingleComment, {
            store: storeMocks.store,
            localVue,
            router,
            data() {
                return {
                    user: users[0],
                    userComment: comments[0],
                    dateDiff: jest.fn()
                }
            },
            propsData: {
                comment: comments[0]
            },
            methods: {
                calculateCommentDateDiff() {
                    return true
                }
            }
        });
        wrapper.setData({ user: INIT_USER });
    });

    afterAll(() => mock.restore());
    

    it('has created a hook', () => {
        expect(typeof SingleComment.mounted).toBe('function')
    });

    it("gets comment from API", async () => {
        mock
          .onGet("https://jsonplaceholder.typicode.com/users?id=1")
          .reply(200, [{ user: users[0] }]);
    
        await wrapper.vm.getUser();
        expect(wrapper.vm.user).toBe(users[0]);
      });
});