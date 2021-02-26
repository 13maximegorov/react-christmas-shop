import {classnames} from '@bem-react/classnames'
import PropTypes from 'prop-types'
import cn from '../../utils/cn'
import './Button.css'

const button = cn('button')

const Button = ({className, children, onClick, href, link}) => {
  return (
    <a
      href={href}
      className={classnames(className, button({link: link}))}
      onClick={onClick}
    >
      {children}
    </a>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  onClick: PropTypes.func,
  href: PropTypes.string
}

Button.defaultProps = {
  children: 'Button',
  href: '#'
}

export default Button
