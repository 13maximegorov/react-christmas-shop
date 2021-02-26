import {useState} from 'react'
import {classnames} from '@bem-react/classnames'
import cn from '../../utils/cn'
import Container from '../Container/Container'
import LogoDark from '../../img/logo/logo_dark.png'
import './Header.css'

const header = cn('header')
const nav = cn('nav')

const Header = () => {
  const linkItems = [
    {href: '#home', title: 'Главная'},
    {href: '#share', title: 'Подарить'},
    {href: '#decoration', title: 'Новогодние украшения'},
    {href: '#accessory', title: 'Новое'}
  ]

  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => setShowMenu(!showMenu)

  const clickNavLink = () => setShowMenu(false)

  return (
    <div className={header()}>
      <Container className={nav()}>
        <a href="#">
          <img src={LogoDark} alt="logo" className={nav('logo')}/>
        </a>

        <div className={nav('menu', {show: showMenu})}>
          <ul className={nav('list')}>
            {linkItems.map((item, index) =>
              <li className={nav('item')} key={index}>
                <a href={item.href} className={nav('link')} onClick={clickNavLink}>{item.title}</a>
              </li>
            )}
            <li className={nav('item')}>
              <i className={classnames('bx bx-moon', nav('theme'))}></i>
            </li>
          </ul>
        </div>

        <div className={nav('toggle')} onClick={toggleMenu}>
          <i className="bx bx-grid-alt"></i>
        </div>
      </Container>
    </div>
  )
}

export default Header

