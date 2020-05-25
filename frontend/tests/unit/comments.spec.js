import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex';
import Comments from '@/components/Comments.vue'
import { __createMocks as createStoreMocks } from '@/store';
import VueRouter from 'vue-router'


jest.mock('@/store');

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(VueRouter)

const router = new VueRouter()

describe('test suite for Comments.vue', () => {
    let storeMocks;
    let wrapper;

    beforeEach(() => {
        // Create a fresh store and wrapper
        // instance for every test case.
        storeMocks = createStoreMocks();
        wrapper = shallowMount(Comments, {
            store: storeMocks.store,
            localVue,
            router
        });
    })

    it('has created a hook', () => {
        expect(typeof Comments.created).toBe('function')
        expect(typeof Comments.computed.comments).toBe('function')
    });

    test('It should getUser with created', () => {
        expect(storeMocks.actions.getVideoComments).toBeCalled();
    });
});