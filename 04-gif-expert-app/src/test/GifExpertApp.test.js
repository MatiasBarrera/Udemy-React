import { shallow } from "enzyme";
import {GifExpertApp} from '../GifExpertApp'

describe('Prueba de componente GifExpertApp.js', () => {
  test('Debe de mostrar componente <GifExpertApp /> correctamente', () => {
    const wrapper = shallow(<GifExpertApp />)
    expect(wrapper).toMatchSnapshot()
  });

  test('Debe de mostrar una lista de categorias', () => {
    const categories = ['hunter x', 'dragon ball']
    const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>)

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('GifGrid').length).toBe(categories.length)
  });
});