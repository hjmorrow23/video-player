import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex';
import VideoPlayer from '@/views/VideoPlayer.vue'
import { __createMocks as createStoreMocks } from '@/store';
import VueRouter from 'vue-router'


jest.mock('@/store');

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(VueRouter)

const router = new VueRouter()
const store = new Vuex.Store()

describe('test suite for VideoPlayer.vue', () => {
    let storeMocks;
    let wrapper;

    beforeEach(() => {
        // Create a fresh store and wrapper
        // instance for every test case.
        storeMocks = createStoreMocks();
        wrapper = shallowMount(VideoPlayer, {
            store: storeMocks.store,
            localVue,
            router
        });
    })

    it('has created a hook', () => {
        expect(typeof VideoPlayer.created).toBe('function')
        expect(typeof VideoPlayer.computed.user).toBe('function')
    });

    test('It should getUser with created', async () => {
        expect(storeMocks.actions.getUser).toBeCalled();
    });
});