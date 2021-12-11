import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe('Pruebas en <CounterApp />', () => {
  let wrapper = shallow( <CounterApp />)
  beforeEach(()=> {
    wrapper = shallow( <CounterApp />)
  })

  test('debe de mostrar <CounterApp /> correctamente', () => {
    expect(wrapper).toMatchSnapshot()
  });

  test('debe de mostrar el valor por defecto de 100', () => {
    const valor = 100
    const wrapper = shallow(<CounterApp value={valor}/>)

    const valorDefecto = wrapper.find('p').text()

    expect(valorDefecto).toBe(`${valor}`)
  });

  test('debe de incrementar con el botton +1', () => {
    wrapper.find('button').at(0).simulate('click')
    const counterText = wrapper.find('p').text().trim()
    expect(counterText).toBe('11')
  });

  test('debe de decrementar con el botton -1', () => {
    wrapper.find('button').at(2).simulate('click')
    const counterText = wrapper.find('p').text().trim()
    expect(counterText).toBe('9')
  });

  test('debe de resetear con el botton reset', () => {
    const valor = 100
    const wrapper = shallow(<CounterApp value={valor}/>)
    
    wrapper.find('button').at(0).simulate('click')
    wrapper.find('button').at(1).simulate('click')

    const counterText = wrapper.find('p').text().trim()
    expect(counterText).toBe('100')
  });
});