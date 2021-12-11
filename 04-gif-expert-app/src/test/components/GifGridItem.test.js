import { shallow } from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem'

describe('Pruebas en componente GifGridItem.js', () => {
  const title = 'Hunter x Hunter'
  const url = 'https://localhost.com'
  let wrapper = shallow(<GifGridItem title={title} url={url} />)
  
  beforeEach(()=>{
    wrapper = shallow(<GifGridItem title={title} url={url} />)
  })

  test('Debe mostrar el componente <GifGridItem /> correctamente', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('Debe de tener un parrafo con el title', () => {
    const p = wrapper.find('p')
    const text = p.text().trim()
    expect(text).toBe(title)
  });

  test('Debe de tener la imagen un url y alt igual al de los props', () => {
    const props = {
      src: url,
      alt: title
    }
    const img = wrapper.find('img')
    const attributes = img.props()
    
    expect(attributes).toMatchObject(props)
  });

  test('Debe de tener animate__bounceIn', () => {
    const animateBounceIn = 'animate__bounceIn'
    const div = wrapper.find('div')

    const clssName = div.prop('className')

    expect(clssName.includes(animateBounceIn)).toBeTruthy()
  });

})
