import cn from '../../utils/cn'
import Container from '../Container/Container'
import Grid from '../Grid/Grid'
import Button from '../Button/Button'
import HomeImg from '../../img/home.png'
import './Home.css'

const home = cn('home')

const Home = () => {
  return (
    <div className={home()} id="home">
      <Container>
        <Grid className={home('container')}>
          <div className={home('img')}>
            <img src={HomeImg} alt="home"/>
          </div>

          <div className={home('data')}>
            <h1 className={home('title')}>Отправить Подарок На Рождество</h1>
            <p className={home('description')}>В эти праздники в конце года отправьте подарок своему любимому человеку и поделитесь счастьем на Рождество.</p>
            <Button>Начать</Button>
          </div>
        </Grid>
      </Container>
    </div>
  )
}

export default Home
