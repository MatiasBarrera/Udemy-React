import PropTypes from 'prop-types';

const PrimeraApp = ({ saludo, subtitle }) => {

  return <>
    <h1>{ saludo }!!!</h1>
    <p>{ subtitle }</p>
  </>

}

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
  otra: PropTypes.number
}

PrimeraApp.defaultProps = {
  subtitle: 'Soy un subtitle'
}

export default PrimeraApp
