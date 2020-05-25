import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex';
import Button from '@/components/Button.vue'
import { __createMocks as createStoreMocks } from '@/store';
import Vue from 'vue'
import VueRouter from 'vue-router'


jest.mock('@/store');

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(VueRouter)

const router = new VueRouter()

describe('test suite for Button.vue', () => {
    let storeMocks;
    let wrapper;

    beforeEach(() => {
        // Create a fresh store and wrapper
        // instance for every test case.
        storeMocks = createStoreMocks();
        wrapper = shallowMount(Button, {
            store: storeMocks.store,
            localVue,
            router,
            propsData: {
                callback: Function
            }
        });
    })

    it('has correct props', () => {
        //expect(typeof SingleComment.props).toBe('object');
        const defaultProps = Button.props;
        expect(typeof defaultProps.callback).toBe('object');
    });
});