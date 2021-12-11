//import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import PrimerApp from '../PrimerApp'

describe('Pruebas en <PrimerApp />', () => {
  // test('Demostrar el mensaje "Hola, soy Matias"', () => {
  //   const saludo = 'Hola, soy Matias'

  //   const wrapper = render( <PrimeraApp saludo={saludo}/> )    
  //   expect(wrapper.getByText(saludo)).toBeInTheDocument()
  // });
  
  test('debe de mostrar <PrimerApp /> correctamente', () => {
    const saludo = 'Hola, soy Matias'
    const wrapper = shallow( <PrimerApp saludo={saludo}/>)

    expect(wrapper).toMatchSnapshot()
    
  });

  test('debe de mostrat el subtitulo enviado por props', () => {
    const saludo = 'Hola, soy Matias'
    const subtitle = 'Desarrollador web'
    const wrapper = shallow( <PrimerApp saludo={saludo} subtitle={subtitle}/>)

    const textParrafo = wrapper.find('p').text()
    expect(textParrafo).toBe(subtitle)

  });
});