import { shallowMount } from '@vue/test-utils';
import  Counter  from '@/components/Counter';

describe('Indecision Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(Counter)                
    });
    test('match con el snapshot', () =>{
        expect(wrapper.html() ).toMatchSnapshot()
    })
});