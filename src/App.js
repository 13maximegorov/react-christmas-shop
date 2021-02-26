import {useEffect} from 'react'
import ScrollReveal from 'scrollreveal'
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
  const sr = ScrollReveal({
    distance: '30px',
    duration: 1000,
    reset: true
  })

  useEffect(() => {
    sr.reveal(`.home__data, .home__img,
               .decoration__data,
               .accessory__content,
               .footer__content`, {
      origin: 'top',
      interval: 200
    })

    sr.reveal(`.share__img, .send__content`, {
      origin: 'left'
    })

    sr.reveal(`.share__data, .send__img`, {
      origin: 'right'
    })
  }, [])

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
