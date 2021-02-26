import cn from '../../utils/cn'
import Section from '../Section/Section'
import Container from '../Container/Container'
import Grid from '../Grid/Grid'
import SectionTitle from '../SectionTitle/SectionTitle'
import Button from '../Button/Button'
import Decoration1Img from '../../img/decorations/decoration1.png'
import Decoration2Img from '../../img/decorations/decoration2.png'
import Decoration3Img from '../../img/decorations/decoration3.png'
import './Decoration.css'

const decoration = cn('decoration')

const Decoration = () => {
  const decorationItems = [
    {img: Decoration1Img, title: 'Рождественские Колокола'},
    {img: Decoration2Img, title: 'Рождественские Конфеты'},
    {img: Decoration3Img, title: 'Рождественские Елки'}
  ]

  return (
    <Section className={decoration()} id="decoration">
      <Container>
        <SectionTitle>Новогодние Украшения <br/> Для Вашего Дома</SectionTitle>

        <Grid className={decoration('container')}>
          {decorationItems.map((item, index) =>
            <div className={decoration('data')} key={index}>
              <img src={item.img} alt="decoration" className={decoration('img')}/>
              <h3 className={decoration('title')}>{item.title}</h3>
              <Button link>В Корзину</Button>
            </div>
          )}
        </Grid>
      </Container>
    </Section>
  )
}

export default Decoration
