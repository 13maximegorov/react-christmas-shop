import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Home from './components/Home/Home'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main>
        <Home />
      </Main>
    </div>
  )
}

export default App
