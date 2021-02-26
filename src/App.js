import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Home from './components/Home/Home'
import Share from './components/Share/Share'
import Decoration from './components/Decoration/Decoration'
import Accessory from './components/Accessory/Accessory'
import Send from './components/Send/Send'
import Footer from './components/Footer/Footer'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main>
        <Home />
        <Share />
        <Decoration />
        <Accessory />
        <Send />
      </Main>
      <Footer />
    </div>
  )
}

export default App
