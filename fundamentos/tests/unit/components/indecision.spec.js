import { shallowMount } from '@vue/test-utils';
import  Indecision  from '@/components/Indecision';

describe('Indecision Component', () => {
    let wrapper;
    let consoleLogSpy;
    //haciendo un mock de la peticion fetch del metodo getAnswer
    globalThis.fetch = jest.fn( ()=> Promise.resolve({
        json: () => Promise.resolve({
            answer:'yes',
            forced: false,
            image: 'https://yesno.wtf/assets/yes/2.gif'
        })
    }) )
    beforeEach(() => {
        wrapper = shallowMount(Indecision);
        consoleLogSpy = jest.spyOn( console, 'log' );
        jest.clearAllMocks(); //esto limpia todos los mocks
    });

    test('match con el snapshot', () =>{
        expect(wrapper.html() ).toMatchSnapshot()
    });

    test('escribir en el input no debe disparar ninguna peticion', async()=>{
        const getAnswerSpy = jest.spyOn( wrapper.vm, 'getAnswer')
        const input = wrapper.find('input')
        await input.setValue('Hola mundo')
        /* expect( consoleLogSpy).toHaveBeenCalled() // verifica si el console.log se ha llamado en el componente */
        expect( consoleLogSpy).toHaveBeenCalledTimes(1); // verifica si el console.log se ha llamado 1 sola vez
        //hacen lo mismo, verifica que el metodo vue no sea llamado
        expect(getAnswerSpy).toHaveReturnedTimes(0);
        expect(getAnswerSpy).not.toHaveBeenCalled();
    });

    test('escribir el simbolo de "?" debe disparar el getAnswer', async()=>{
        const getAnswerSpy = jest.spyOn( wrapper.vm, 'getAnswer')
        const input = wrapper.find('input')
        await input.setValue('ejemplo?')
        expect( consoleLogSpy).toHaveBeenCalledTimes(1);
        expect(getAnswerSpy).toHaveBeenCalled();
    });

    test('pruebas en getAnswer', async()=>{
        await wrapper.vm.getAnswer();
        console.log(wrapper.vm.img);
        console.log(wrapper.vm.answer);
        const img = wrapper.find('img'); //despues del await que seta los valores en el DOM es verificar que las cosas se hallan seteado
        expect(img.exists()).toBeTruthy();
        expect(wrapper.vm.img).toBe('https://yesno.wtf/assets/yes/2.gif');
        expect(wrapper.vm.answer).toBe('Si!');

    });

    test('pruebas en getAnswer - Fallo en la API', async()=>{
        
        fetch.mockImplementationOnce( () => Promise.reject('API IS DOWN'))
        await wrapper.vm.getAnswer();
        const img = wrapper.find('img'); //despues del await que seta los valores en el DOM es verificar que las cosas se hallan seteado
        expect(img.exists()).not.toBeTruthy();
        expect(wrapper.vm.answer).toBe('No se pudo cargar del API');

    });
});