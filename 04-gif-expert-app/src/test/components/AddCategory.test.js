import { shallow } from "enzyme";
import { AddCategory } from '../../components/AddCategory'

describe('Pruebas en componente AddCategory.js', () => {
  const setCategories = jest.fn()
  let wrapper = shallow(<AddCategory setCategories={setCategories}/>)

  beforeEach(() => {
    jest.clearAllMocks()
    wrapper = shallow(<AddCategory setCategories={setCategories}/>)
  })

  test('Debe mostrar el componente <AddCategory /> correctamente', () => {
    expect(wrapper).toMatchSnapshot()
  });

  test('Debe de cambiar la caja de texto', () => {
    const input = wrapper.find('input')
    const value = 'Hola mundo'
    input.simulate('change', {target: { value }}) 
    const inputValueChanged = wrapper.find('input')
    
    expect(inputValueChanged.prop('value')).toBe(value)

  });

  test('No debe de postear la informacion con submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault(){} })
    expect(setCategories).not.toHaveBeenCalled()
  });

  test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
    const input = wrapper.find('input')
    const value = 'Pokemon'

    input.simulate('change', {target: { value }}) 
    wrapper.find('form').simulate('submit', { preventDefault(){} })

    expect(setCategories).toHaveBeenCalledWith(expect.any(Function))
    expect(setCategories).toHaveBeenCalledTimes(1)
    expect(setCategories).toHaveBeenCalled()
    expect(wrapper.find('input').prop('value')).toBe('')
  });
});
