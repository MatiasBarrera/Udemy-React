import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import { useFetchGifts } from '../../hooks/useFetchGifs'
jest.mock('../../hooks/useFetchGifs')

describe('Prueba de componente GifGrid.js', () => {
  const category = 'hunter x hunter'
  //let wrapper = shallow(<GifGrid category={category}/>)

  test('Debe de mostrar el componente <GifGrid /> correctamente', () => {
    useFetchGifts.mockReturnValue({
      data: [],
      loading: true,
    });
    
    const wrapper = shallow(<GifGrid category={category}/>)
    expect(wrapper).toMatchSnapshot()
  });

  test('Debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
    const gifs = [{
      id: 'ABC',
      url: 'https://google.com',
      title: 'ABC Title'
    }]
  
    useFetchGifts.mockReturnValue({
      data: gifs,
      loading: false,
    });
  
    const wrapper = shallow(<GifGrid category={category}/>);

    const p = wrapper.find('p').exists()
    const gifGridItem = wrapper.find('GifGridItem').length

    expect(p).toBeFalsy()
    expect(gifGridItem).toBe(gifs.length)

  });
});