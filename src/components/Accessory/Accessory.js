import cn from '../../utils/cn'
import Section from '../Section/Section'
import Container from '../Container/Container'
import Grid from '../Grid/Grid'
import SectionTitle from '../SectionTitle/SectionTitle'
import Button from '../Button/Button'
import Accessory1Img from '../../img/accessories/accessory1.png'
import Accessory2Img from '../../img/accessories/accessory2.png'
import Accessory3Img from '../../img/accessories/accessory3.png'
import Accessory4Img from '../../img/accessories/accessory4.png'
import Accessory5Img from '../../img/accessories/accessory5.png'
import './Accessory.css'

const accessory = cn('accessory')

const Accessory = () => {
  const accessoryItems = [
    {img: Accessory1Img, title: 'Снежный Шар', category: 'Аксессуар', price: '9.45'},
    {img: Accessory2Img, title: 'Конфеты', category: 'Аксессуар', price: '2.52'},
    {img: Accessory3Img, title: 'Ангел', category: 'Аксессуар', price: '13.15'},
    {img: Accessory4Img, title: 'Сфера', category: 'Аксессуар', price: '4.25'},
    {img: Accessory5Img, title: 'Подарок-Сюрприз', category: 'Аксессуар', price: '20.55'}
  ]

  return (
    <Section className={accessory()} id="accessory">
      <Container>
        <SectionTitle>Новые Рождественские <br/> Аксессуары</SectionTitle>

        <Grid className={accessory('container')}>
          {accessoryItems.map((item, index) =>
            <div className={accessory('content')} key={index}>
              <img src={item.img} alt="accessory" className={accessory('img')}/>
              <h3 className={accessory('title')}>{item.title}</h3>
              <span className={accessory('category')}>{item.category}</span>
              <span className={accessory('price')}>${item.price}</span>
              <Button className={accessory('button')}>
                <i className="bx bx-heart"></i>
              </Button>
            </div>
          )}
        </Grid>
      </Container>
    </Section>
  )
}

export default Accessory
