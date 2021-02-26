import {classnames} from '@bem-react/classnames'
import cn from '../../utils/cn'
import PropTypes from 'prop-types'
import './Main.css'

const main = cn('main')

const Main = ({className, children}) => {
  return (
    <div className={classnames(className, main())}>
      {children}
    </div>
  )
}

Main.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default Main
