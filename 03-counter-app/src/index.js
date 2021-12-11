import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';
import './index.css'
// import PrimeraApp from './PrimerApp';

const App = () => {
  return <CounterApp />
}

const divRoot = document.querySelector('#root')

// ReactDOM.render(<App />, divRoot)
ReactDOM.render(<App />, divRoot)