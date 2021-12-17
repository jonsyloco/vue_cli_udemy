import { shallowMount } from '@vue/test-utils';
import  Counter  from '@/components/Counter';

describe('Counter Component', () => {

    /* test('debe de hacer match con el snapshot', () => {
        const wrapper = shallowMount(Counter)
        expect(wrapper.html() ).toMatchSnapshot()
    }); */

    test('h2 debe tener el valor por defecto "Counter"', () => {
        const wrapper = shallowMount(Counter);

        expect(wrapper.find('h1').exists()).toBeTruthy();

        const h2 = wrapper.find('h1').text();
        
        //identifica si la etiquera h2 del componente counter, tiene la palabra Counter
        expect(h2).toBe('Counter');

    })

    test("El valor por defecto debe ser 100", () => {
        const wrapper = shallowMount(Counter);
        /** forma 1 de hacerlo */
        expect( wrapper.findAll('p')[1].exists()).toBeTruthy();
        const pTags = wrapper.findAll('p')[1].text();
        expect(pTags).toBe('5');

    })

    test("El valor por defeccto debe ser 100 parte 2", ()=>{
        const wrapper = shallowMount(Counter);
        /**forma 2 de hacerlo */
        const pTags =  wrapper.find('[data-testid="counter"]').text();
        expect(pTags).toBe('5');
    })

    /**Toca volver el metodo async porque cuando se utiliza un disparador, hay que esperar a que el DOM virtual
     * se actualice
     */
    test('debe de incrementar en 1 el valor del contador', async() => {
        const wrapper = shallowMount(Counter);
        const increaseBtn = wrapper.find('button');
        await increaseBtn.trigger('click');
        const pTags =  wrapper.find('[data-testid="counter"]').text();
        expect(pTags).toBe('6');

    })

    test('debe de decrementar en 1 el valor del contador', async() => {
        const wrapper = shallowMount(Counter);
        const decreaseBtn = wrapper.findAll('button')[1];
        await decreaseBtn.trigger('click');
        await decreaseBtn.trigger('click');
        const pTags =  wrapper.find('[data-testid="counter"]').text();
        expect(pTags).toBe('3');
    })
});