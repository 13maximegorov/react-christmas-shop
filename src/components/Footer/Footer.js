import cn from '../../utils/cn'
import Section from '../Section/Section'
import Container from '../Container/Container'
import Grid from '../Grid/Grid'
import SectionTitle from '../SectionTitle/SectionTitle'
import Button from '../Button/Button'
import LogoDark from '../../img/logo/logo_dark.png'
import './Footer.css'

const footer = cn('footer')

const Footer = () => {
  return (
    <Section className={footer()}>
      <Container>
        <Grid className={footer('container')}>
          <div className={footer('content')}>
            <a href="#">
              <img src={LogoDark} alt="logo" className={footer('logo')}/>
            </a>
            <p className={footer('description')}>Я отправил подарок, <br/> и он приносит счастье</p>
          </div>

          <div className={footer('content')}>
            <h3 className={footer('title')}>Наши Услуги</h3>

            <ul>
              <li>
                <a href="#" className={footer('link')}>Ценовая Политика</a>
              </li>
              <li>
                <a href="#" className={footer('link')}>Распродажа</a>
              </li>
              <li>
                <a href="#" className={footer('link')}>Способы Доставки</a>
              </li>
            </ul>
          </div>

          <div className={footer('content')}>
            <h3 className={footer('title')}>Наша Компания</h3>

            <ul>
              <li>
                <a href="#" className={footer('link')}>Блог</a>
              </li>
              <li>
                <a href="#" className={footer('link')}>О нас</a>
              </li>
              <li>
                <a href="#" className={footer('link')}>Наша миссия</a>
              </li>
            </ul>
          </div>

          <div className={footer('content')}>
            <h3 className={footer('title')}>Социальная Сеть</h3>

            <a href="#" className={footer('social')}><i className="bx bxl-facebook-square"></i></a>
            <a href="#" className={footer('social')}><i className="bx bxl-twitter"></i></a>
            <a href="#" className={footer('social')}><i className="bx bxl-instagram"></i></a>
          </div>
        </Grid>

        <p className={footer('copy')}>&#169; 2021 Christmas Gift. Все права защищены.</p>
      </Container>
    </Section>
  )
}

export default Footer
