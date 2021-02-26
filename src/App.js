import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Home from './components/Home/Home'
import Share from './components/Share/Share'
import Decoration from './components/Decoration/Decoration';
import './App.css'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main>
        <Home />
        <Share />
        <Decoration />
      </Main>
    </div>
  )
}

export default App
