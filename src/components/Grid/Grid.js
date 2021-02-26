import {classnames} from '@bem-react/classnames'
import cn from '../../utils/cn'
import PropTypes from 'prop-types'
import './Grid.css'

const grid = cn('grid')

const Grid = ({className, children}) => {
  return (
    <div className={classnames(className, grid())}>
      {children}
    </div>
  )
}

Grid.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default Grid
