import cn from '../../utils/cn'
import Section from '../Section/Section'
import Container from '../Container/Container'
import Grid from '../Grid/Grid'
import SectionTitle from '../SectionTitle/SectionTitle'
import Button from '../Button/Button'
import SendImg from '../../img/send.png'
import './Send.css'

const send = cn('send')

const Send = () => {
  return (
    <Section className={send()}>
      <Container>
        <Grid className={send('container')}>
          <div className={send('content')}>
            <SectionTitle className={send('title')}>Отправить Подарок Сейчас</SectionTitle>
            <p className={send('description')}>Начните раздавать подарки до окончания праздников. Напишите домашний адрес человека, который отправит подарок.</p>
            <form>
              <div className={send('direction')}>
                <input type="text" placeholder="Домашний адрес" className={send('input')}/>
                <Button>Отправить</Button>
              </div>
            </form>
          </div>

          <div className={send('img')}>
            <img src={SendImg} alt="send"/>
          </div>
        </Grid>
      </Container>
    </Section>
  )
}

export default Send
