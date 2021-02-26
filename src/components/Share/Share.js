import cn from '../../utils/cn'
import Section from '../Section/Section'
import Container from '../Container/Container'
import Grid from '../Grid/Grid'
import SectionTitle from '../SectionTitle/SectionTitle'
import Button from '../Button/Button'
import ShareImg from '../../img/share.png'
import './Share.css'

const share = cn('share')

const Share = () => {
  return (
    <Section className={share()} id="share">
      <Container>
        <Grid className={share('container')}>
          <div className={share('data')}>
            <SectionTitle>Поделиться - Лучший Подарок, <br/> Который Вы Можете Сделать</SectionTitle>
            <p className={share('description')}>Поделиться этими праздниками - это лучший подарок, который вы можете сделать. Подарить подарок или поделиться своей любовью с людьми, которых вы любите больше всего, и отпраздновать с большим счастьем.</p>
            <Button>Отправить Подарок</Button>
          </div>

          <div className={share('img')}>
            <img src={ShareImg} alt="share"/>
          </div>
        </Grid>
      </Container>
    </Section>
  )
}

export default Share
