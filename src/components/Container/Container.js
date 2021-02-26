import {classnames} from '@bem-react/classnames'
import cn from '../../utils/cn'
import PropTypes from 'prop-types'
import './Container.css'

const container = cn('container')

const Container = ({className, children}) => {
  return (
    <div className={classnames(className, container())}>
      {children}
    </div>
  )
}

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default Container
