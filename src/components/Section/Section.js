import {classnames} from '@bem-react/classnames'
import cn from '../../utils/cn'
import PropTypes from 'prop-types'
import './Section.css'

const section = cn('section')

const Section = ({className, children, id}) => {
  return (
    <div className={classnames(className, section())} id={id}>
      {children}
    </div>
  )
}

Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  id: PropTypes.string
}

export default Section
